import React, { useContext, useEffect } from "react";
import { fetchDataFromAPI } from "./asyncFunctions";
import {ReducerContext, ReducerProvider} from "./reducer";
import Loader from "../components/Loader/Loader";
import MainGrid from "../components/MainGrid/MainGrid";
import MainContainer from "../components/MainContainer/MainContainer";
import Header from "../components/Header/Header";

const DataProvider = () => {
  const { state, dispatch } = useContext(ReducerContext);

  useEffect(() => {
    fetchDataFromAPI(dispatch);
  }, []);

  return !state.isLoading ? <MainContainer>
    <Header/>
    <MainGrid people={state.data} />
  </MainContainer>
  : <Loader />;
};

export default DataProvider;
