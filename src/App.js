import 'bootstrap/dist/css/bootstrap.min.css';
import Datetime from "react-datetime";
import './dt.css';
import './App.css';
import Logo from './assets/logo.png';
function App() {

  const handleBack = () => {
    window.history.back()
  }

  return (

    <>


    <div>
    <div className="logo">
              <a className="load-spiral" href="index.html">
                <img src={Logo} />
              </a>
            </div>


      <div className="review-head">

        <div className="heading-text">

            <div className="review-text-back">
              <h1>MAKE THE DATE. YOU'RE ONLY CLICKS <br /> AWAY FROM AN UNFORGETTABLE SHOOT.</h1>
              </div>
              </div>

              <button onClick={handleBack}>Back</button>

              <div className="row">

              <div className="App MainForm offset-xl-6 col-xl-6">
                <form>
                <span className="FormText">Your Details</span>
                <div className="afi FormInput Fifty">
                  <input type="text" name="fname" placeholder="First Name"/>
                </div>
                <div className="afi FormInput Fifty">
                  <input type="text" name="lname" placeholder="Last Name"/>
                </div>

                <div className="afi FormInput">
                  <input type="text" id="root_phone" placeholder="Phone Number"/>
                </div>
                <span className="FormText">Shoot Location</span>
                <div className="afi FormInput">
                  <input type="text" id="street_number" placeholder="Address"/>
                </div>

                <div className="afi FormInput">
                  <input type="text" id="Postal-Code" placeholder="City"/>
                </div>

                <div className="afi FormInput">
                  <input type="text FormInput" id="Postal-Code" placeholder="State"/>
                </div>

                <div className="afi FormInput">
                  <input type="text" id="Postal-Code" placeholder="Postal Code"/>
                </div>
                <span className="FormText">Shoot Date and Time</span>
                <div className="FormInput">
                <Datetime
                inputProps={{ placeholder: 'MM/DD/YYYY 00:00 AM/PM'}}
                 />
                </div>
                <div className="FormSubmit">
                  <button href="#">Submit</button>
                </div>
                </form>
              </div>
               </div>

            </div>
      </div>

    </>
  );
}

export default App;
