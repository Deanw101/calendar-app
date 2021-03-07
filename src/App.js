import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/dt.css';
import './App.css';
// import Logo from './assets/logo.png';
import Form from './components/Form/form.jsx';
import PackageCard from './components/Cards/PackageCard.jsx';
import SubmitedForm from './components/Form/SubmitedForm.jsx'
import {useState} from "react";

function App() {

  const [showSuccess, setShowSuccess] = useState (false);

  const handleSubmit = (data) => {
    console.log(data)
    setShowSuccess (true)
  }

  // const handleBack = () => {
  //   window.history.back()
  // }


  return (

    <div>



      <div className="review-head d-none d-lg-block">

        <div className="heading-text">

            <div className="review-text-back">
              <h1>MAKE THE DATE. YOU'RE ONLY CLICKS <br /> AWAY FROM AN UNFORGETTABLE SHOOT.</h1>
              </div>
              </div>

              <div className="row">



              <div className="col-xl-5 col-lg-5">
              <PackageCard />
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
                    <PackageCard />
                    </div>


                    <div className="App MainForm col-md-12">
                    {showSuccess ? <SubmitedForm />: <Form handleSubmit={handleSubmit} />}

                    </div>
                     </div>





                  </div>
      </div>
  );
}

export default App;
