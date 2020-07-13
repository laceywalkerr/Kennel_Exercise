import React, { useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = () => {
  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      // We'll do something more interesting with this data soon.
      console.log(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="container-cards">
      We'll put some animals here eventually...
    </div>
  );
};

export default AnimalList