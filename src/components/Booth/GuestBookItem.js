import React, { useState } from 'react';
import './GuestBookItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

export default function GuestBookItem({
  detailId,
  id,
  writer,
  content,
  createdDateTime,
}) {
  //   function Fomatting() {
  //     var str = item.createdDateTime;
  //     if (typeof data == 'number') {
  //       str = str + '';
  //     }
  //     var n = str
  //       //   .replace(/[^\d]+/g, '')
  //       //   .replace(/(\d)(?=(?:\d{4})+(?!\d))/g, '$1.');
  //       .replace(/-/g, '.');
  //     return n;
  //   }

  console.log(detailId);

  return (
    <>
      <div className="comment_items_wrap">
        <div className="comment__name">{writer}</div>
        {/* 날짜 format 바꾼 후 출력해야함 */}
        <div className="comment__createdDateTime">
          {/*{Fomatting()} */} {createdDateTime}
        </div>

        <button
          className="faPencil"
          onClick={() => {
            window.location.href = `/booth/${detailId}/comment/${id}`;
          }}
        >
          <FontAwesomeIcon icon={faPencil} />
          삭제
        </button>
        <br></br>
        <div className="comment__content">{content}</div>
      </div>
    </>
  );
}
