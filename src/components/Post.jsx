import React from 'react';
import PropTypes from 'prop-types';

const PostStyles = {
  color: 'white',
  borderLeft: 'blue'
};

function Post(props) {
  return (
    <div className='row'>
      <div className='col l8 m5'>
          <div className='card' style = {PostStyles}>
            <h3>{props.sub} - {props.user}</h3>
            <h2>{props.text}</h2>
            <hr/>
          </div>
        </div>
      </div>
  );
}
Post.propTypes = {
  sub: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Post;