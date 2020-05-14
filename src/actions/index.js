import axios from 'axios';

import { SAY_HI } from 'actions/types';
import {
  FIND_ACTIVITY,
  RANDOM_ACTIVITY,
  CLEAR_ACTIVITY,
  FIND_ACTIVITY_ERROR,
  NIGHT_TOGGLER_ACTIVE,
  NIGHT_TOGGLER_INACTIVE,
} from 'actions/types';

export const sayHi = () => {
  return {
    type: SAY_HI,
    payload: 'Are you Bored? We help you to find your next activity!',
  };
};

export const findActivity = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.get(
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

export const nightModeActive = () => {
  localStorage.setItem('nightmode', 'active');
  return {
    type: NIGHT_TOGGLER_ACTIVE,
    payload: 'nightmode-active',
  };
};

export const nightModeInactive = () => {
  localStorage.setItem('nightmode', 'inactive');
  return {
    type: NIGHT_TOGGLER_INACTIVE,
    payload: 'nightmode-inactive',
  };
};
