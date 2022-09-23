import styled from 'styled-components';
import TitleI from './mainTitle.png';
import TitleS from "./ta.png";
import School from "./mainSchool.png";
import { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const Container = styled.section`
    width: auto;
    height: 90vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: -70px;
    margin-top: -170px;
`

const TitleImg = styled.img`
    width: 200px;
    height: 220px;
`

const TitleTime = styled.img`
    width: 240px;
    height: 26px;
    margin-left: 12px;
    margin-top: 10px;
`

const TitleFooter = styled.span`
    font-family: 'GmarketSansLight';
    font-size: 15px;
    margin-left: 16px;
`

const DGUImg = styled.img`
    width: 100vw;
    height: 150px;
    position: absolute;
    bottom: 80px;
`

function TitleSection() {
    const fireRef = useRef();
    const options = {
        hue: {
          min: 0,
          max: 345,
        },
        delay: {
          min: 15,
          max: 15,
        },
        rocketsPoint: 50,
        speed: 10,
        acceleration: 1.2,
        friction: 0.96,
        gravity: 1,
        particles: 90,
        trace: 3,
        explosion: 6,
        autoresize: true,
        brightness: {
          min: 50,
          max: 80,
          decay: {
            min: 0.015,
            max: 0.03,
          },
        },
        boundaries: {
          x: 50,
          y: 50,
          width: 1536,
          height: 746,
          visible: false,
        },
        mouse: {
          click: true,
          move: false,
          max: 3,
        },
    };

    const style = {
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        background: "rgba(0,0,0,0)",
      };

    useEffect(()=>{
        //fireworks.start();
    }, [])

    return(
        <Container>
            <Box>
                <TitleImg src={TitleI}/>
                <TitleTime src={TitleS}/>
                <TitleFooter>
                    동국대학교 가을 대동제
                </TitleFooter>
            </Box>
            <DGUImg src={School}/>
            {/* <Fireworks options={options} style={style} /> */}
        </Container>
    )
}
export default TitleSection;