import axios from "axios";
import { catchError, fetchData, initFetching } from "./actions";
import { PEOPLE_API } from "./constants";

export const fetchDataFromAPI = async dispatch => {
  dispatch(initFetching());
  try {
    const response = await axios({
      method: "GET",
      url: PEOPLE_API
    });
    dispatch(fetchData(response.data.results));
  } catch (error) {
    dispatch(catchError(error));
  }
};
