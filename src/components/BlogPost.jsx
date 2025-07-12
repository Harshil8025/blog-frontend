import React, { useState } from 'react';
import CommentSection from './CommentSection';

const BlogPost = ({ title, content }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
      <CommentSection />
    </div>
  );
};

export default BlogPost;
