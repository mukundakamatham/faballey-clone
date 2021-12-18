import {
  ADD_BAG_FAILURE,
  ADD_BAG_REQUEST,
  ADD_BAG_SUCCESS,
  DEL_BAG_FAILURE,
  DEL_BAG_SUCCESS,
  DEL_BAG_REQUEST,
  GET_BAG_FAILURE,
  GET_BAG_REQUEST,
  GET_BAG_SUCCESS
} from "./actionTypes";

const initState = {
  BAGs: [],
  isLoading: false,
  isError: false
};

const bagReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_BAG_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case ADD_BAG_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case ADD_BAG_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    case DEL_BAG_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case DEL_BAG_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case DEL_BAG_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    case GET_BAG_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case GET_BAG_SUCCESS: {
      return {
        ...state,
        BAGs: payload,
        isLoading: false
      };
    }
    case GET_BAG_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    default:
      return state;
  }
};

export { bagReducer };
