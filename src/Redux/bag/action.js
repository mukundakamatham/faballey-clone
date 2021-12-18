import { loadData, saveData } from "../../utils/localStorage";
import {
  GET_BAG_REQUEST,
  GET_BAG_SUCCESS,
  GET_BAG_FAILURE,
  ADD_BAG_FAILURE,
  ADD_BAG_REQUEST,
  ADD_BAG_SUCCESS,
  DEL_BAG_FAILURE,
  DEL_BAG_REQUEST,
  DEL_BAG_SUCCESS
} from "./actionTypes";
import {app }from "../../utils/request";
const token = loadData("token");


const addBAGRequest = () => {
  
  return {
    type: ADD_BAG_REQUEST
  };
};

// action creator
const addBAGSuccess = (payload) => {
  return {
    type: ADD_BAG_SUCCESS,
    payload
  };
};

const addBAGFailure = (error) => {
  return {
    type: ADD_BAG_FAILURE,
    payload: error
  };
};
 /*
 const BAGinfo=async()=>{
        try {
            await app.get("/BAG/",{ headers: {
               'Authorization': 'Bearer ' + token
             }}).then(res =>{
              
              setAddress(res.data)
           });
           } catch (error) {
               console.log(error);
           }
    
    }

 */

const addBAG = (payload) => (dispatch) => {
  dispatch(addBAGRequest());
  return app
 .post("/bag/add",{prodId:payload.ProdId},{ headers: {
    'Authorization': 'Bearer ' + token
  }})
    .then((res) => {
      dispatch(addBAGSuccess(res.data));
      dispatch(getBAG());
    })
    .catch((err) => {
      console.log(err);
      dispatch(addBAGFailure(err));
    });
};

const getBAGRequest = () => {
  return {
    type: GET_BAG_REQUEST
  };
};

// action creator
const getBAGSuccess = (payload) => {
  return {
    type: GET_BAG_SUCCESS,
    payload
  };
};

const getBAGFailure = (error) => {
  return {
    type: GET_BAG_FAILURE,
    payload: error
  };
};

const getBAG = () => (dispatch) => {
  dispatch(getBAGRequest());
  return    app.get("/BAG/",{ headers: {
    'Authorization': 'Bearer ' + token
  }}).then((res) => {
      dispatch(getBAGSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getBAGFailure(err));
    });
};
// ------------------DELETING BAG------------
// action creator
const delBAGRequest = () => {
  return {
    type: DEL_BAG_REQUEST
  };
};

const delBAGSuccess = (payload) => {
  return {
    type: DEL_BAG_SUCCESS,
    payload
  };
};

const delBAGFailure = (error) => {
  return {
    type: DEL_BAG_FAILURE,
    payload: error
  };
};

const deleteBAG = (payload) => (dispatch) => {
  dispatch(delBAGRequest());
  return app
 .post("/BAG/deleteItem",{prodId:payload.ProdId},{ headers: {
    'Authorization': 'Bearer ' + token
  }})
    .then((res) => {
      dispatch(delBAGSuccess(res.data));
      dispatch(getBAG());
    })
    .catch((err) => {
      console.log(err);
      dispatch(delBAGFailure(err));
    });
};




export { addBAG, getBAG ,deleteBAG};
