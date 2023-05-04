import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getDog } from './actions';

import DogList from './components/dogList';
import DogForm from './components/dogForm';



function App(props) {
  const { loading } = props;

  console.log("props", props)

  useEffect(()=> {
    props.getDog()
  }, []);

  return (
    <div className="App">
      Async Redux Project
      <div>
        <h1>Dog Finder</h1>
        <p>"Finds random cute dog photo"</p>
        <DogForm />
        {loading ? <h3>We are loading!!</h3> : <DogList/> }     
            
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
};

export default connect(mapStateToProps, { getDog })(App);