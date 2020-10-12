import { uuid as uuidv4 } from 'uuidv4';

export const transformPathToMessages = (receivedPath, playername) => {
  // Purification des messages reçus dans le chemin
  console.log(playername);
  const purifiedMessages = receivedPath.message.map((messageObject) => ({
    id: uuidv4(),
    author: messageObject.byCharacter.name,
    content: messageObject.text.replace('currentUser', playername),
    number: messageObject.number,
    picture: messageObject.byCharacter.picture,
  }));

  console.log(purifiedMessages);

  // Réorganisation des messages selon leur propriété "number";
  return purifiedMessages.sort((a, b) => (a.number - b.number));
};

export const transformPathToChoices = (receivedPath, playername) => {
  const extractedChoices = receivedPath.choice.map((choiceObject) => ({
    id: uuidv4(),
    content: choiceObject.content.replace('currentUser', playername),
    text: choiceObject.text.replace('currentUser', playername),
    pathToCall: choiceObject.toPath,
  }));

  return extractedChoices;
};
