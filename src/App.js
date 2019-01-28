import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer';
import './Comment.css';

const App = () => {
  return (
    <div className="App">
      <h1>Simple comments list</h1>
      <CommentsList/>
    </div>
  );
};

export default App;