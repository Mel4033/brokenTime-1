export const SUBMIT_CHOICE = 'SUBMIT_CHOICE';
export const RECEIVED_PATH = 'RECEIVED_PATH';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';

export const submitChoice = (pathToCall) => ({
  type: SUBMIT_CHOICE,
  pathToCall,
});

export const receivedPath = () => ({
  type: RECEIVED_PATH,
});

export const receivedMessage = () => ({
  type: RECEIVED_MESSAGE,
});
