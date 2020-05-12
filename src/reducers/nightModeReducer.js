import { NIGHT_TOGGLER_ACTIVE, NIGHT_TOGGLER_INACTIVE } from 'actions/types';

const INITIAL_STATE = {
  status: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NIGHT_TOGGLER_ACTIVE:
      return {
        ...state,
        status: action.payload,
      };
    case NIGHT_TOGGLER_INACTIVE:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
