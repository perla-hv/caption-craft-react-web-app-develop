import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Poster from '../components/Poster';
import { Grid } from '@mui/material';
import Footer from '../components/Footer';
import * as client from "./client";
import Generate from "../components/Generate";

function UserCraft() {
  const [currUser, setCurrUser] = useState({});
  const fetchAccount = async () => {
    try {
      const user = await client.fetchAccount();
      setCurrUser(user);
    } catch (error){
      console.error("error in retrieving account!", error);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <Grid container direction="column" spacing={8}>
        <Grid item>
          <Header activeTab="Craft" user={currUser}/>
        </Grid>
        <Grid item>
          <Poster />
        </Grid>
        <Grid item>
          <Generate user={currUser}/>
        </Grid>
        <Grid item style={{ marginBottom: '-24px' }}> 
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default UserCraft;
