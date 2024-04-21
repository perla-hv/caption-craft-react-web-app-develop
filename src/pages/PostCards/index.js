import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function PostCards({ post }) {
  return (
    <Card sx={{
        width: '500px',     // Set the width to 400px
        height: '480px',    // Set the height to 450px
        marginBottom: '20px' // Add 10px margin at the bottom
      }}>
      <CardHeader
        avatar={
          <Avatar aria-label="user" src={post.userAvatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.username}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="250"
        image={post.imageUrl}
        alt={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{color: "rgb(255, 48, 64)"}}/>
          {post.likes}
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCards;
