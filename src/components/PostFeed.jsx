import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function PostFeed(props) {
  return (
    <div>
      {props.postFeed.map((post) =>
        <Post sub={post.sub}
          user={post.user}
          text={post.text}
          image={post.image}
          key={post.id} />
      )}
    </div>
  );
}
PostFeed.propTypes = {
  postFeed: PropTypes.array
};

export default PostFeed;