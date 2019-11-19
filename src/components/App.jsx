import React from 'react';
import Navbar from './Navbar';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     masterTicketList: []
  //   };
  //   this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  // }
  // handleAddingNewTicketToList(newTicket){
  //   var newMasterTicketList = this.state.masterTicketList.slice();
  //   newMasterTicketList.push(newTicket);
  //   this.setState({masterTicketList: newMasterTicketList});
  // }
  // render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          // <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          // <Route component={Error404} />
        </Switch>
      </div>
    ); 
}

export default App;