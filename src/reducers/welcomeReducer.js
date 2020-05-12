import { SAY_HI } from 'actions/types';

const INITIAL_STATE = {
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAY_HI:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
