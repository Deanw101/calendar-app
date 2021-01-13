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

              <div className="row">
              <div className="col-xl-6"> </div>
              <div className="App MainForm col-xl-6">
                <button onClick={handleBack}>Back</button>
                <div className="afi">
                  <input type="text" name="fname" placeholder="First Name"/>
                </div>
                <div className="afi">
                  <input type="text" name="lname" placeholder="Last Name"/>
                </div>

                <div className="afi">
                  <input type="text" id="street_number" placeholder="Address"/>
                </div>

                <div className="afi">
                  <input type="text" id="root_phone" placeholder="Phone Number"/>
                </div>

                <div className="afi">
                  <input type="text" id="Postal-Code" placeholder="Phone Number"/>
                </div>

                <Datetime
                inputProps={{ placeholder: 'MM/DD/YYYY 00:00 AM/PM' }}
                 />
                <button>Submit</button>
              </div>
               </div>

            </div>
      </div>

    </>
  );
}

export default App;
