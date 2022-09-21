import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Booth.css';
import boothsearchC from '../../assets/img/boothsearchC.png';

export default function BoothSearch({}) {
  const navigate = useNavigate();

  const [searchResult, setsearchResult] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  // db에 쿼리가져와야하는디... 부스이름 가져와야지~!
  const searchTerm = query.get('q'); // q에 있는걸 가져온다.

  useEffect(() => {
    if (searchTerm) {
      fetchSearchBooth(searchTerm);
    }
  }, [searchTerm]);

  // 부스 title로 찾기
  const fetchSearchBooth = async (searchTerm) => {
    try {
      console.log(`/api/booths?search=${searchTerm}`);
      const request = await axios.get(
        `/api/booths?search=${searchTerm}`, //메뉴..까지.. 뒤지는건가..!
      );

      console.log(request);
      setsearchResult(request.data.results);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const renderSearchResults = () => {
    return searchResult.length > 0 ? (
      <section className="search-container">
        {searchResult.map((booth) => {
          if (booth.backdrop_path !== null) {
            const boothImageUrl = '이미지URL' + booth.backdrop_path;
            return (
              // 부스카드
              <div className="booth" key={booth.id}>
                <div
                  onClick={() => navigate(`/${booth.id}`)}
                  className="booth__column-poster"
                >
                  <img
                    src={boothImageUrl}
                    alt="booth"
                    className="booth__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
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
