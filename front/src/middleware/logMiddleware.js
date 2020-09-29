const logMiddleware = (store) => (next) => (action) => {
  console.log('Je laisse passer cette action: ', action.type);
  next(action);
};

export default logMiddleware;
