import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const EditBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 20px 0px;
`;

export default function BoothDetailEdit() {
  const navigate = useNavigate();
  // URI 파라미터 가져오기
  const { booth_id } = useParams();

  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [notice, setNotice] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState({
    preview_URL: 'image/default_image.png',
  });
  useEffect(() => {
    const getBooth = axios.get(`booths/${booth_id}`).then((res) => {
      setTitle(res.data.title);
      setIntro(res.data.introduction);
      setType(res.data.boothType.korean);
      setLocation(res.data.location);
      setNotice(res.data.notice);
      setContent(res.data.content);
    });
  }, []);

  return (
    <div>
      <h1>부스 수정하기</h1>
      <form>
        <EditBox>
          부스이름 :
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </EditBox>
        <EditBox>
          한 줄 소개 :
          <input
            value={intro}
            onChange={(e) => {
              setIntro(e.target.value);
            }}
          ></input>
        </EditBox>
        <EditBox>
          부스 종류 :
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          >
            <option value="부스">부스</option>
            <option value="주점">주점</option>
            <option value="푸드트럭">푸드트럭</option>
          </select>
        </EditBox>
        <EditBox>
          위치:
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          ></input>
        </EditBox>
        <EditBox>
          공지사항
          <textarea
            value={notice}
            onChange={(e) => {
              setNotice(e.target.value);
            }}
          ></textarea>
        </EditBox>
        <EditBox>
          소개 글
          <textarea
            value={notice}
            onChange={(e) => {
              setNotice(e.target.value);
            }}
          ></textarea>
        </EditBox>
        사진
        <EditBox>
          <input
            type="file"
            id="chooseFile"
            name="chooseFile"
            accept="image/*"
            onchange="loadFile(this)"
          ></input>
        </EditBox>
        <button
          type="submit"
          style={{ margin: '30px 0px' }}
          onClick={() => navigate(`/booth/${booth_id}`)}
        >
          수정완료
        </button>
      </form>
    </div>
  );
}
