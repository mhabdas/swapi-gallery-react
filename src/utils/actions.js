import {
    CATCH_ERROR,
    FETCH_DATA,
    INIT_FETCHING
} from "../../../swapi-gallery-vanillajs/src/js/constants";

export const initFetching = () => ({
    type: INIT_FETCHING
});

export const catchError = error => ({
    type: CATCH_ERROR,
    error
});

export const fetchData = data => ({
    type: FETCH_DATA,
    payload: data
});
