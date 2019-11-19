import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import { Switch, Route } from 'react-router-dom';
// import PostFeed from './PostFeed';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToFeed = this.handleAddingNewPostToFeed.bind(this);
  }
  // handleAddingNewPostToFeed(newPost){
  //   var newMasterPostFeed = this.state.masterPostFeed.slice();
  //   newMasterPostFeed.push(newPost);
  //   this.setState({masterPostList: newMasterPostList});
  // }

  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
        <Switch>
          <Route exact path='/' render={()=><HomePage postFeed={this.state.masterPostFeed} />} />/>
          {/* <Route path='/newpost' render={()=><NewPostControl onNewPostCreation={this.handleAddingNewPostToFeed} />} /> */}
        </Switch>
      </div>
    ); 
  }
}

export default App;