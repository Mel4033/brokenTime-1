export const NEXT_MESSAGE = 'NEXT_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const nextMessage = () => ({
  type: NEXT_MESSAGE,
});

export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});
