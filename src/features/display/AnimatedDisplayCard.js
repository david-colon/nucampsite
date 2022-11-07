import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedDisplayCard = ({ item }) => {

    // destructuring image, name, and description props from item
    const { image, name, description } = item;

    // typical method of utilizing useState hook
    const [ toggle, setToggle ] = useState(false);

    // defining our animation for the card via ternary operator and object literal
    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    });

    // // causing the Animated Display Card to run "setToggle(true)" every time it is rendered by the DOM
    useEffect(() => {
        setToggle(true);
    }, []);

    return (
        <animated.div style={animatedStyle}> 
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    );
};

export default AnimatedDisplayCard;