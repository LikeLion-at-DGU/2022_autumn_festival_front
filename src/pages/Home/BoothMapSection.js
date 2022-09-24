import styled from 'styled-components';
import MapImg from '../../assets/img/mainMap.png';
import TitleImg from '../../assets/img/boothT.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Container = styled.section`
  width: auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: auto;
  height: 68px;
  margin-right: 20px;
`;

const LocationImg = styled.img`
  margin-top: -15px;
  margin-bottom: 10px;
  width: 90%;
`;

const Input = styled.input`
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  width: 100%;
  padding: 7px 15px;
  box-shadow: 1px 1px 10px 0px rgb(255, 255, 255);
  border: none;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const InputSection = styled.form`
  display: flex;
  justify-content: center;
  width: 75%;
  position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fd9903;
  position: absolute;
  top: 24px;
  right: 15px;
  font-size: 20px;
  font-weight: 600;
`;

function BoothMapSection() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onValid = (data) => {
    navigate(`/booth/Search?q=${data.search}`);
  };

  return (
    <Container>
      <Img src={TitleImg} />
      <LocationImg onClick={() => navigate('/booth')} src={MapImg} />
      <InputSection onSubmit={handleSubmit(onValid)}>
        <Input
          {...register('search', { required: true })}
          placeholder="부스이름 또는 메뉴 검색하기"
        />
        <Icon icon={faMagnifyingGlass} />
      </InputSection>
    </Container>
  );
}
export default BoothMapSection;
