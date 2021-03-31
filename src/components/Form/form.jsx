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

  const { id, handleChange, placeholder, type, required} = props;
  return (
    <div className="afi FormInput Fifty">
      <input type={type ? type : "text"} id={id} onChange={handleChange} placeholder={placeholder} required={required}/>
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
    <form onSubmit={handleClick}>
      <span className="FormText">Your Details</span>

      <InputField
        id="fname"
        handleChange={handleChange}
        placeholder="First Name"
        required
      />
      <InputField
        id="lname"
        handleChange={handleChange}
        placeholder="Last Name"
        required
      />
      <InputField
        id="root_phone"
        handleChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <InputField
        id="email"
        handleChange={handleChange}
        placeholder="Email"
        type="email"
        required
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
      <div className="row clearb">

      <div className="FormSubmit">
        <button type="submit">Submit</button>
      </div>

      {showSuccess &&
         <div className="FormReturn ml-auto">
         <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://deanwithers.com/bookings.html';
      }}
> Return to Bookings</button>
  </div> }
</div>
     <div className="">
{showSuccess && <span className="FormTextSubmitted">Your shoot has been booked!</span>}
    </div>


    </form>

  )

}
