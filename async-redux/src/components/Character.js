import React from "react";
import { connect } from "react-redux";

const Character = props => {
  const { character } = props;
  return (
    <div>
      {character.map((star, index) => {
        return <h1 key={index}>{star.name}</h1>;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    character: []
  };
};

export default connect(mapStateToProps, {})(Character);
