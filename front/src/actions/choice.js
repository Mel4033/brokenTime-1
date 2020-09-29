export const SUBMIT_CHOICE = 'SUBMIT_CHOICE';
export const RECEIVED_PATH = 'RECEIVED_PATH';

export const submitChoice = (pathToCall) => ({
  type: SUBMIT_CHOICE,
  pathToCall,
});

// TODO
export const receivedPath = () => ({
  type: RECEIVED_PATH,
});
