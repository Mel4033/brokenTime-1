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

const imageToApply = (senderName) => {
  switch (senderName) {
    case 'Meadow':
      return 'https://media.discordapp.net/attachments/364094342953959424/765184945051926538/D5TWTq85cx5ZAAAAAElFTkSuQmCC.png';
    case 'Système':
      return 'https://media.discordapp.net/attachments/364094342953959424/765186494528094228/unknown.png';
    default:
      break;
  }
};

export { imageToApply };
export default classToApply;
