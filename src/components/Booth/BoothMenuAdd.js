import React, { useState } from 'react';
import { EditForm } from '../../pages/Booth/style';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

export default function BoothMenuAdd({ admin, menu, setMenu }) {
  const [error, setError] = useState(false);
  const [newMenu, setNewMenu] = useState({
    name: '',
    price: 0,
  });
  const boothId = useParams().id;

  const onChange = (e) => {
    const { value, name } = e.target;
    setNewMenu({
      ...newMenu,
      [name]: value,
    });
  };

  function isValidCheck() {
    if (newMenu.name == '' || newMenu.price == '') {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  }

  const onSubmit = async () => {
    const body = { name: newMenu.name, price: newMenu.price };
    // console.log(body, 'type:', typeof newMenu.price);
    if (isValidCheck()) {
      await axios.post(`booths/${boothId}/menus`, body).then((res) => {});
      window.location.reload();
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
              onChange={onChange}
            />
            <input
              type="text"
              name="price"
              placeholder="가격"
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
