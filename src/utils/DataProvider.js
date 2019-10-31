import React, { useContext, useEffect } from "react";
import { fetchDataFromAPI } from "./asyncFunctions";
import { ReducerContext } from "./reducer";
import Loader from "../components/Loader/Loader";
import MainGrid from "../components/MainGrid/MainGrid";

const DataProvider = () => {
  const { state, dispatch } = useContext(ReducerContext);

  useEffect(() => {
    fetchDataFromAPI(dispatch);
  }, []);

  return !state.isLoading ? <MainGrid people={state.data} /> : <Loader />;
};

export default DataProvider;
