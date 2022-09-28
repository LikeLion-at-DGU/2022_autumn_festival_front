import styled from 'styled-components';
import PinImg from '../../assets/img/pin.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 90%;
`

const BoothSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 57%;
`;

const TitleBox = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  span {
    font-size: 18px;
  }
  div {
    height: 1px;
  }
`;

const PerSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40%;
`

const BoothBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
`

const PerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-top: 15px;
`

const TimeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 73%;
    margin-bottom: 10px;
`

const IsNow = styled.div`
    font-weight: 800;
    font-size: 12px;
    border: none;
    background-color: #FF0000;
    padding: 2px 8px;
    border-radius: 10px;
`

const IsNext = styled.div`
    font-weight: 800;
    font-size: 12px;
    border: none;
    color: black;
    background-color: white;
    padding: 2px 8px;
    border-radius: 10px;
`



const TimeTime = styled.span`
    margin-left: 8px;
    margin-top: 2px;
`

const BoothInfoBox = styled.div`
  border-right: 1px solid #00baf4;
  width: 75%;
  background: linear-gradient(
    270deg,
    rgba(87, 154, 255, 0.3) 0%,
    rgba(0, 186, 244, 0.006) 100%
  );
  display: flex;
  flex-direction: column;
  padding-top: 2px;
  padding-bottom: 7px;
`;

const BoothInfoItem = styled.div`
  padding-right: 15px;
  margin-top: -4px;

`;

const BoothInfoItemTitle = styled.h1`
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
`;

const BoothInfoItemSub = styled.div`
  margin-top: -13px;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: flex-end;
  span {
    font-family: 'GmarketSansLight';
    font-size: 12px;
  }
  img {
    margin-bottom: 3px;
    margin-left: 5px;
    width: 7px;
    height: 10px;
  }
`;

const PerInfoBox = styled.div`
  border-left: 1px solid #ff6b6b;
  width: 73%;
  background: linear-gradient(270deg, rgba(255, 107, 107, 0.006) 0%, rgba(255, 107, 107, 0.3) 106.2%);
  display: flex;
  flex-direction: column;
  padding-top: 2px;
  padding-bottom: 7px;
`;

const PerInfoItem = styled.div`
  padding-left: 15px;
  margin-top: -4px;

`;

const PerInfoItemTitle = styled.h1`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;

`;

const PerInfoItemSub = styled.div`
  margin-top: -13px;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: flex-start;
  span {
    font-family: 'GmarketSansLight';
    font-size: 12px;
  }
  img {
    margin-bottom: 3px;
    margin-right: 5px;
    width: 7px;
    height: 10px;
  }
