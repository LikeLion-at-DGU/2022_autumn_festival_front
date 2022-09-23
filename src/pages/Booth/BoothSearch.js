import axios from '../../api/axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Booth.css';
import boothsearchC from '../../assets/img/boothsearchC.png';
import Boothcard from '../../components/Booth/Boothcard';

export default function BoothSearch({}) {
  const [booth, setBooth] = useState([
    {
      id: 1,
      type: '주점',
      title: '명진관호떡',
      introduction: '맛있는 호떡과 다양한 음식',
      like_count: 20,
      location: '원흥관',
      day: [1, 2, 3],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',

      content:
        '맛있는 호떡 먹고 가세요~  호호 ~ 불어먹먹는 떡이라~ 호떠 ~ 아니에요~~호호호홓ㅎ',
      menu: [
        {
          name: '붕어빵',
          price: 1000,
        },
        {
          name: '호떡',
          price: 3000,
        },
      ],
    },

    {
      id: 2,
      introduction: '으아가각아ㅏㄱ',
      title: '신공공룡',
      type: '푸드트럭',
      location: '신공학관',
      day: [1, 2, 3],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '으아악',
      like_count: 100,
      menu: [
        {
          name: '붕어빵',
          price: 1000,
        },
        {
          name: '호떡',
          price: 3000,
        },
      ],
    },
    {
      id: 3,
      introduction: '혜화아아아ㅏㄱ',
      title: '혜화관 햇님',
      type: '부스',
      location: '혜화관',
      day: [1, 2],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '혜화아아아ㅏㄱ',
      like_count: 12,
      menu: [
        {
          name: '붕어빵',
          price: 1000,
        },
        {
          name: '호떡',
          price: 3000,
        },
      ],
    },
    {
      id: 4,
      introduction: '만해~10000Sun~',
      title: '만해광장 희찬',
      type: '푸드트럭',
      location: '만해광장',
      day: [3],
      notice: '268일 우천시에도 운영합니다~ \n [운영시간] 10:00 ~ ',
      content: '혜화아아아ㅏㄱ',
      like_count: 12,
      menu: [
        {
          name: '붕어빵',
          price: 1000,
        },
        {
          name: '호떡',
          price: 3000,
        },
      ],
    },
  ]);

  const navigate = useNavigate();

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

      setsearchResult(request.data.results);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const renderSearchResults = () => {
    console.log(booth);
    return searchResult.length > 0 ? (
      <section className="search-container">
        {searchResult.map((boo) => {
          return (
            <span onClick={() => navigate(`/booth/${boo.id}`)}>
              <Boothcard
                key={boo.id}
                title={boo.title}
                intro={boo.introduction}
                type={boo.type}
                locationName={boo.location}
                likeCount={boo.like_count}
                nowBuilding={boo.location}
                nowDay={isToday}
                boothDay={boo.day}
              />
            </span>
          );
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
