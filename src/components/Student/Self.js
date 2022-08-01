import React from "react";
import Container from '../common/Container';
import Splash from '../common/Splash';
import homesplash from '../../assets/homesplash.jpg';


const Self = () => {
    return (
        <Container>
            <Splash image={homesplash} style={{color: "#010101"}}>
                <h1 style={{textShadow : '1px 1px white'}}>Self</h1>
            </Splash>
        </Container>
    )
}

export default Self