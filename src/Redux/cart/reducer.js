import {
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  DEL_CART_FAILURE,
  DEL_CART_SUCCESS,
  DEL_CART_REQUEST,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS
} from "./actionTypes";

const initState = {
  CARTs: [],
  isLoading: false,
  isError: false
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case ADD_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case ADD_CART_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    case DEL_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case DEL_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case DEL_CART_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    case GET_CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        CARTs: payload,
        isLoading: false
      };
    }
    case GET_CART_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    default:
      return state;
  }
};

export {cartReducer };
