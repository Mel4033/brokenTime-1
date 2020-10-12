export const SUBMIT_CHOICE = 'SUBMIT_CHOICE';
export const RECEIVED_MESSAGE = 'RECEIVED_MESSAGE';
export const MESSAGE_LOADING = 'MESSAGE_LOADING';
export const MESSAGE_NOTLOADING = 'MESSAGE_NOTLOADING';
export const RECEIVED_CHOICES = 'RECEIVED_CHOICES';
export const HIDE_CHOICES = 'HIDE_CHOICES';
export const SHOW_CHOICES = 'SHOW_CHOICES';

export const hideChoices = () => ({
  type: HIDE_CHOICES,
});

export const showChoices = () => ({
  type: SHOW_CHOICES,
});

export const receivedChoices = (payload) => ({
  type: RECEIVED_CHOICES,
  payload,
});

export const submitChoice = (payload) => ({
  type: SUBMIT_CHOICE,
  payload,
});

export const receivedMessage = (payload) => ({
  type: RECEIVED_MESSAGE,
  payload,
});

export const messageLoading = () => ({
  type: MESSAGE_LOADING,
});

export const messageNotLoading = () => ({
  type: MESSAGE_NOTLOADING,
});
