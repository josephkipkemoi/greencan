import NavComponent from "../components/NavComponent/NavComponent"
import "./Services.css"

function Services() {
    return (
        <div>
            <NavComponent/>
            <div className="mainsec">
                <TopComponent/>
                <ServiceListComponent/>
                <PricingComponent/>
            </div>
        </div>
    )
}

function TopComponent() {
    return (
        <>
            <div className="topdiv">
                    <img src="./Images/banner-services-01.png" alt="green-tree"/>
                    <h2> Waste Solutions for a Greener Future</h2>
                    <p>At <span >GreenCan</span>, we make waste management simple, efficient, and eco-friendly.<br/> Our innovative solutions make waste management easier, cleaner, and more <br/>sustainable for communities and businesses alike. Whether it's efficient <br/>recycling, responsible disposal, or eco-friendly initiatives, we are here to make <br/> a difference. Explore our services and join us in creating a cleaner world! </p>
                    <span className="arrow">&#11206;</span> <p className="p2"> Scroll down to checkout our amazing services...</p>
                </div>
                <p className="title">Services</p>
                <img className="img1" src="./Images/1722-01.png" alt="design"/>
        </>
    )
}

function ServiceListComponent() {
    return (
        <div className="secdiv">
        <div className="grid-container">
            <div className="card" onclick="openPopup('popup1')">
                <div className="image container">
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                </div>
                <h3>Affordable and Efficient Litter Collection</h3>
            </div>
            <div className="card" onclick="openPopup('popup2')">
                <div class="image container">
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                </div>
                <h3>Engaging Youth in the Green Credit Program</h3>
            </div>
            <div className="card" onclick="openPopup('popup3')">
                <div className="image container">
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                </div>
                <h3>Comprehensive Recycling Solutions</h3>
            </div>
            <div className="card" onclick="openPopup('popup4')">
                <div className="image container">
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                </div>
                <h3>Organic Waste Management & Composting</h3>
            </div>
            <div className="card" onclick="openPopup('popup5')">
                <div className="image container">
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                </div>
                <h3>E-Waste Collection & Safe Disposal</h3>
            </div>
            <div className="card" onclick="openPopup('popup6')">
                <div className="image container">
                    <img src="https://via.placeholder.com/150" alt="Image 1"/>
                </div>
                <h3>Sustainability Consulting & Advisory Services</h3>
            </div>
        </div>
        <div id="popup1" className="popup">
            <div className="popup-content">
                <span className="close-btn" onclick="closePopup('popup1')">×</span>
                <h2>Affordable and Efficient Litter Collection</h2>
                <p>Detailed content about this topic...</p>
            </div>
        </div>
        <div id="popup2" className="popup">
            <div className="popup-content">
                <span className="close-btn" onclick="closePopup('popup2')">×</span>
                <h2>Engaging Youth in the Green Credit Program</h2>
                <p>Detailed content about this topic...</p>
            </div>
        </div>
        <div id="popup3" className="popup">
            <div className="popup-content">
                <span className="close-btn" onclick="closePopup('popup3')">×</span>
                <h2>Comprehensive Recycling Solutions</h2>
                <p>Detailed content about this topic...</p>
            </div>
        </div>
        <div id="popup4" className="popup">
            <div className="popup-content">
                <span className="close-btn" onclick="closePopup('popup4')">×</span>
                <h2>Organic Waste Management & Composting</h2>
                <p>Detailed content about this topic...</p>
            </div>
        </div>
        <div id="popup5" className="popup">
            <div className="popup-content">
                <span className="close-btn" onclick="closePopup('popup5')">×</span>
                <h2>E-Waste Collection & Safe Disposal</h2>
                <p>Detailed content about this topic...</p>
            </div>
        </div>
        <div id="popup6" className="popup">
            <div className="popup-content">
                <span className="close-btn" onclick="closePopup('popup6')">×</span>
                <h2>Sustainability Consulting & Advisory Services</h2>
                <p>Detailed content about this topic...</p>
            </div>
        </div>
    </div>
    )
}

function PricingComponent() {
    return (

        <div className="pricing">
            <div className="text">
                <p>OurPlans</p>
            </div>
            <div className="snip1404">
                <div className="plan">
                  <header>
                    <h4 className="plan-title">
                      Starter
                    </h4>
                    <div className="plan-cost"><span className="plan-price">$19</span><span className="plan-type">/month</span></div>
                  </header>
                  <ul className="plan-features">
                    <li><i className="ion-checkmark"> </i>5GB Linux Web Space</li>
                    <li><i className="ion-checkmark"> </i>5 MySQL Databases</li>
                    <li><i className="ion-checkmark"> </i>Unlimited Email</li>
                    <li><i className="ion-checkmark"> </i>250Gb mo Transfer</li>
                    <li><i className="ion-checkmark"> </i>24/7 Tech Support</li>
                    <li><i className="ion-checkmark"> </i>Daily Backups</li>
                  </ul>
                  <div className="plan-select"><a href="">Select Plan</a></div>
                </div>
                <div className="plan">
                  <header>
                    <h4 className="plan-title">
                       
                      Basic
                    </h4>
                    <div className="plan-cost"><span className="plan-price">$29</span><span className="plan-type">/month</span></div>
                  </header>
                  <ul className="plan-features">
                    <li><i className="ion-checkmark"> </i>10GB Linux Web Space</li>
                    <li><i className="ion-checkmark"> </i>10 MySQL Databases</li>
                    <li><i className="ion-checkmark"> </i>Unlimited Email</li>
                    <li><i className="ion-checkmark"> </i>500Gb mo Transfer</li>
                    <li><i className="ion-checkmark"> </i>24/7 Tech Support</li>
                    <li><i className="ion-checkmark"> </i>Daily Backups</li>
                  </ul>
                  <div className="plan-select"><a href="">Select Plan</a></div>
                </div>
                <div className="plan featured">
                  <header>
                    <h4 className="plan-title">
                       
                      Professional
                    </h4>
                    <div className="plan-cost"><span className="plan-price">$49</span><span className="plan-type">/month</span></div>
                  </header>
                  <ul className="plan-features">
                    <li><i className="ion-checkmark"> </i>25GB Linux Web Space</li>
                    <li><i className="ion-checkmark"> </i>25 MySQL Databases</li>
                    <li><i className="ion-checkmark"> </i>Unlimited Email</li>
                    <li><i className="ion-checkmark"> </i>2000Gb mo Transfer</li>
                    <li><i className="ion-checkmark"> </i>24/7 Tech Support</li>
                    <li><i className="ion-checkmark"> </i>Daily Backups</li>
                  </ul>
                  <div className="plan-select"><a href="">Select Plan</a></div>
                </div>
                <div className="plan">
                  <header>
                    <h4 className="plan-title">
                       
                      Ultra
                    </h4>
                    <div className="plan-cost"><span className="plan-price">$99</span><span className="plan-type">/month</span></div>
                  </header>
                  <ul className="plan-features">
                    <li><i className="ion-checkmark"> </i>100GB Linux Web Space</li>
                    <li><i className="ion-checkmark"> </i>Unlimited MySQL Databases</li>
                    <li><i className="ion-checkmark"> </i>Unlimited Email</li>
                    <li><i className="ion-checkmark"> </i>10000Gb mo Transfer</li>
                    <li><i className="ion-checkmark"> </i>24/7 Tech Support</li>
                    <li><i className="ion-checkmark"> </i>Daily Backups</li>
                  </ul>
                  <div className="plan-select"><a href="">Select Plan</a></div>
                </div>
              </div>
        </div>
    )
}

export default Services