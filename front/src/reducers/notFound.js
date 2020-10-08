// Import actions
import { uuid as uuidv4 } from 'uuidv4';

const initialState = {
  messages: [
    {
      id: uuidv4(),
      text: 'Test text content',
    },
  ],
};

const notFound = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default notFound;
