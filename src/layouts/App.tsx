import * as React from 'react';
import Header from '../components/Header/Header';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header/>
        <section>{this.props.children}</section>
      </div>
    );
  }
}

export default App;
