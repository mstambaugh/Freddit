import React from 'react';
// import PropTypes from 'prop-types';
import PostFeed from './PostFeed';

const TrendingCardStyles = {
  borderRadius: '8%'
},

function HomePage() {
  return (
    <div>
      <div className='row'> 
        <div className='col l3 m3'>
          <div className='card' style = {TrendingCardStyles}>
          </div>
        </div>
        <div className='col l3 m3'>
          <div className='card' style = {TrendingCardStyles}>
          </div>
        </div>
        <div className='col l3 m3'>
          <div className='card' style = {TrendingCardStyles}>
          </div>
        </div>
        <div className='col l3 m3'>
          <div className='card' style = {TrendingCardStyles}>
          </div>
        </div>
      </div>
        <div className='row'>
          <div classname='col l8 m8'>
            <div className='card'>
            </div> 
            <div className='card'>
              <PostFeed />
            </div> 
          </div>
        </div>
    </div>      
    
  );
}
export default HomePage;