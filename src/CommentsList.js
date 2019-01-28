import React from 'react';
import Comment from './CommentContainer';
import './Comment.css';

const CommentsList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;
