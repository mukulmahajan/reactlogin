import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CREATE_USER,
    USER_CHANGED
} from './actionTypes';
import Axios from 'axios';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text

    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};
export const userChanged = (text) => {
  return {
      type: USER_CHANGED,
      payload: text
  }
};



export const createUser = ({username, email, password }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER });
        Axios.post('/api/users', { user: { username, email, password } });

    };
};

