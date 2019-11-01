import React, { Component } from "react";
import DataProvider from "./utils/DataProvider";
import { ReducerProvider } from "./utils/reducer";
import MainContainer from "./components/MainContainer/MainContainer";

class App extends Component {
  render() {
    return (
      <ReducerProvider>
          <DataProvider />
      </ReducerProvider>
    );
  }
}

export default App;
