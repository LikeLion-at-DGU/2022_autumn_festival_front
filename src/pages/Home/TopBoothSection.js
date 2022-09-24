import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import TitleImg from '../../assets/img/mainTop.png';

const Container = styled.section`
  border: 1px solid white;
  width: auto;
  height: 73vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
    width: auto;
    height: 65px;
    margin-right: 20px;
    margin-bottom: 30px;
`;

const Btn = styled(Link)`
  cursor: pointer;
  border: none;
  box-shadow: 1px 1px 10px 0px rgb(255, 255, 255);
  background-color: #fd9903;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  color: white;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 18px;
`;

const BoothSection = styled(motion.div)`
    width: 350px;
    position: relative;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Box = styled(motion.div)`
  width: 150px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:black;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxSection1 = styled(motion.div)`
    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 220px;
    div{
        position: absolute;
        box-sizing: border-box;
    }
    div:nth-child(1){
        z-index: 5;
    }
    div:nth-child(2){
        z-index: 4;
        right:40px;
        top:-10px;
        scale: 0.8;
    }
    div:nth-child(3){
        z-index: 3;
        right:0px;
        top:-20px;
        scale: 0.6;
    }
    div:nth-child(4){
        z-index: 2;
        right:-40px;
        top:-30px;
        scale: 0.35;
    }
    div:nth-child(5){
        z-index: 1;
        right:-80px;
        top:-40px;
        scale:0;
    }
`

const BoxSection2 = styled(motion.div)`
    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 220px;
    div{
        position: absolute;
        box-sizing: border-box;
    }
    div:nth-child(1){
        z-index: 3;
        left:40px;
        top:-10px;
        scale: 0.8;
    }
    div:nth-child(2){
        z-index: 4;
    }
    div:nth-child(3){
        z-index: 3;
        right:40px;
        top:-10px;
        scale: 0.8;
    }
    div:nth-child(4){
        z-index: 2;
        right:0px;
        top:-20px;
        scale: 0.6;
    }
    div:nth-child(5){
        z-index: 1;
        right:-40px;
        top:-30px;
        scale: 0.4;
    }
`

const BoxSection3 = styled(motion.div)`
    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 220px;
    div{
        position: absolute;
        box-sizing: border-box;
    }
    div:nth-child(1){
        z-index: 1;
        left:0px;
        top:-20px;
        scale: 0.6;
        
    }
    div:nth-child(2){
        z-index: 2;
        left:40px;
        top:-10px;
        scale: 0.8;

    }
    div:nth-child(3){
        z-index: 3;
    }
    div:nth-child(4){
        z-index: 2;
        right:40px;
        top:-10px;
        scale: 0.8;

    }
    div:nth-child(5){
        z-index: 1;
        right:0px;
        top:-20px;
        scale: 0.6;

    }
`

const BoxSection4 = styled(motion.div)`
    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 220px;
    div{
        position: absolute;
        box-sizing: border-box;
    }
    div:nth-child(1){
        scale : 0.4;

        z-index: 1;
        left:-40px;
        top:-30px;
    }
    div:nth-child(2){
        scale : 0.6;
 
        z-index: 2;
        left:0px;
        top:-20px;
    }
    div:nth-child(3){
        scale : 0.8;
 
        left:40px;
        top:-10px;
        z-index: 3;
    }
    div:nth-child(4){
        z-index: 4;
    }
    div:nth-child(5){
        scale : 0.8;
        z-index: 3;
        right:40px;
        top:-10px;
    }
`

const BoxSection5 = styled(motion.div)`
    display: flex;
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 220px;
    div{
        position: absolute;
        box-sizing: border-box;
    }
    div:nth-child(1){
        z-index: 1;
        left:-80px;
        top:-40px;
        scale: 0;
    }
    div:nth-child(2){
        z-index: 2;
        scale: 0.35;
        left:-40px;
        top:-30px;
    }
    div:nth-child(3){
        scale: 0.6;
        left:0px;
        top:-20px;
        z-index: 3;
    }
    div:nth-child(4){
        scale: 0.8;
        left:40px;
        top:-10px;
        z-index: 4;
    }
    div:nth-child(5){
        scale: 1;
        z-index: 5;
    }
`

const box = {
    entry: (back) => ({
        x: back ? -100 : 100,
        opacity: 0,
        scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (back) => ({ x: back ? 100 : -100, opacity: 0, scale: 0, transition: { duration: 0.5 } })
};

function TopBoothSection() {

    const boxWrapper = useRef();
    /* const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const nextPlease = () => {
        setBack(false);
        setVisible(prev => prev === 10 ? 10 : prev+1);
    }
    const prevPlease = () => {
        setBack(true);
        setVisible((prev) => (prev === 1 ? 1 : prev-1));
    } */

    const check = (e) => {
        console.log(e);
    }

    window.addEventListener("click", check)

    const [visible, setVisible] = useState(3);

    const nextPlease = () => {
        setVisible(prev => prev === 5 ? 5 : prev+1);
    }
    const prevPlease = () => {
        setVisible((prev) => (prev === 1 ? 1 : prev-1));
    }



    console.log(visible)
    return(
        <Container>
            <Img src={TitleImg} />
            <BoothSection id = "boxwrapper">
                {visible === 1 ?
                /* 1 */
                <BoxSection1>
                    <Box layoutId="a">1</Box>
                    <Box layoutId="b">2</Box>
                    <Box layoutId="c">3</Box>
                    <Box layoutId="d">4</Box>
                    <Box layoutId="e">5</Box>
                </BoxSection1> : 
                visible === 2 ? 
                /* 2 */
                <BoxSection2>
                    <Box layoutId="a">1</Box>
                    <Box layoutId="b">2</Box>
                    <Box layoutId="c">3</Box>
                    <Box layoutId="d">4</Box>
                    <Box layoutId="e">5</Box>
                </BoxSection2>
                :
                visible === 3 ? 
                /* 3 */
                <BoxSection3>
                    <Box layoutId="a">1</Box>
                    <Box layoutId="b">2</Box>
                    <Box layoutId="c">3</Box>
                    <Box layoutId="d">4</Box>
                    <Box layoutId="e">5</Box>
                </BoxSection3> :
                visible === 4 ?
                /* 4가 앞 */
                <BoxSection4>
                    <Box layoutId="a">1</Box>
                    <Box layoutId="b">2</Box>
                    <Box layoutId="c">3</Box>
                    <Box layoutId="d">4</Box>
                    <Box layoutId="e">5</Box>
                </BoxSection4> :
                /* 5가 앞 */
                <BoxSection5>
                    <Box layoutId="a">1</Box>
                    <Box layoutId="b">2</Box>
                    <Box layoutId="c">3</Box>
                    <Box layoutId="d">4</Box>
                    <Box layoutId="e">5</Box>
                </BoxSection5>
                }

                <button onClick={nextPlease}>next</button>
                <button onClick={prevPlease}>prev</button>

                {/* <AnimatePresence exitBeforeEnter custom={back}>
                    <Box 
                    custom={back}
                    variants={box}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    key={visible}     // 버튼을 누르면 key값이 바뀌어서, 다른 컴포넌트라고 인식하고 리렌더링해줌
                    >{visible}</Box>
                </AnimatePresence>
                <button onClick={nextPlease}>next</button>
                <button onClick={prevPlease}>prev</button> */}
            </BoothSection>
            <Btn to="/booth">
                부스 전체보기
            </Btn>
        </Container>
    )
}

export default TopBoothSection;

