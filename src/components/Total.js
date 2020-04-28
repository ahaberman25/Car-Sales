import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.addFeatureReducer.additionalPrice,
    car: state.addFeatureReducer.car
  }
}

export default connect(
  mapStateToProps,
{})(Total);
