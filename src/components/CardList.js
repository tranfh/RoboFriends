import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // enable for error testing
  // if (true) {
  //   throw new Error('NOOOOOOO!');
  // }
  return (
    <>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </>
  );
};

export default CardList;
