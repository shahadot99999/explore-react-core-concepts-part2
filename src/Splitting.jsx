//import React from 'react';

const people = [
    { id: 1, name: 'Marie Curie', profession: 'chemist' },
    { id: 2, name: 'Albert Einstein', profession: 'physicist' },
    { id: 3, name: 'Dmitri Mendeleev', profession: 'chemist' },
    { id: 4, name: 'Isaac Newton', profession: 'physicist' },
  ];

const Splitting = () => {

     // Filter chemists and non-chemists
  const chemists = people.filter(person => person.profession === 'chemist');
  const others = people.filter(person => person.profession !== 'chemist');

    return (
        <div>
      <h2>Chemists</h2>
      <ul>
        {chemists.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>

      <h2>Everyone Else</h2>
      <ul>
        {others.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
    );
};

export default Splitting;