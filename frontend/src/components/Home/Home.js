import React, { useState, useEffect} from 'react';
import { Container, Grid, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/postsAction'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setcurrentId] = useState(null);
    const [idPost, setidPost] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [idPost, currentId, dispatch]);

    console.log("this is CurrentId: ", currentId);
    console.log("this is IdPost in App: ", idPost);
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                    <Grid item xs={12} sm={7}>
                        <Posts setcurrentId={setcurrentId} setidPost={setidPost} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setcurrentId={setcurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
