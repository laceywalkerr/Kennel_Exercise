import React, { useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = () => {
    const getAnimals = () => {
        return AnimalManager.getAll().then(animalsFromAPI => {
            console.log(animalsFromAPI);
        });
    };

    useEffect(() => {
        console.log("useEffect");
        getAnimals();
    }, 
    
    );
};

export default AnimalList