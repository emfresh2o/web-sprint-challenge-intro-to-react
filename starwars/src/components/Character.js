// Write your Character component here
import React from 'react';
import { Card, CardTitle, CardImg, Col, Row, Container } from 'reactstrap';

function Character(props){
    console.log(props.characterArray);
    return(
        <Container>
            <Row>
        {props.characterArray.map((character) =>{
            return(
                <Col xs='4'>
                <Card key={character.created}>
                    <CardImg src={character.image}/>
                    <CardTitle>{character.name}</CardTitle>
                </Card>
                </Col>
                )
            })}
            </Row>
        </Container>
    )
};
export default Character