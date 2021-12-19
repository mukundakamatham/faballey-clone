import { loadData } from "../../utils/localStorage";
import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  DEL_CART_FAILURE,
  DEL_CART_REQUEST,
  DEL_CART_SUCCESS
} from "./actionTypes";
import {app }from "../../utils/request";
const token = loadData("token");


const addCARTRequest = () => {
  
  return {
    type: ADD_CART_REQUEST
  };
};

// action creator
const addCARTSuccess = (payload) => {
  return {
    type: ADD_CART_SUCCESS,
    payload
  };
};

const addCARTFailure = (error) => {
  return {
    type: ADD_CART_FAILURE,
    payload: error
  };
};
 /*
 const cartinfo=async()=>{
        try {
            await app.get("/cart/",{ headers: {
               'Authorization': 'Bearer ' + token
             }}).then(res =>{
              
              setAddress(res.data)
           });
           } catch (error) {
               console.log(error);
           }
    
    }

 */

const addcart = (payload) => (dispatch) => {
  dispatch(addCARTRequest());
  return app
 .post("/cart/add",{prodId:payload.ProdId},{ headers: {
    'Authorization': 'Bearer ' + token
  }})
    .then((res) => {
      dispatch(addCARTSuccess(res.data));
      dispatch(getcart());
    })
    .catch((err) => {
      console.log(err);
      dispatch(addCARTFailure(err));
    });
};

const getCARTRequest = () => {
  return {
    type: GET_CART_REQUEST
  };
};

// action creator
const getCARTSuccess = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload
  };
};

const getCARTFailure = (error) => {
  return {
    type: GET_CART_FAILURE,
    payload: error
  };
};        

const getcart = (payload) => (dispatch) => {
  dispatch(getCARTRequest());
  return    app.get("/cart/",{ headers: {
    'Authorization': 'Bearer ' + token
  }}).then((res) => {
      dispatch(getCARTSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getCARTFailure(err));
    });
};
// ------------------DELETING CART------------
// action creator
const delCARTRequest = () => {
  return {
    type: DEL_CART_REQUEST
  };
};

const delCARTSuccess = (payload) => {
  return {
    type: DEL_CART_SUCCESS,
    payload
  };
};

const delCARTFailure = (error) => {
  return {
    type: DEL_CART_FAILURE,
    payload: error
  };
};

const deletecart = (payload) => (dispatch) => {
  dispatch(delCARTRequest());
  return app
 .post("/cart/deleteItem",{prodId:payload.ProdId},{ headers: {
    'Authorization': 'Bearer ' + token
  }})
    .then((res) => {
      dispatch(delCARTSuccess(res.data));
      dispatch(getcart());
    })
    .catch((err) => {
      console.log(err);
      dispatch(delCARTFailure(err));
    });
};




export { addcart, getcart ,deletecart};
