import React from "react";
import Dog from "./dog";
import { connect } from "react-redux";

 const DogList = props => {
    const { dogs } = props;
    let i = 0

    return (
        <div className="dogdiv">
            {
                 dogs.message.map(image => <Dog key={i++} image={image}/>)
            }
        </div>
       )
}
const mapStateToProps = state => {
    return {
        dogs: state.dogs
    }
}
export default connect(mapStateToProps)(DogList);