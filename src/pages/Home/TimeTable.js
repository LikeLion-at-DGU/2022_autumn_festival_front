import styled from 'styled-components';
import TitleImg from './mainTime.png';
import { Link } from 'react-router-dom';

const Container = styled.section`
    border: 1px solid white;
    width: auto;
    height: 73vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    width: auto;
    height: 75px;
    margin-right: 20px;
`;

const Btn = styled(Link)`
    cursor: pointer;
    border: none;
    box-shadow: 1px 1px 10px 0px rgb(255, 255, 255);
    background-color: #FD9903;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-decoration: none;
    color : white;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 20px;
    margin-bottom: 30px;
`

function TimeTableSection() {
    return(
        <Container>
            <Img src={TitleImg} />
            <Btn to="/timetable">
                전체 일정보기
            </Btn>
        </Container>
    )
}
export default TimeTableSection;