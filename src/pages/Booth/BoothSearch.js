import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  console.log(searchTerm);

  // 부스 title로 찾기
  const fetchSearchBooth = async (searchTerm) => {
    try {
      // const request = await axios.get(
      //   `/api/booths?search=searchTerm`, //메뉴..까지.. 뒤지는건가..!
      // );
      // setsearchResult(request.data.results);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const renderSearchResults = () => {
    return searchResult.length > 0 ? (
      <section className="search-container">
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>찾고자하는 "{searchTerm}"에 부스 또는 메뉴가 없습니다.</p>
        </div>
      </section>
    );
  };
  return renderSearchResults();
}
