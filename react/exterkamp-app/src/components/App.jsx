import React, { Component } from 'react';
import Splash from './Splash';
import '../styles/App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme: 'formal',
    };
  }

  swapTheme(){
    if (this.state.theme === 'formal'){
      this.setState({theme: 'party'});
    }else{
      this.setState({theme: 'formal'});
    }
  }

  render() {
    return (
      <div className={"site-content " + this.state.theme}>
        <Splash theme={this.state.theme} themeSwitch={() => this.swapTheme()}/>
      </div>
    );
  }
}

export default App;
