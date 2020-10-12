import { uuid as uuidv4 } from 'uuidv4';

export const transformPathToMessages = (receivedPath) => {
  // Purification des messages reçus dans le chemin
  console.log(receivedPath);
  const purifiedMessages = receivedPath.message.map((messageObject) => ({
    id: uuidv4(),
    author: messageObject.byCharacter.name,
    content: messageObject.text,
    number: messageObject.number,
    picture: messageObject.byCharacter.picture,
  }));

  console.log(purifiedMessages);

  // Réorganisation des messages selon leur propriété "number";
  return purifiedMessages.sort((a, b) => (a.number - b.number));
};

export const transformPathToChoices = (receivedPath) => {
  const extractedChoices = receivedPath.choice.map((choiceObject) => ({
    id: uuidv4(),
    content: choiceObject.content,
    text: choiceObject.text,
    pathToCall: choiceObject.toPath,
  }));

  return extractedChoices;
};
