import React from 'react';
import styled from 'styled-components';



const Card = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:3px solid black;
    padding: 15px;
    margin:1rem auto;

`;

const Name = styled.h2`
    font-size:2.2rem;
    font-family: 'Ubuntu', sans-serif;

`;

const PData = styled.p `
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.6rem;


`;


const CharacterCard = props => {
    return (
      <Card>
        <Name>{props.name}</Name>
        <PData>Height: {props.height}cm</PData>
        <PData>Mass: {props.mass}kg</PData>
        <PData>Gender:{props.gender}</PData>
        <PData>Skin Color:{props.skinColor}</PData>
        <PData>Hair Color:{props.hairColor}</PData>
        <PData>Eye Color:{props.eyeColor}</PData>
        <PData>{props.url}</PData>
      </Card>
    );
  };
  
  export default CharacterCard;