import React from 'react'

const Card = ({ cardImg, cardText, cardTitle, cardDescription }) => {
  return (
    <div className="card">
      <div>
        <img src={cardImg} alt={cardTitle} />
      </div>
      <h3>{cardTitle}</h3>
      <p>{cardDescription}</p>
    </div>
  );
};

export default Card