import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {useSelector} from "react-redux";

function UserInfo({ user }) {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item>
        <img
          src={user.profilePicture}
          alt={user.name}
          style={{ width: '150px', height: '150px', borderRadius: '50%', marginTop: '20px', marginLeft: '20px' }}
        />
      </Grid>
      <Grid item>
        {}
        <Typography variant="h4" style={{ marginBottom: '16px' }}>{user.firstname + " " + user.lastname}</Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography variant="body1" align="center">Following</Typography>
            <Typography variant="h6" align="center">{user.following.length}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center">Followers</Typography>
            <Typography variant="h6" align="center">{user.followers.length}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center">Posts</Typography>
            <Typography variant="h6" align="center">{user.PostedPictures.length}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function UserPosts({ posts }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      {posts.map((post, index) => (
        <Card key={index} style={{ width: '200px', margin: '10px' }}>
          {post.url && (
            <CardMedia
              component="img"
              alt="Post Image"
              height="140"
              image={post.url}

            />
          )}
          <CardContent>
            <Typography>{post.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function UserProfile() {
  const {currUser} = useSelector((state) => state.userReducer);
  console.log(currUser);
  const userPosts = [
    { image: 'https://lh5.googleusercontent.com/p/AF1QipMWW7UPJPT0ARPXMXIw2VzHBkqHPGLWMzps_uTF=w1080-h624-n-k-no', caption: 'Enjoying the view!!!' },
    { image: 'https://lh5.googleusercontent.com/p/AF1QipNIBSvmCqm3tphLvc3CXtSdVrpQtyCg3x4zpEKo=w1080-h624-n-k-no', caption: 'Snow day :)' },
    { image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT6fGRB6BWpBGBaSpUqJ60B6W5zKosWtyTw0z2650XrzkCzZ299-EIS1LSDhXPOA8HR8KbbzMj511XWDFCIZE8lARzFSGZQH7bO4K0S8g', caption: 'Beautiful Vermont!' },
  ];

  return (
      <div style={{ overflow: 'hidden', width: '100%', textAlign: 'center' }}>
        <Header activeTab="Profile" />
        <Grid container direction="column" spacing={8} alignItems="center" style={{ marginTop: '25px' }}>
          {}
          <Grid item>
            {}
            <UserInfo user={currUser} />
          </Grid>
          <Grid item>
                    {}
                    <Typography variant="h6">Posts</Typography>
                  </Grid>
          <Grid item>
            {}
            <UserPosts posts={currUser.PostedPictures} />
          </Grid>

        </Grid>
        <Footer />
      </div>
    );
  }

  export default UserProfile;
