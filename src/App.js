 import 'bootstrap/dist/css/bootstrap.min.css'
import './dt.css';
import './App.css';
import Logo from './assets/logo.png';
import Form from './form.jsx';
import Silver from './Silver.jsx';
import Gold from './Gold.jsx';
import Platinum from './Platinum.jsx';
import Diamond from './Diamond.jsx';
import SubmitedForm from './SubmitedForm.jsx'
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
    


      <div className="review-head d-none d-lg-block">

        <div className="heading-text">

            <div className="review-text-back">
              <h1>MAKE THE DATE. YOU'RE ONLY CLICKS <br /> AWAY FROM AN UNFORGETTABLE SHOOT.</h1>
              </div>
              </div>

              <div className="row">



              <div className="col-xl-5 col-lg-5">
              {hash == '#silver' ? <Silver />: null}
              {hash == '#gold' ? <Gold />: null}
              {hash == '#platinum' ? <Platinum />: null}
              {hash == '#diamond' ? <Diamond />: null}
              </div>


              <div className="App MainForm col-xl-5 col-lg-5">
              {showSuccess ? <SubmitedForm />: <Form handleSubmit={handleSubmit} />}

              </div>
               </div>





            </div>

            <div className="review-head-mobile d-md-block d-lg-none">

              <div className="heading-text">

                  <div className="review-text-back">
                    <h1>MAKE THE DATE. YOU'RE ONLY CLICKS <br /> AWAY FROM AN UNFORGETTABLE SHOOT.</h1>
                    </div>
                    </div>

                    <div className="row">



                    <div className="col-md-12">
                    {hash == '#silver' ? <Silver />: null}
                    {hash == '#gold' ? <Gold />: null}
                    {hash == '#platinum' ? <Platinum />: null}
                    {hash == '#diamond' ? <Diamond />: null}
                    </div>


                    <div className="App MainForm col-md-12">
                    {showSuccess ? <SubmitedForm />: <Form handleSubmit={handleSubmit} />}

                    </div>
                     </div>





                  </div>
      </div>

    </>
  );
}

export default App;
