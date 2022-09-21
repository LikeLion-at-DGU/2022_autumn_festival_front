import React from 'react';
import footerEmail from '../../assets/img/footerEmail.png';
import footerGithub from '../../assets/img/footerGithub.png';
import footerInsta from '../../assets/img/footerInsta.png';
import './Footer.css';

export default function Footer({ title }) {
  return (
    <>
      <div>
        <hr></hr>
        <div className="footer">
          <div>
            <div className="text">
              <div>동국대학교 멋쟁이사자처럼</div>
              <div>dgu likelion</div>{' '}
            </div>
            <img
              className="footer__Insta"
              alt="footerInsta"
              src={footerInsta}
              onClick={() =>
                window.open(
                  'https://www.instagram.com/likelion_dongguk/?hl=ko',
                  '_blank',
                )
              }
            />
            <img
              className="footer__Github"
              alt="footerGithub"
              src={footerGithub}
              onClick={() =>
                window.open('https://github.com/LikeLion-at-DGU', '_blank')
              }
            />
            <img
              className="footer__Email"
              alt="footerEmail"
              src={footerEmail}
              onClick={() =>
                window.open(
                  'https://www.instagram.com/likelion_dongguk/?hl=ko',
                  '_blank',
                )
              }
            />{' '}
          </div>
        </div>
      </div>
    </>
  );
}
