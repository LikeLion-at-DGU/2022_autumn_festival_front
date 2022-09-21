import React from 'react';
import './Boothcard.css';

//부스카드

export default function Boothcard({ title }) {
  return (
    <section className="row">
      <h2>{title}</h2>
      <div>hi</div>

      <div class="container">
        <div class="square"></div>
        <div class="label"></div>
      </div>
    </section>
  );
}
