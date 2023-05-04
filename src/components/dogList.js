import React from "react";
import { connect } from "react-redux";

 const DogList = props => {
    const { dogs } = props;
    let id = 0
    const dogMessage = dogs.message
    return (
        <div className="dogdiv">
            <img height='500px' src={dogMessage}/>
            <h5>Search ID: {Date.now()}</h5>           
        </div>
       )
}
const mapStateToProps = state => {
    return {
        dogs: state.dogs
    }
}
export default connect(mapStateToProps)(DogList);