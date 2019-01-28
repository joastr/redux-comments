import React from 'react';
import { thumbDownComment } from './actions';
import{ thumbUpComment } from './actions';
import './Comment.css';


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
  <li>
    <span className="comments">{text}</span> 
    <div className="buttons">
      <span className="votes">votes: {votes}</span> 
    
      <button className="align" onClick={() => thumbUpComment(id)}>Up</button>
      <button onClick={()=> thumbDownComment(id)}>Down</button>
    </div>
  </li>;

export default Comment


