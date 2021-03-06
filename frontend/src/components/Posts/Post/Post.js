import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Delete, MoreHoriz, ThumbUpAlt } from '@material-ui/icons';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/postsAction';
import useStyles from './styles';

const Post = ({ post, setcurrentId, setidPost }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small"
                    onClick={() => setcurrentId(post._id)}
                >
                    <MoreHoriz fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">
                    {post.tags.map((tag) => `*${tag}`)}
                </Typography>
            </div>
            <Typography variant="h5" gutterBottom
                className={classes.title}
            >
                {post.title}
            </Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary"
                    component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary"
                    onClick={() => dispatch(likePost(post._id))}
                >
                    <ThumbUpAlt fontSize="small" /> Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <Delete fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
