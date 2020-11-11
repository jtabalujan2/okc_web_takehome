import {produce} from "immer"

import {
  FIELD_NAMES,
} from './constants';


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const INCREMENT_COUNTER = 'MADLIBS.INCREMENT_COUNTER';


// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  essayText: '',
  isAllFieldsAnswered: false,
  counter: 1,
};


// Reducer
// ----------------------------------------------------------------------------

export const reducer = produce((draft = INITIAL_STATE, action) => {

  const { type, payload } = action;

  switch (type) {
    case SUBMIT_FIELD: {
      draft.fieldAnswers[payload.fieldName] = payload.answer
      return draft;
    }

    case INCREMENT_COUNTER: {
      draft.counter += 1;
      return draft;
    }

    default:
      return draft;
  }
})


// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer } };
}

export function increment() {
  return { type: INCREMENT_COUNTER };
}
