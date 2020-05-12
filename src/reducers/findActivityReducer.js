import {
  FIND_ACTIVITY,
  RANDOM_ACTIVITY,
  CLEAR_ACTIVITY,
  FIND_ACTIVITY_ERROR,
} from 'actions/types';

const INITIAL_STATE = {
  activity: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIND_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case RANDOM_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case CLEAR_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };
    case FIND_ACTIVITY_ERROR:
      return {
        ...state,
        activity: action.payload,
      };
    default:
      return state;
  }
};
