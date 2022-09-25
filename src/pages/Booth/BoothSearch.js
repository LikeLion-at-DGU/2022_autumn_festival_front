import axios from '../../api/axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Booth.css';
import boothsearchC from '../../assets/img/boothsearchC.png';
import Boothcard from '../../components/Booth/Boothcard';
import noticeExImg from '../../assets/img/noticeExImg.png';
import styled from 'styled-components';

const BoothCardContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr;
  grid-template-columns: 1fr 1fr;
  width: 328px;
  margin: 0 auto;
  margin-top: 10px;
`;

export default function BoothSearch({}) {
  const [searchResult, setsearchResult] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const day = new Date();

  // todate는 29일에 2, 30일에 3, 그 외(28일)에는 1
  const todate =
    day.getDate() - 27 === 2 ? 2 : day.getDate() - 27 === 3 ? 3 : 1;

  const [isToday, setIsToday] = useState(todate);

  let query = useQuery();
  const searchTerm = query.get('q'); // booth에 있는거 가져옥..?

  useEffect(() => {
    if (searchTerm) {
      fetchSearchBooth(searchTerm);
    }
  }, [searchTerm]);

  // 부스 title로 찾기
  const fetchSearchBooth = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/booths?filter=${searchTerm}`, //메뉴..까지.. 뒤지는건가..!
      );

      setsearchResult(request.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const renderSearchResults = () => {
    return searchResult.length > 0 ? (
      <section className="search-container">
        <BoothCardContainer>
          {searchResult.map((boo) => {
            return (
              <Boothcard
                key={boo.id}
                boothId={boo.id}
                title={boo.title}
                intro={boo.introduction}
                type={boo.boothType}
                locationName={boo.location}
                likeCount={boo.likeCnt}
                boothImage={boo.images[0].storedFilePath}
              />
            );
          })}
        </BoothCardContainer>
      </section>
    ) : (
      <section className="no-results">
        <p style={{ fontSize: '0.8rem', color: '#FD9903' }}>
          검색어를 입력하고 스페이스바를 쳐주세요!
        </p>
        <p style={{ fontSize: '1.3rem' }}>검색 결과</p>

        <div className="no-results__text">
          <img src={boothsearchC} className="noResultImg" />

          <p>찾고자하는 "{searchTerm}"에 맞는 부스 또는 메뉴가 없습니다.</p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}
