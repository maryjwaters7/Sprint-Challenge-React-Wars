import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CharacterCard from './CharacterCard'

const Entry = styled.div `
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;

`;

const CharacterList = () => {
    
    const[characterData, setcharacterData] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://swapi.py4e.com/api/people/?page=1')
            .then(response => {
                  console.log(response.data.results);
                setcharacterData(response.data.results);            
            })
            .catch(error => console.log('Error', error));
    }, []);
    return (
        <Entry>
            {characterData.map((people, index) => (
            <CharacterCard 
            key={index} 
            name={people.name}
            height={people.height}  
            mass={people.mass} 
            skinColor={people.skin_color} 
            hairColor={people.hair_color} 
            eyeColor={people.eye_color} 
            gender={people.gender} 
            url={people.url} 
            />
            ))}
    
        </Entry>
    );
            
};

export default CharacterList;