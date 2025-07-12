import React, { useState } from 'react';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="comments">
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={addComment}>Comment</button>
      <ul>
        {comments.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  );
};

export default CommentSection;
