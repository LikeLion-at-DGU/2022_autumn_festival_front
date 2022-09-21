import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
    width : auto;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    margin-top: 30px;
`

const BoothBox = styled.div`

`

const CenterLine = styled.div`
    margin-top: 50px;
    width: 1px;
    height: 400px;
    background-color: white;
    border-radius: 5px;
`

const PerFormBox = styled.div`

`

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        
    }
    div{
        height: 1px;
    }
`



const boxVariants = {
    start : {
        opactiy : 0,
        y : 15
    },
    end : {
        opactiy : 1,
        y : 0
    }
}

function ThridTable () {
    return(
        <Container>
            <BoothBox>
                <TitleBox>
                    <span>BOOTH</span>
                    <div style={{backgroundColor : "#579AFF", width:"62px"}}></div>
                </TitleBox>
            </BoothBox>
            <CenterLine />
            <PerFormBox>
                <TitleBox>
                    <span>PERFORMANCE</span>
                    <div style={{backgroundColor : "#FF6B6B",  width:"125px"}}></div>
                </TitleBox>
            </PerFormBox>
        </Container>
    );
}

export default ThridTable;