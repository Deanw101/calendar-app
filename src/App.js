 import 'bootstrap/dist/css/bootstrap.min.css'
import './dt.css';
import './App.css';
import Logo from './assets/logo.png';
import Form from './form.jsx';
import Silver from './Silver.jsx';
import {useState} from "react";
function App() {

  const [showSuccess, setShowSuccess] = useState (false);

  const handleSubmit = (data) => {
    console.log(data)
    setShowSuccess (true)
  }

  const handleBack = () => {
    window.history.back()
  }

const hash = window.location.hash


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



              <div className="col-xl-5">
              {hash == '#silver' ? <Silver />: null}
              </div>


              <div className="App MainForm col-xl-5">
              {showSuccess ? <h5>Success!</h5>: <Form handleSubmit={handleSubmit} />}

              </div>
               </div>





            </div>
      </div>

    </>
  );
}

export default App;
