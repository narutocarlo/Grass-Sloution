import React from "react";

export default function Footer() {

    return (
        <section className="footer gtm-track-element" data-gtm-allowed-actions="scroll" data-gtm-element="footer">
            <div className="sr-container">
                <div className="footer__parent">
                    <div className="footer__column--branding">

                        <a href="/" className="footer__logo">
                            <img className="footer__logo-img" alt="Scaler Academy logo" src="https://assets.scaler.com/assets/scaler/svg/scaler-logo-white-22af1fc1c42561ab06c87229e1e8abb555716fe2a1d817482067cb8f005e1799.svg.gz"/>
                        </a>
                        <div className="footer__love m-t-5">

                            <div className="footer__block">
                                <span className="h4">

                                    Engineered with <i className="icon-heart secondary"></i> by

                                </span>
                                <img alt="InterviewBit Academy" src="https://assets.scaler.com/assets/scaler/png/made-by-interviewbit-footer-cf88e6220897577618a5dff23eef6f55d95d787a22c0f88b4ffa54d6c3dbf5d6.png.gz"/>
                            </div>  </div>


                    </div>
                    <div className="footer__column">
                        <div className="footer__heading">
                            <h3> Resources</h3>
                        </div>
                        <ul className="footer__contents">
                            <li className="footer__list">
                                <a className="footer__link" data-cy="about_us_footer_link" >

                                    About us
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="become_a_mentor_footer_link" >

                                    Become a Mentor
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="become_a_ta_footer_link" >

                                    Become a TA
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="become_a_career_coach_footer_link" >

                                    Become a Career Coach
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="scaler_blog_footer_link" >

                                    Scaler Blog
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="frequently_asked_questions_footer_link" >

                                    Frequently Asked Questions
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="terms_of_use_footer_link" >

                                    Terms of Use
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="privacy_policy_footer_link" >

                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <div className="footer__heading">
                            <h3> Contact us</h3>
                        </div>
                        <ul className="footer__contents">
                            <li className="footer__list">
                                <a className="footer__link" data-cy="email_hello_scaler_com_footer_link" >

                                    Email: hello@scaler.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <div className="footer__heading">
                            <h3> Follow us on</h3>
                        </div>
                        <ul className="footer__contents">
                            <li className="footer__list">
                                <a className="footer__link" data-cy="youtube_footer_link" >

                                    <i className="footer__link-icon icon-play"></i>
                                    Youtube
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="linkedin_footer_link" >

                                    <i className="footer__link-icon icon-linkedin-logo"></i>
                                    LinkedIn
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="facebook_footer_link" >

                                    <i className="footer__link-icon icon-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="twitter_footer_link" >

                                    <i className="footer__link-icon icon-twitter"></i>
                                    Twitter
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="instagram_footer_link" >

                                    <i className="footer__link-icon icon-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li className="footer__list">
                                <a className="footer__link" data-cy="reviews_on_quora_footer_link" >

                                    <i className="footer__link-icon icon-quora"></i>
                                    Reviews on Quora
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright__content">
                    <p className="m-h-10">
                        Copyright
                        <img src="https://assets.scaler.com/assets/scaler/svg/copyright-cf0f03018b8d83eae3708502180eefc1d40751202d8ad50acaaa84bbb07defb4.svg.gz" alt="copyright"/>
                            2022 InterviewBit Technologies Pte. Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}