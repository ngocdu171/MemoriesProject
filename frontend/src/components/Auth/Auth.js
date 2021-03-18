import { Avatar, Button, Container, FilledInput, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import Input from './Input';
import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();
    const [ShowPassword, setShowPassword] = useState(false);
    const [isSignup, setisSignup] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!ShowPassword);
        console.log(ShowPassword);
    }
    const handleSubmit = () => {
        alert("this is handleSubmit!!");
    }
    const handleChange = () => {
        //
    }
    const switchMode = () => {
        setisSignup(!isSignup);
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <React.Fragment>
                                <Input name="firstname" label="firstname"
                                    autoFocus half
                                    handleChange={handleChange} />
                                <Input name="lastname" label="lastname"
                                    half
                                    handleChange={handleChange} />
                            </React.Fragment>
                        )}
                        <Input name="email" label="email address"
                            handleChange={handleChange} type="email"
                        />
                        <Input name="password" label="password"
                            handleChange={handleChange} type={ShowPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        { isSignup && <Input name="confirmPassword" label="Repear Password"
                            type="password" handleChange={handleChange} />
                        }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
