import styled from 'styled-components';
import TitleI from './mainTitle.png';
import TitleS from "./ta.png";
import School from "./mainSchool.png";
import {Fireworks} from "fireworks-js";
import { useEffect, useRef } from 'react';

const Container = styled.section`
    width: auto;
    height: 90vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
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
    const fireworksC = document.querySelector(".fireworks-container");
    // const fireworks = new Fireworks(fireworksC, {
    //     rocketsPoint: {
    //         min: 50,
    //         max: 50
    //       },
    //       hue: {
    //         min: 0,
    //         max: 360
    //       },
    //       delay: {
    //         min: 0.015,
    //         max: 0.03
    //       },
    //       lineWidth: {
    //         explosion: {
    //           min: 1,
    //           max: 3
    //         },
    //         trace: {
    //           min: 1,
    //           max: 2
    //         }
    //     },
    //     lineStyle: 'round',
    //     speed: 2,
    //     acceleration: 1.05,
    //     friction: 0.95,
    //     gravity: 1.5,
    //     particles: 50,
    //     trace: 3,
    //     flickering: 50,
    //     opacity: 0.5,
    //     explosion: 5,
    //     intensity: 30,
    //     traceSpeed: 10,
    //     autoresize: true,
    //     brightness: { 
    //       min: 50, 
    //       max: 80
    //     },
    //     decay : {
    //       min: 0.015,
    //       max: 0.03
    //     },
    //     mouse: { 
    //         click: false, 
    //         move: false, 
    //         max: 1 
    //     },
    //     boundaries: { 
    //         x: 50, 
    //         y: 50, 
    //         width: 0, 
    //         height: 0
    //     }
    // })

    useEffect(()=>{
        //fireworks.start();
    }, [])

    return(
        <Container>
            {/* <Box>
                <TitleImg src={TitleI}/>
                <TitleTime src={TitleS}/>
                <TitleFooter>
                    동국대학교 가을 대동제
                </TitleFooter>
            </Box>
            <DGUImg src={School}/> */}
            <div className='fireworks-container' ref={fireRef} style={{width:"100px", height:"100px"}}>
                
            </div>
        </Container>
    )
}
export default TitleSection;