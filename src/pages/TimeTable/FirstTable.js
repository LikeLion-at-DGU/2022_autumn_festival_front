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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        
    }
    div{
        height: 1px;
    }
`


{/* 타임테이블 각 테이블 정보 */}
const BoothItem = styled.div`
    margin-top: 50px;
    display: flex;
`

const InfoContainer = styled.div`
    margin-right: 15px;
`

const Point = styled.div`
    z-index: 10;
    margin-right: -8px;
    margin-top: 1px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #579AFF;
`

const InfoTime = styled.span`
    display: flex;
    justify-content: flex-end;
    color: #579AFF;
    margin-bottom: 5px;
`

const InfoBox = styled.div`
    border-right: 1px solid #00BAF4;
    height: 100px;
    width: 140px;
    background: linear-gradient(270deg, rgba(87, 154, 255, 0.3) 0%, rgba(0, 186, 244, 0.048) 100%);
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

function FirstTable () {
    return(
        <Container>
            <BoothBox>
                <TitleBox>
                    <span>BOOTH</span>
                    <div style={{backgroundColor : "#579AFF", width:"62px"}}></div>
                </TitleBox>
                <BoothItem>
                    <InfoContainer>
                        <InfoTime>
                            11:00 - 18:00
                        </InfoTime>
                        <InfoBox>

                        </InfoBox>
                    </InfoContainer>
                    <Point/>
                </BoothItem>
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

export default FirstTable;