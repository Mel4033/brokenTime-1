import React from 'react';

// Import de composants nécessaires au fonctionnement de l'interface
// de fiction
import Message from './Message';
import Choice from './Choice';

// Import des styles propres aux mobiles et aux desktops
import './style-mobile.scss';
import './style-desktop.scss';

const Fiction = () => (
  <div className="fiction">
    <div className="fiction__messages">
      <Message author="Meadow" content="C'est quoi ce bordel, pourquoi y'a marqué 'Connexion établie' ?" />
      <Message author="Vous" content="Bonjour ... ?" />
      <Message author="Meadow" content="Oh merde, ça répond en plus ce truc, qu'est-ce qu'il se passe ?" />
      <Message author="Vous" content="Mon terminal m'indique une connexion en 2612." />
      <Message author="Meadow" content="Hein ... ? Je comprends rien. Oui on est bien en 2612, et alors ? Vous êtes quoi au juste ?" />
      <Message author="Vous" content="Attendez, 2612 ? Je ne suis pas sûr de comprendre..." />
      <Message author="Meadow" content="Bon. Moi c'est Meadow et euh... Je viens de trouver cette espèce de montre par terre, au milieu de toute cette explosion de paperasse." />
    </div>
    <div className="fiction__choices">
      <Choice targetPath="5487" content="Quoi ? Quelle montre ?" />
      <Choice targetPath="235451" content="Comment ça 'cette explosion' ?" />
    </div>
  </div>
);

export default Fiction;
