import { ADD_LOGIN } from "../actions/actionTypes";

const initialState = [];
const loginreducer = (state = initialState, action) => {
  debugger;

  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default loginreducer;
