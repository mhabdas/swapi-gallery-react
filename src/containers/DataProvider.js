import React, { useContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/asyncFunctions";
import { ReducerContext } from "../utils/reducer";
import Loader from "../components/Loader/Loader";
import MainGrid from "../components/MainGrid/MainGrid";

const DataProvider = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const [personToDisplay, setPersonToDisplay] = useState(null);

  useEffect(() => {
    fetchDataFromAPI(dispatch);
  }, [dispatch]);

  return !state.isLoading ? <MainGrid people={state.data} /> : <Loader />;
};

export default DataProvider;
