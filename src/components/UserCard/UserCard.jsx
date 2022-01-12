import React from "react";
import './userd-card.scss'

const UserCard = ({email, first_name, last_name}) => {
  return(
    <div className="user-card">
      <h2 className="user-card__name">{`${first_name} ${last_name}`}</h2>
      <p className="user-card__email">{email}</p>
    </div>
  )
}

export default UserCard;
