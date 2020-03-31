import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStars } from "./actions";
import Character from "./components/Character";

import "./App.css";

const App = props => {
  useEffect(() => {
    props.fetchStars();
  }, []);

  return (
    <div className="App">
      <h1>StarWars Characters</h1>
      {/*{props.starError && <p>Error => {props.starError}</p>}*/}

      {props.isStarLoading ? <h2>Still Loading...</h2> : <Character />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isStarLoading: state.isLoading,
    starName: state.name,
    starError: state.error
  };
};

const mapDispatchToState = {
  fetchStars
};

export default connect(mapStateToProps, mapDispatchToState)(App);
