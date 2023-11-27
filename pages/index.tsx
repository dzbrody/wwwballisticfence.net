import React from 'react';

const HomePage = () => {
    return (
        <div className="container">
            <header>
                <h1>Ballistic Panel Fencing: Safeguarding Our Jewish Communities</h1>
            </header>

            <section className="intro">
                <p>
                    In an era where safety concerns are increasingly prevalent, our bullet-resistant products offer unparalleled protection for Jewish schools, synagogues, and community centers. We stand firm in our commitment to safeguarding our heritage and future against threats.
                </p>
            </section>

            <section className="product-description">
                <h2>Protecting with Resilience and Innovation</h2>
                <p>
                    Our Ballistic Barriers redefine security standards with fencing and gates rigorously tested to UL 752 standards. These robust barriers are engineered to withstand various threats, including active shooters, ensuring the well-being of our community.
                </p>
                <p>
                    The forefront of our innovation is our lightweight concrete panels, designed for both high security and aesthetic harmony. These panels can be customized in colors and patterns, offering not just protection but also an enhancement to our community spaces.
                </p>
            </section>

            <section className="community-assurance">
                <h3>Community Assurance: Safety in Unity</h3>
                <p>
                    Our panels are more than a physical barrier; they are a symbol of resilience and unity. By integrating these security measures, we fortify not just our buildings, but also the spirit of our community, ensuring a safe environment for education, worship, and communal activities.
                </p>
            </section>

            <section className="technology">
                <h3>Advanced Technology for Peace of Mind</h3>
                <p>
                    Leveraging patented technology and expert engineering, our panels set a new standard in security solutions. Their lightweight yet durable design demonstrates our commitment to providing state-of-the-art protection while respecting the sanctity of our communal spaces.
                </p>
            </section>



            <section className="field-testing">
                <h3>Field Testing Demonstrations</h3>
                <p>
                    Witness the resilience and strength of our ballistic panels through our field testing demonstrations.
                </p>
                <div className="video-container">
                    <h4>Test in Mississippi with Colonel Green</h4>
                    <p>Test of 50 caliber ballistic armor-piercing on a 4-inch thick panel.</p>
                    <video width="640" height="480" controls poster="/images/field-test-poster.png">
                        <source src="/videos/50caltest1.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

            </section>

            <section className="nato-standards">
                <h3>Compliance with NATO Ballistic Standards</h3>
                <p>
                    Our ballistic panels meet rigorous NATO standards, ensuring top-tier protection. View our ballistic standards chart for detailed information.
                </p>
                {/* Include NATO standards chart image here if necessary */}
                {/* <img src="/images/nato-chart.png" alt="NATO Ballistic Standards Chart" /> */}
            </section>

            <section className="call-to-action">
                <h3>Join Our Mission: Protecting Our Heritage and Future</h3>
                <p>
                    The security of our community is a collective responsibility. We invite you to join us in this critical mission to safeguard our people and institutions. Your support, whether through advocacy, funding, or spreading awareness, is invaluable.
                </p>
                <p>
                    For more information on how you can contribute or to discuss potential collaborations, please reach out to Daniel Brody at <a href="mailto:db@xgcsoftwareinc.com">db@xgcsoftwareinc.com</a> or call [978] 237-6366.
                </p>
                <button onClick={() => { /* Implement click event */ }}>
                    Get Involved
                </button>
            </section>

            <footer>
                <p>© 2023 Ballistic Fence. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
