import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import * as client from "./client";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

function UserMessages() {
  const [list, setList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);
  const { currUser } = useSelector((state) => state.userReducer);
  const { frndId } = useParams();


  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, selectedUser]); // Scroll to bottom when messages or selectedUser changes

  const chattedUsers = useCallback(async () => {
    try {
      const Id = { "userId": currUser._id };
      const chattedList = await client.fetchFriendMessagesList(Id);
      setList(chattedList);
      if (frndId) {
        handleUserClick(frndId);
      }

    } catch (error) {
      console.error("error in retrieving friends list!", error);
    }
  }, [currUser]);

  useEffect(() => {
    chattedUsers();
  }, [chattedUsers]);

  const handleSendMessage = async () => {
    if (selectedUser && newMessage.trim()) {
      const messageToSend = {
        senderId: currUser._id,
        receiverId: selectedUser,
        messageContent: newMessage,
        timestamp: new Date().toISOString(),
        isRead: false,
      };

      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedUser]: [...(prevMessages[selectedUser] || []), messageToSend],
      }));

      setNewMessage('');

      try {
        await addMessage(selectedUser, newMessage);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleUserClick = async (userId) => {
    setSelectedUser(userId);
    await fetchFriendMessages(userId);
  };

  const fetchFriendMessages = async (friendId) => {
    try {
      const Ids = {
        "userId": currUser._id,
        "friendId": friendId
      };
      const messagesFromFriend = await client.fetchMessages(Ids);
      setMessages({ ...messages, [friendId]: messagesFromFriend });
    } catch (error) {
      console.error("error in retrieving messages!", error);
    }
  };

  const addMessage = async (friendId, message) => {
    try {
      const info = {
        "userId": currUser._id,
        "friendId": friendId,
        "message": message
      };
      await client.addMessageToUser(info);
    } catch (error) {
      console.error("error in adding message!", error);
    }
  };

  return (
    <div>
      <Header activeTab="Messages" />
      <Grid container sx={{ height: '91vh', mt: 10 }}>
        <Grid item xs={4} sx={{ borderRight: 1, borderColor: 'divider', overflowY: 'auto' }}>
          <List>
            {list.map((user) => (
              <ListItem button key={user._id} selected={selectedUser === user._id} onClick={() => handleUserClick(user._id)}>
                <ListItemAvatar>
                  <Avatar alt={user.firstname} src={user.profilePicture} />
                </ListItemAvatar>
                <ListItemText primary={`${user.firstname} ${user.lastname}`} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box ref={chatContainerRef} flex={1} sx={{ overflowY: 'auto', padding: 2 }}>
          {selectedUser && messages[selectedUser] && messages[selectedUser].map((message, index) => (
            <Box key={message._id} sx={{ display: 'flex', justifyContent: message.senderId === currUser._id ? 'flex-end' : 'flex-start', mb: 1 }}>
              <Paper elevation={1} sx={{ padding: '6px 12px', borderRadius: '16px', maxWidth: '75%', wordBreak: 'break-word' }}>
                {/* Here we assume you have a messageContent property that you want to display */}
                <ListItemText primary={message.messageContent} secondary={message.senderId === currUser._id ? 'You' : 'Friend'} />
              </Paper>
            </Box>
          ))}
        </Box>
          <Box sx={{ borderTop: 1, borderColor: 'divider', padding: 1, backgroundColor: 'background.paper', display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserMessages;
