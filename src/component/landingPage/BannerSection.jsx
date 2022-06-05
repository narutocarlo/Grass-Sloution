import React from "react";

export default function BannerSection() {
    
    return (
        <section   className="section  banner"  >
                <div className="sr-container ">

                    <div className="banner__container">
                        <div className="banner__content">
                            <div className="banner__head bolder">
                            ZERO, Upfront free course
                            to start your career
                            </div>
                            
                            <div className="banner__apply-section">
                                <div className="banner__button">

                                    <a className="gtm-track-element auth-trigger academy-button uppercase secondary is-flat es-event-tracker" data-gtm-allowed-actions="click hover" data-gtm-element="auth_trigger" data-action="flow-trigger" data-target="auth" data-mode="register" data-cy="book_a_live_class_button" data-proceed="/academy/free-live-class/" data-tracking="ga" data-ga-action="auth" data-ga-label="free-product-live-class" data-name="free-product-live-class">

                                        Apply Now

                                    </a>
                                </div>                                
                            </div>
                        </div>
                        <div className="banner__img">
                            <div className="banner__hexagon-container">
                                <div className="hexagon"> </div>
                            </div>
                            <div className="banner__hexagon-container">
                                <div className="hexagon"> </div>
                            </div>
                            <img src="https://assets.scaler.com/assets/academy/png/boy-93234ea365d9b1fa3db64b4117795c1351df4a7e2ebf8889ac1d62ae2c1e5643.png.gz" alt="Scaler Academy Banner Image" />
                            <img src="https://assets.scaler.com/assets/academy/png/shruti-8dca2cceaed94fe1b6f17184e38475f2ebcfe5d79fff4edb24047ff7ce2c39a6.png.gz" alt="Scaler Academy Banner Image" />
                            <img src="https://assets.scaler.com/assets/academy/png/paridhi-0cb71ee9959e65dab699ffb75f4b9395cf4c6985f8afc67579b77d5460aabbde.png.gz" alt="Scaler Academy Banner Image" />
                            <div className="banner__hexagon-container">
                                <div className="hexagon"> </div>
                            </div>
                            <div className="banner__hexagon-container">
                                <div className="hexagon"> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
    );
}