`;

const booth = [
    {
        id : 1,
        date : 28,
        starttime : 11,
        endtime : 18,
        time : "11:00 - 18:00",
        info : [
            ["만해광장", "플리마켓 & 오락기", 1],
            ["팔정도", "푸드트럭 & 교내부스", 2]
        ]
    },
    {
        id : 2,
        date : 28,
        starttime : 18,
        endtime : 24,
        time : "18:00 - 22:00 ~",
        info : [
            ["만해광장", "야시장", 1],
            ["학교 전체", "주점 & 외부부스", 2]
        ]
    },
    {
        id : 3,
        date : 29,
        starttime : 11,
        endtime : 18,
        time : "11:00 - 18:00",
        info : [
            ["만해광장", "오락기 & 외부부스", 1],
            ["팔정도", "푸드트럭 & 교내부스", 2]
        ]
    },
    {
        id : 4,
        date : 29,
        starttime : 18,
        endtime : 24,
        time : "18:00 - 22:00 ~",
        info : [
            ["만해광장", "야시장", 1],
            ["학교 전체", "주점 & 교내부스", 2]
        ]
    },
    {
        id : 5,
        date : 30,
        starttime : 11,
        endtime : 18,
        time : "11:00 - 18:00",
        info : [
            ["만해광장", "오락기 & 외부부스", 1],
            ["팔정도", "푸드트럭 & 교내부스", 2]
        ]
    },
    {
        id : 6,
        date : 30,
        starttime : 18,
        endtime : 24,
        time : "18:00 - 22:00 ~",
        info : [
            ["만해광장", "야시장", 1],
            ["학교 전체", "주점 & 교내부스", 2]
        ]
    },
]

const perfor = [
    {
        id : 1,
        date : 28,
        starttime : 18,
        endtime : 24,
        time : "18:00 - 22:00 ~ ",
        info : [
            ["만해광장", "디제잉", 1]
        ]
    },
    {
        id : 2,
        date : 29,
        starttime : 14,
        endtime : 19,
        time : "14:00 - 19:00",
        info : [
            ["대운동장", "동연제", 1]
        ]
    },
    {
        id : 3,
        date : 29,
        starttime : 19,
        endtime : 20,
        time : "19:00 - 20:00",
        info : [
            ["대운동장", "디제잉", 1]
        ]
    },
    {
        id : 4,
        date : 29,
        starttime : 20,
        time : "20:15 - 22:00 ~ ",
        endtime : 24,
        info : [
            ["대운동장", "연애인 공연", 1]
        ]
    },
    {
        id : 5,
        date : 30,
        starttime : 14,
        endtime : 18,
        time : "14:00 - 18:00",
        info : [
            ["대운동장", "가요제", 1]
        ]
    },
    {
        id : 6,
        date : 30,
        starttime : 18,
        endtime : 20,
        time : "18:00 - 20:30",
        info : [
            ["대운동장", "백상공연", 1]
        ]
    },
    {
        id : 7,
        date : 30,
        starttime : 20,
        endtime : 24,
        time : "20:30 - 22:00 ~ ",
        info : [
            ["대운동장", "연애인 공연" , 1]
        ]
    },
]

const Wrapper = styled.div`
    width: inherit;
    height: fit-content;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`



function ShowTable28 () {
    const day = new Date();
    const hours = day.getHours();
    const todate = day.getDate() === 28 ? 28 : day.getDate() === 29 ? 29 : day.getDate() === 30 ? 30 : 27;
    return(
        <Container>
            <BoothSection>
                <TitleBox style={{alignItems : "flex-start"}}>
                    <span>BOOTH</span>
                    <div style={{ backgroundColor: '#579AFF', width: '78px' }}></div>
                </TitleBox>
                <BoothBox>
                    {todate === 27 ? 
                    /* 축제기간 아님 */
                    <>
                        <TimeBox>
                            <IsNext>NEXT</IsNext>
                            <TimeTime style={{color : "#579AFF"}}>11:00 ~ 18:00</TimeTime>
                        </TimeBox>
                        <BoothInfoBox>
                            <BoothInfoItem>
                                <BoothInfoItemTitle>플리마켓 & 오락기 </BoothInfoItemTitle>
                                <BoothInfoItemSub>
                                    <span>만해광장</span>
                                    <img src={PinImg} />
                                </BoothInfoItemSub>
                            </BoothInfoItem>
                            <BoothInfoItem>
                                <BoothInfoItemTitle>푸드트럭 & 교내부스</BoothInfoItemTitle>
                                <BoothInfoItemSub>
                                    <span>팔정도</span>
                                    <img src={PinImg} />
                                </BoothInfoItemSub>
                            </BoothInfoItem>
                        </BoothInfoBox>
                    </>
                    :
                    /* 축제기간 */
                    booth.filter(i => i.date === todate).filter(i => i.endtime > hours).slice(0,1).map(i => 
                        <div key={i.id}>
                            <TimeBox>
                                {i.starttime > hours ? <IsNext>NEXT</IsNext> : <IsNow>NOW</IsNow>}
                                <TimeTime style={{color : "#579AFF"}}>{i.time}</TimeTime>
                            </TimeBox>
                            <BoothInfoBox>
                                {i.info.map(j => 
                                    <BoothInfoItem key={j[2]}>
                                        <BoothInfoItemTitle>{j[1]}</BoothInfoItemTitle>
                                        <BoothInfoItemSub>
                                            <span>{j[0]}</span>
                                            <img src={PinImg} />
                                        </BoothInfoItemSub>
                                    </BoothInfoItem>
                                    )}
                            </BoothInfoBox>
                        </div>)
                    }
                </BoothBox>
            </BoothSection>


            <PerSection>
                <TitleBox style={{alignItems : "flex-end"}}>
                    <span>PERFORMANCE</span>
                    <div style={{ backgroundColor: '#FF6B6B', width: '158px'}}></div>
                </TitleBox>
                <PerBox>
                    {
                        todate === 27 ? 
                        /* 축제기간 아님 */
                        <>
                            <TimeBox style={{justifyContent: "flex-start"}}>
                                <IsNext>NEXT</IsNext>
                                <TimeTime style={{color : "#FF6B6B"}}>18:00 ~ 22:00 ~</TimeTime>
                            </TimeBox>
                            <PerInfoBox>
                                    <PerInfoItem>
                                        <PerInfoItemTitle>디제잉</PerInfoItemTitle>
                                        <PerInfoItemSub>
                                            <img src={PinImg} />
                                            <span>만해광장</span>
                                        </PerInfoItemSub>
                                    </PerInfoItem>
                            </PerInfoBox>
                        </>
                        :
                        /* 축제기간 */
                        perfor.filter(i => i.date === todate).filter(i => i.endtime > hours).slice(0,1).map(i => 
                            <Wrapper key={i.id}>
                                <TimeBox style={{justifyContent: "flex-start"}}>
                                    {i.starttime > hours ? <IsNext>NEXT</IsNext> : <IsNow>NOW</IsNow>}
                                    <TimeTime style={{color : "#FF6B6B"}}>{i.time}</TimeTime>
                                </TimeBox>
                                <PerInfoBox>
                                    {i.info.map(j => 
                                        <PerInfoItem key={j[2]}>
                                            <PerInfoItemTitle>{j[1]}</PerInfoItemTitle>
                                            <PerInfoItemSub>
                                                <img src={PinImg} />
                                                <span>{j[0]}</span>
                                            </PerInfoItemSub>
                                        </PerInfoItem>
                                        )}
                                </PerInfoBox>
                            </Wrapper>)
                    }

                </PerBox>
            </PerSection>
        </Container>
    );
}

export default ShowTable28;