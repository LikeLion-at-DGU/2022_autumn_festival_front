import React, { useState } from 'react';
import { EditForm } from '../../pages/Booth/style';
import axios from '../../api/axios';

export default function BoothMenuAdd({ admin, menu, setMenu }) {
  const [error, setError] = useState(false);
  const [newMenu, setNewMenu] = useState({
    name: '',
    price: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setNewMenu({
      ...newMenu,
      [name]: value,
    });
    console.log(value, name);
  };

  function isValidCheck() {
    if (newMenu.name === '' || newMenu.price === '') {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  }

  const onSubmit = () => {
    if (isValidCheck()) {
      setMenu([...menu, newMenu]);
    }
  };

  return (
    <>
      {admin === 'true' ? (
        <>
          <EditForm>
            <input
              type="text"
              name="name"
              placeholder="메뉴 이름"
              value={newMenu.name}
              onChange={onChange}
            />
            <input
              type="text"
              name="price"
              placeholder="가격"
              value={newMenu.price}
              onChange={onChange}
            />
            <a href="#" onClick={onSubmit}>
              추가하기
            </a>
          </EditForm>
          {error ? <>메뉴정보를 모두 입력해주세요</> : <></>}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
