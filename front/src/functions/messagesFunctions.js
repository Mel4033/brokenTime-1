const classToApply = (senderName) => {
  switch (senderName) {
    case 'Vous':
      return 'player';
    case 'Meadow':
      return 'protagonist';
    case 'Système':
      return 'system';
    default:
      break;
  }
};

export default classToApply;
