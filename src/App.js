import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { data } from './components/dogData'
import DogList from './components/dogList';
import DogForm from './components/dogForm';



function App(props) {
  const { loading } = props
  return (
    <div className="App">
      Async Redux Project
      <div>
        <h1>Search for Dogs</h1>
        <DogForm />
        {loading ? <h3>We are loading</h3> : <DogList/> }     
            
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}
export default connect(mapStateToProps)(App);