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


    <div className="spiral">
    <div className="logo">
              <a className="load-spiral" href="index.html">
                <img src={Logo} />
              </a>
            </div>


      <div className="review-head">

        <div className="heading-text">

          <div className="review-text-front">
            <h1>MAKE THE DATE. YOU'RE ONLY CLICKS <br /> AWAY FROM AN UNFORGETTABLE SHOOT.</h1>
            </div>
            <div className="middleskew"> </div>
            <div className="review-text-back">
              <h1>MAKE THE DATE. YOU'RE ONLY CLICKS <br /> AWAY FROM AN UNFORGETTABLE SHOOT.</h1>
              </div>
              </div>
            </div>
      </div>


    <div className="App">
      <button onClick={handleBack}>Back</button>
      <input type="text" />
      <Datetime />
      <button>Submit</button>
    </div>

    </>
  );
}

export default App;
