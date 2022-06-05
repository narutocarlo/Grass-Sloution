import React from "react";

export default function JournySection() {

    return (
        <section data-gtm-element="journey_section" data-gtm-allowed-actions="scroll" id="journey-section" className="section gtm-track-element journey" data-cy="" >
            <div className="sr-container ">


                <div className="section-header journey__heading">
                    <div className="section-header__content">
                        <h2 className="section-header__title">
                            <b><span className="highlight">Start your learning</span> journey</b> or make some Maggi? In 2 minutes, you can do both!
                        </h2>
                    </div>

                </div>

                <div className="journey__cardsSet">
                    <div className="journey__cards">
                        <div className="journey__card" >
                            <div className="journey__order">1.</div>
                            <div className="journey__title">Easy Registration</div>
                            <div className="journey__content">In &lt;2 minutes, make a new account or login using Email</div>
                        </div>
                        <div className="journey__card" >
                            <div className="journey__order">2.</div>
                            <div className="journey__title">Quick Evaluation</div>
                            <div className="journey__content">Simple 30 minutes MCQ test, focused on aptitude and basic coding to find the right course for you</div>
                        </div>
                    </div>
                    <div className="journey__cards">
                        <div className="journey__card" >
                            <div className="journey__order">3.</div>
                            <div className="journey__title">Enroll in your course</div>
                            <div className="journey__content">Sign up with our various EMI options to swiftly kickstart your learning journey</div>
                        </div>
                        <div className="journey__card" >
                            <div className="journey__order">4.</div>
                            <div className="journey__title">Upgrade your batch!</div>
                            <div className="journey__content">Want a shorter course? Take the coding challenge after enrollment</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}