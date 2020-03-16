import axios from "axios";
// import jwt_decode from 'jwt-decode';
import store from "../../store/configureStore";
import { ADD_LOGIN } from "../../store/actions/actionTypes";
import history from "../../historyProvider";
import { render } from "react-dom";
import {withRouter} from 'react-router';
export const loginUpHandler = (userEmail, userPassword) => {
  axios
    .post("http://localhost:5000/api/loginuser/login", {
      userEmail,
      userPassword
    })
    .then(response => {
     
      // localStorage.setItem('token',response.data.user.stsTokenManager.accessToken)
      if (response.data.success == true) {
      
      store.store.dispatch({
        type: ADD_LOGIN,
        payload: response.data

      });
      // localStorage.setItem('token',JSON.stringify(response.data.data))

      //    const decoded=jwt_decode(response.data.data)

      //     console.log(decoded)
      //     if(Date.now()/1000>decoded.exp)
      //     {
      //      console.log("Session has been Expir")

      //     }
      //     else{

      //       console.log("Not Expire")

      //     }
    }
    })
    .catch(function(error) {
      console.log(error);
    });
};
