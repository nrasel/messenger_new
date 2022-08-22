import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "../../app/type/authType";

export const userRegister = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "/api/messenger/register",
        data,
        config
      );
      localStorage.setItem("authToken", response.data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          successMessage: response.data.successMessage,
          token: response.data.token,
        },
      });
    } catch (err) {
      console.log(err.response.data.error.errorMessage);
      dispatch({
        type: REGISTER_FAIL,
        payload: {
          error: err.response.data.error.errorMessage,
        },
      });
    }
  };
};

export const userLogin = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post("/api/messenger/login", data, config);
      localStorage.setItem("authToken", response.data.token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: {
          successMessage: response.data.successMessage,
          token: response.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: {
          error: error.response.data.error.errorMessage,
        },
      });
    }
  };
};

export const userLogout=()=>async(dispatch)=>{
  try {
    const response=await axios.post('/api/messenger/logout');
    if(response.data.success){
     localStorage.removeItem('authToken');
     dispatch({
      type:'LOGOUT_SUCCESS',
    })
    }
  } catch (error) {
    
  }
}
