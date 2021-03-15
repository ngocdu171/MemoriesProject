import React, { useEffect, useState } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/postsAction'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import './index.css';

const App = () => {
  const [currentId, setcurrentId] = useState(null);
  const [idPost, setidPost] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [idPost, currentId, dispatch]);

  console.log("this is CurrentId: ",currentId);
  console.log("this is IdPost in App: ", idPost);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image}
          src="https://i.pinimg.com/600x315/30/51/c6/3051c6211edf19433cb0792856ad2896.jpg" alt="memories" 
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setcurrentId={setcurrentId} setidPost={setidPost}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setcurrentId={setcurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
