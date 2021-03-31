import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/dt.css';
import './App.css';
import './assets/Menu.css';
// import Logo from './assets/logo.png';
import axios from 'axios';
import Form from './components/Form/form.jsx';

import PackageCard from './components/Cards/PackageCard.jsx';
// import SubmitedForm from './components/Form/SubmitedForm.jsx'
// import {useState} from "react";

function App() {



  const handleSubmit = (data) => {
    console.log('Submit:', data)
    axios.post('/api/schedulerequest', data).then((res) => {

      console.log(res);

    }).catch((err) => {

      console.error(err);
    })
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
              <Form handleSubmit={handleSubmit} />

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
                    <Form handleSubmit={handleSubmit} />
                    </div>

                     </div>





                  </div>

                
      </div>

  );
}

export default App;
