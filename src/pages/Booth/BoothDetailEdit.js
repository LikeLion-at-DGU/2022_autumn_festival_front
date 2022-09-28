import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
  const boothId = useParams().id;
  const [booth, setBooth] = useState({
    title: '',
    introduction: '',
    boothType: '',
    boothNo: boothId,
    location: '',
    notice: '',
    content: '',
    startAt: '',
    endAt: '',
  });

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  // console.log(booth);

  const onChange = (e) => {
    const { value, name } = e.target;
    setBooth({
      ...booth,
      [name]: value,
    });
  };

  // 부스 디테일 설정
  const fetchBoothDetail = async () => {
    await axios
      .get(`booths/${boothId}`)
      .then((res) => {
        setBooth(res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const location = useLocation();
  const putBooth = () => {
    axios.put(`booths/${boothId}`, booth).then((res) => {});
    navigate(`/booth/${boothId}?${process.env.REACT_APP_ADMIN_KEY}=true`);
    location.reload();
  };

  useEffect(() => {
    fetchBoothDetail();
  }, []);

  return (
    <div>
      {query.get(`${process.env.REACT_APP_ADMIN_KEY}`) == 'true' ? (
        <>
          <h1>부스 수정하기</h1>
          <form>
            <EditBox>
              부스이름 :
              <input name="title" value={booth.title} onChange={onChange} />
            </EditBox>
            <EditBox>
              한 줄 소개 :
              <input
                name="introduction"
                value={booth.introduction}
                onChange={onChange}
              />
            </EditBox>
            <EditBox>
              부스 종류 :
              <select
                name="boothType"
                value={booth.boothType}
                onChange={onChange}
              >
                <option value="부스">부스</option>
                <option value="주점">주점</option>
                <option value="푸드트럭">푸드트럭</option>
                <option value="플리마켓">플리마켓</option>
              </select>
            </EditBox>
            <EditBox>
              위치:
              <input
                name="location"
                value={booth.location}
                onChange={onChange}
              />
            </EditBox>
            <EditBox>
              공지사항
              <textarea
                name="notice"
                onChange={onChange}
                value={booth.notice}
              ></textarea>
            </EditBox>
            <EditBox>
              소개 글
              <textarea
                name="content"
                onChange={onChange}
                value={booth.content}
              ></textarea>
            </EditBox>
            <button
              type="submit"
              style={{ margin: '30px 0px' }}
              onClick={() => {
                putBooth();
              }}
            >
              수정완료
            </button>
          </form>
        </>
      ) : (
        <>
          <Stack sx={{ width: '328px', margin: '200px auto' }} spacing={2}>
            <Alert variant="outlined" severity="warning" sx={{ color: '#fff' }}>
              화면에 대한 권한이 없습니다.
            </Alert>
          </Stack>
        </>
      )}
    </div>
  );
}
