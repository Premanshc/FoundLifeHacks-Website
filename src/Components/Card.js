import React from 'react';

const Card = ({ imageSrc, title, affLink}) => {
  return (
    <div className="card">
      <a href={affLink}>
        <img src={imageSrc} alt={title} />
      </a>
      <h2>{title}</h2>
    </div>
  );
};

export default Card;