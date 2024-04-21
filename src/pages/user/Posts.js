import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Paper, styled, Typography, Button, Avatar } from '@mui/material';
import Header from '../components/Header';
import PostCards from '../PostCards';
import * as client from './client';
import { setCurrUser, setPosts } from './userReducer';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  margin: theme.spacing(1),
}));

const ScrollableBox = styled(Box)({
  maxHeight: '300px',
  overflowY: 'auto'
});

const ActionButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  color: theme.palette.getContrastText(theme.palette.grey[900]), // assuming you want black text
  backgroundColor: theme.palette.grey[900], // black background
  '&:hover': {
    backgroundColor: theme.palette.success.main, // green background on hover
  },
}));

const UserCardContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
}));

const UserCard = ({ user, onActionClick, actionLabel }) => (
  <UserCardContainer>
    <Avatar src={user.profilePicture} />
    <Typography sx={{ marginLeft: 1, flexGrow: 1 }}>{user.name}</Typography>
    <ActionButton variant="contained" onClick={() => onActionClick(user._id)}>
      {actionLabel}
    </ActionButton>
  </UserCardContainer>
);

function UserPosts() {
  const { posts } = useSelector((state) => state.userReducer);
  const { currUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState([]);

  const fetchAccount = async () => {
    try {
      const user = await client.fetchAccount();
      dispatch(setCurrUser(user));
    } catch (error) {
      console.error('error in retrieving account!', error);
    }
  };

  const fetchFollowFeed = async (user) => {
    try {
      const response = await client.fetchFollowFeed(user);
      const transformedPosts = response.map(post => ({
        key: post._id,
        username: post.posterName,
        userAvatar: post.posterProfilePicture,
        date: new Date(post.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        imageUrl: post.url,
        description: post.description,
        likes: post.likes,
        public: post.public,
        comments: post.comments,
      }));
      dispatch(setPosts(transformedPosts));
    } catch (error) {
      console.error('error in retrieving account!', error);
    }
  };

  const getSuggestedUsers = async (user) => {
    try {
      const response = await client.fetchSuggestedUsers(user);
      setSuggestedUsers(response);
    } catch (error) {
      console.error('error in retrieving suggested Users!', error);
    }
  };

  const getFollowingUsers = async (user) => {
    try {
      const response = await client.fetchFollowingUsers(user); // Replace with your actual function
      setFollowingUsers(response);
    } catch (error) {
      console.error('error in retrieving following Users!', error);
    }
  };

  const handleFollow = async (userId) => {
    try {
      const Ids = {
        "_id" : currUser._id,
        "frndId" : userId
      }
      const response = await client.followUsers(Ids); // Replace with your actual function
      setFollowingUsers(response);

      setSuggestedUsers(prevSuggestedUsers => prevSuggestedUsers.filter(user => user._id !== userId));

    } catch (error) {
      console.error('error in following User!', error);
    }
  };

  const handleMessageButtonClick = (frndId) => {
    navigate(`/UserMessages/${frndId}`);
  };

  useEffect(() => {
    fetchAccount();
    getSuggestedUsers(currUser);
    getFollowingUsers(currUser);
  }, [currUser]);

  useEffect(() => {
    fetchFollowFeed(currUser);
  }, [currUser]);

  useEffect(() => {
    if (!currUser._id) {
      navigate('/Login');
    }
  }, [currUser, navigate]);

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <Grid container direction="column" spacing={9}>
        <Grid item>
          <Header activeTab="Home" />
        </Grid>
        <Grid item>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center" alignItems="column" spacing={10}>
              <Grid item xs={12} md={8} lg={9}>
                <Item sx={{ display: 'flex', flexDirection: 'column', spacing: 1, alignItems: 'center', justifyContent: 'center' }}>
                  {posts.map(p => (<PostCards key={p.key} post={p} />))}
                </Item>
              </Grid>
              <Grid item lg={2.7}>
                <Item>
                  <Typography variant="h6" textAlign="center">Suggested for You</Typography>
                  <ScrollableBox>
                    {suggestedUsers.map(user => (
                      <UserCard key={user._id} user={user} onActionClick={() => handleFollow(user._id)} actionLabel="Follow" />
                    ))}
                  </ScrollableBox>
                </Item>
                <Item>
                  <Typography variant="h6" textAlign="center">Following</Typography>
                  <ScrollableBox>
                    {followingUsers.map(user => (
                      <UserCard key={user._id} user={user} onActionClick={() => handleMessageButtonClick(user._id)} actionLabel="Message" />
                    ))}
                  </ScrollableBox>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserPosts;
