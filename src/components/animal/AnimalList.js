import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };

  useEffect(() => {
    getAnimals();
  }, []);


return(
    <div className="container-cards">
      {animals.map(animal =>
        <AnimalCard 
              key={animal.id} 
              animal={animal} 
              id={animal.id} 
              deleteAnimal={deleteAnimal} />
      )}
    </div>
  );
};


export default AnimalList