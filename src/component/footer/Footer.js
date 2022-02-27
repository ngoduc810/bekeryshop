import React from 'react'
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer container-fluid">
      <div className='row g-10'>
        <div className="footer__item col-sm-4 col-12">
          <a href='#' className='footer__item-contact'>Home</a>
          <a href='#' className='footer__item-contact'>Contact Us</a>
          <a href='#' className='footer__item-contact'>Broad Ripple Village</a>
          <a href='#' className='footer__item-contact'>Carmel City Center</a>
          <a href='#' className='footer__item-contact'>Press & Awards</a>
          <a href='#' className='footer__item-contact'>Careers</a>
          <a href='#' className='footer__item-contact'>FAQ</a>
        </div>
        <div className="footer__item-nametag col-sm-4 col-12">
            © 2022 The Cake Bake Shop® Inc.
        </div>
        <div className="footer__item-name col-sm-4 col-12">
          <h3>THE CAKE BAKE SHOP, INC.</h3>
          <p>Enter your social media for Cake Bake Shop updates.</p>
          <div className='footer__item-social'>
            <a href='#'><i className="fa fa-facebook-f"></i></a>
            <a href='#'><i className="fa fa-instagram"></i></a>
            <a href='#'><i className="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>

  </div>
  )
}
