import React from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';


const {newValue} = this.props


function App() {
  return (<div className="App" style={{ paddingTop: '10px' }}>
  <input type='text' />
  <button>
    Click me!
  </button>
  <h1>{newValue}</h1>
</div>
  );
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});
export default connect(mapStateToProps)(App);
