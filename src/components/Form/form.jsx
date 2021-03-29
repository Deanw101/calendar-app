import Datetime from "react-datetime";
import {useState} from "react";

const defaultState = {
  fname: "",
  lname: "",
  root_phone: "",
  email: "",
  street_number: "",
  city: "",
  state: "",
  postal_code: "",
  datetime: "",
}

function InputField(props) {

  const { id, handleChange, placeholder, type } = props;
  return (
    <div className="afi FormInput Fifty">
      <input type={type ? type : "text"} id={id} onChange={handleChange} placeholder={placeholder}/>
    </div>
  )
}

export default function Form (props) {
  const {handleSubmit} = props;

  const [state, setState] = useState (defaultState);
    const [showSuccess, setShowSuccess] = useState (false);

  const handleChange = (event) => {
    setState ({
      ...state,
      [event.target.id]: event.target.value,
    })
  }

  const handleClick = (event) => {
    event.preventDefault ()
    setShowSuccess (true)
    handleSubmit (state)
  }

  const handleDate= (datetime) => {
    console.log(datetime);
    setState({
      ...state,
      datetime: datetime.toDate(),
    })
  }

  return (
    <form>
      <span className="FormText">Your Details</span>

      <InputField
        id="fname"
        handleChange={handleChange}
        placeholder="First Name"
      />
      <InputField
        id="lname"
        handleChange={handleChange}
        placeholder="Last Name"
      />
      <InputField
        id="root_phone"
        handleChange={handleChange}
        placeholder="Phone Number"
      />
      <InputField
        id="email"
        handleChange={handleChange}
        placeholder="Email"
        type="email"
      />

      <span className="FormText">Shoot Location</span>

      <InputField
        id="street_number"
        handleChange={handleChange}
        placeholder="Address"
      />
      <InputField
        id="city"
        handleChange={handleChange}
        placeholder="City"
      />
      <InputField
        id="state"
        handleChange={handleChange}
        placeholder="State"
      />
      <InputField
        id="postal_code"
        handleChange={handleChange}
        placeholder="Zip Code"
      />

      <span className="FormText">Shoot Date and Time</span>

      <div className="FormInput">
        <Datetime
          onChange={handleDate}
          inputProps={{ placeholder: 'MM/DD/YYYY 00:00 AM/PM'}}
        />
      </div>

      <div className="FormSubmit">
        <button type="submit" onClick={handleClick}>Submit</button>
      </div>

      {showSuccess && <span className="FormTextSubmitted">Your shoot has been booked!</span>}
      {showSuccess && <button className="backTo" onClick={(e) => window.open('https://deanwithers.com/bookings.html', '_self')}>
      Back to Bookings
      </button>}


    </form>

  )

}
