import React from "react";
// import "./style.js.css";
export default function NavBar() {
  return (
    <header id="main-site-header" className="header scaler-branding scaler-academy-header dsml-header header--sticky slide-in-down">
      <div className="header__container">
        <div className="header__brand">
          <a className="header__brand-link" href="/academy/">
            <img className="header__logo"  src="../../assets/logo/Grras Logo white 116x98px -01.png"/>
          </a>
        </div>



        <div className="header__content">



          <div className="header__nav">
            <a href="#curriculum" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Curriculum" data-cy="curriculum_nav_link" >
              Curriculum
            </a>
            <a href="#testimonial" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Reviews" data-cy="reviews_nav_link" >
              Reviews
            </a>
            <a href="#teachers" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Teaching" data-cy="teaching_nav_link" >
              Teaching
            </a>
            <a href="#mentors" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Mentorship" data-cy="mentorship_nav_link" >
              Mentorship
            </a>
            <a href="#community" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Community" data-cy="community_nav_link" >
              Community
            </a>
            <a href="#careers" data-action="smooth-scroll" className="header__nav-item gtm-track-element header__nav-item--active" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Careers" data-cy="careers_nav_link" >
              Careers
            </a>
            <a href="#pricing" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Pricing" data-cy="pricing_nav_link" >
              Pricing
            </a>
            <a href="/faq" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="FAQs" data-cy="faqs_nav_link" >
              FAQs
            </a>

          </div>

          <div className="header__right">

            <div data-default-country="true" className="header-apply header-apply-button-hidden">




              <a className="gtm-track-element auth-trigger apply-button academy-button uppercase bold m-r-10 secondary is-flat" data-gtm-allowed-actions="click hover" data-gtm-element="auth_trigger" data-action="flow-trigger" data-target="auth" data-mode="register" data-cy="apply_now_button" data-proceed="/apply/" data-tracking="ga" data-ga-action="auth" data-ga-label="header-register" data-name="header-register">

                Apply Now

              </a>

            </div>


            <div className="auth-options">

              <a className="gtm-track-element auth-trigger academy-button primary is-inverted bold" data-gtm-allowed-actions="click hover" data-gtm-element="auth_trigger" data-action="flow-trigger" data-target="auth" data-mode="login-mobile" data-cy="login_button" data-tracking="ga" data-ga-action="auth" data-ga-label="academy-header-login" data-name="academy-header-login">

                Login

              </a>
            </div>

          </div>


        </div>

        <div className="header__burger-button">
          <div className="burger">
            <div className="burger__line"></div>
            <div className="burger__line"></div>
            <div className="burger__line"></div>
          </div>
        </div>
      </div>

      <div className="header__backdrop">
      </div>
      <div className="header__burger">


        <div className="header__nav">
          <a href="#curriculum" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Curriculum" data-cy="curriculum_nav_link" >
            Curriculum
          </a>
          <a href="#testimonial" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Reviews" data-cy="reviews_nav_link" >
            Reviews
          </a>
          <a href="#teachers" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Teaching" data-cy="teaching_nav_link" >
            Teaching
          </a>
          <a href="#mentors" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Mentorship" data-cy="mentorship_nav_link" >
            Mentorship
          </a>
          <a href="#community" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Community" data-cy="community_nav_link" >
            Community
          </a>
          <a href="#careers" data-action="smooth-scroll" className="header__nav-item gtm-track-element header__nav-item--active" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Careers" data-cy="careers_nav_link" >
            Careers
          </a>
          <a href="#pricing" data-action="smooth-scroll" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="Pricing" data-cy="pricing_nav_link" >
            Pricing
          </a>
          <a href="/faq" className="header__nav-item gtm-track-element" data-gtm-allowed-actions="click" data-gtm-type="nav" data-gtm-element="FAQs" data-cy="faqs_nav_link" >
            FAQs
          </a>

        </div>


        <div data-default-country="true" className="header-apply header-apply-button-hidden">




          <a className="gtm-track-element auth-trigger apply-button academy-button uppercase bold m-r-10 secondary is-flat" data-gtm-allowed-actions="click hover" data-gtm-element="auth_trigger" data-action="flow-trigger" data-target="auth" data-mode="register" data-cy="apply_now_button" data-proceed="/apply/" data-tracking="ga" data-ga-action="auth" data-ga-label="header-register" data-name="header-register">

            Apply Now

          </a>

        </div>



        <div className="auth-options">

          <a className="gtm-track-element auth-trigger academy-button primary is-inverted bold" data-gtm-allowed-actions="click hover" data-gtm-element="auth_trigger" data-action="flow-trigger" data-target="auth" data-mode="login-mobile" data-cy="login_button" data-tracking="ga" data-ga-action="auth" data-ga-label="academy-header-login" data-name="academy-header-login">

            Login

          </a>
        </div>


      </div>
    </header>
  );
}
