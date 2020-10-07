import React from 'react';
import UserReadCard from '../../../containers/UserReadCard';
import UserModifyCard from '../../../containers/UserModifyCard';

const UserCard = ({ readMode }) => (
  <div>
    { readMode && <UserReadCard /> }
    { !readMode && <UserModifyCard /> }
  </div>
);

export default UserCard;
