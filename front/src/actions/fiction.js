export const SUBMIT_CHOICE = 'SUBMIT_CHOICE';
export const RECEIVED_PATH = 'RECEIVED_PATH';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';
export const MESSAGE_LOADING = 'MESSAGE_LOADING';
export const MESSAGE_NOTLOADING = 'MESSAGE_NOTLOADING';

export const submitChoice = (payload) => ({
  type: SUBMIT_CHOICE,
  payload,
});

export const receivedPath = (payload) => ({
  type: RECEIVED_PATH,
  payload,
});

export const receivedMessage = () => ({
  type: RECEIVED_MESSAGE,
});

export const messageLoading = () => ({
  type: MESSAGE_LOADING,
});

export const messageNotLoading = () => ({
  type: MESSAGE_NOTLOADING,
});
