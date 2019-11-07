import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { CATCH_ERROR, FETCH_DATA, INIT_FETCHING } from "./constants";

const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const swapiReducer = (state, action) => {
  switch (action.type) {
    case INIT_FETCHING:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case CATCH_ERROR:
      return {
        ...state,
        isLoading: true,
        isError: true
      };
    case FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    default:
      return state;
  }
};

const ReducerContext = React.createContext(initialState);
const ReducerProvider = props => {
  const [state, dispatch] = useReducer(swapiReducer, initialState);
  const { children } = props;
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
export { ReducerContext, ReducerProvider };

ReducerProvider.propTypes = {
  children: PropTypes.node.isRequired
};
