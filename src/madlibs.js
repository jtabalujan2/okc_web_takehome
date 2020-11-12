import {produce} from "immer"

import {
  FIELD_NAMES,
} from './constants';

import getTextTemplates from "./helpers"


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const SUBMIT_EDIT = 'MADLIBS.SUBMIT_EDIT'
export const SUBMIT_RESET = 'MADLIBS.SUBMIT_RESET'
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
  isEdit: false,
  counter: 1,
};


// Reducer
// ----------------------------------------------------------------------------

export const reducer = produce((draft = INITIAL_STATE, action) => {

  const { type, payload } = action;

  switch (type) {
    //You could split this up into separate reducers + actions for a little cleaner code
    case SUBMIT_FIELD: {
      //Initialize and adding to object
      draft.fieldAnswers[payload.fieldName] = {}
      draft.fieldAnswers[payload.fieldName]['answer'] = payload.answer

      //Adds to object to ensure we don't switch sentences between blurs
      const randomSentence = getTextTemplates(payload.fieldName)[Math.floor(Math.random() * 5)]
      draft.fieldAnswers[payload.fieldName]['sentence'] = randomSentence
      
      //checks if all objects exist
      //could also just use length to check, but this ensures all keys are equal
      const isAllFieldsComplete = draft.fieldOrder.every(item => draft.fieldAnswers.hasOwnProperty(item));

      if(isAllFieldsComplete) {
        draft.isAllFieldsAnswered = true;
      }

      return draft;
    }

    case INCREMENT_COUNTER: {
      draft.counter += 1;
      return draft;
    }

    case SUBMIT_EDIT: {
      draft.isEdit = true;

      //generating essay text
      const essayText = draft.fieldOrder.map(fieldName => draft.fieldAnswers[fieldName].sentence.replace('$answer', draft.fieldAnswers[fieldName].answer))
      draft.essayText = essayText.join("")

      return draft;
    }

    case SUBMIT_RESET: {
      draft = INITIAL_STATE;
      return draft
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

export function submitEdit() {
  return {type: SUBMIT_EDIT }
}

export function submitReset() {
  return { type: SUBMIT_RESET }
}