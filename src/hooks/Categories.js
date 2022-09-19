//CategoryFilter.js
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import '../hooks/CategoryFilter.css';

const categories = [
  {
    name: '수요일',
    day: '28일\n',
    value: '28',
  },
  {
    name: '목요일',
    day: '29일\n',
    value: '29',
  },
  {
    name: '금요일',
    day: '30일\n',
    value: '30',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 0/7rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 3rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : c.name}
        >
          {c.day}
          <h1>{c.name}</h1>
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
