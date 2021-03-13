import React from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image}
          src="https://i.pinimg.com/600x315/30/51/c6/3051c6211edf19433cb0792856ad2896.jpg" alt="memories" 
          height="300"  width="300"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
