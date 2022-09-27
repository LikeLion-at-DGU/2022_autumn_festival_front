import React from 'react';
import { useMatch } from 'react-router-dom';
import footerEmail from '../../assets/img/footerEmail.png';
import footerGithub from '../../assets/img/footerGithub.png';
import footerInsta from '../../assets/img/footerInsta.png';
import './Footer.css';

export default function Footer({ title }) {
  const ewhaMatch = useMatch("/booth/*");
  return (
    <>
      <div className='footerdiv'>
        <hr></hr>
        <div className="footer">
          <div>
            <div className="text">
              <div>동국대학교 멋쟁이사자처럼</div>
              <div>dgu likelion</div>
              {ewhaMatch && <div style={{marginTop:"2px", fontSize:"9px"}}>Design reference by ewha likelion</div>}
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
