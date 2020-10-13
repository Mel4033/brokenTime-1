import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './style-desktop.scss';
import './style-mobile.scss';
import OwnedCard from './OwnedCard';
import UserCard from '../../containers/UserCard';

const Profil = ({ isLoading, ownedFictions }) => {
  // Si les fictions possédées ne sont pas chargées, on met
  // le site en attente. Sinon il risque de  bloquer sur une erreur
  if (ownedFictions === undefined) {
    return (<div>Loading</div>);
  }

  return (
    <div className="profil">
      <UserCard />

      <h2 className="profil__title">Ma bibliothèque</h2>
      <div className="cardlist">
        {
          ownedFictions.map((fictionObject) => (
            <OwnedCard
              key={fictionObject.id}
              id={fictionObject.id}
              title={fictionObject.title}
              resume={fictionObject.summary}
              image={fictionObject.picture}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Profil;
