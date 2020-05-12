import axios from 'axios';

import { SAY_HI } from 'actions/types';
import {
  FIND_ACTIVITY,
  RANDOM_ACTIVITY,
  CLEAR_ACTIVITY,
  FIND_ACTIVITY_ERROR,
} from 'actions/types';

export const sayHi = () => {
  return {
    type: SAY_HI,
    payload: 'Are you Bored? We help you to find your next activity!',
  };
};

// change the shit's from there
export const findActivity = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.get(
      // http://www.boredapi.com/api/activity?type=social&participants=2&price=0
      // example of api request
      `http://www.boredapi.com/api/activity?type=${formProps.type}&accessibility=${formProps.accessibility}&participants=${formProps.participants}&price=${formProps.price}`,
      formProps
    );

    dispatch({ type: FIND_ACTIVITY, payload: response.data });
  } catch (err) {
    dispatch({
      type: FIND_ACTIVITY_ERROR,
      payload:
        'No activities found, please try with others options or try a random activity',
    });
  }
};

export const findRandomActivity = () => async (dispatch) => {
  try {
    const response = await axios.get('http://www.boredapi.com/api/activity/');
    dispatch({ type: RANDOM_ACTIVITY, payload: response.data });
  } catch (err) {
    dispatch({
      type: FIND_ACTIVITY_ERROR,
      payload:
        'No activities found, please try with others options or try a random activity',
    });
  }
};

export const clearActivity = () => {
  return {
    type: CLEAR_ACTIVITY,
    payload: '',
  };
};
