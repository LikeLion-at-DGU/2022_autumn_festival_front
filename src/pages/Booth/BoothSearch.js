import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BoothSearch({}) {
  const [searchValue, setsearchValue] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/boothSearch?q=${e.target.value}`);
  };

  return <div className="booth-search-container">Booth Search</div>;
}
