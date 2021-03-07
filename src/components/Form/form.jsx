import Datetime from "react-datetime";
import {useState} from "react";

export default function Form (props) {
  const {handleSubmit} = props
  const defaultState = {
    fname: "",
    lname: "",
    root_phone: "",
    street_number: "",
    city: "",
    state: "",
    postal_code: "",
    datetime: "",
  }

  const [state, setState] = useState (defaultState);

  const handleChange = (event) => {
    setState ({
      ...state,
      [event.target.id]: event.target.value,
    })
  }

const handleClick = (event) => {
event.preventDefault ()
handleSubmit (state)
}


  return (
    <form>
    <span className="FormText">Your Details</span>
    <div className="afi FormInput Fifty">
      <input type="text" id="fname" onChange={handleChange} placeholder="First Name"/>
    </div>

    <div className="afi FormInput Fifty">
      <input type="text" id="lname" onChange={handleChange} placeholder="Last Name"/>
    </div>

    <div className="afi FormInput">
      <input type="text" id="root_phone" onChange={handleChange} placeholder="Phone Number"/>
    </div>

    <span className="FormText">Shoot Location</span>

    <div className="afi FormInput">
      <input type="text" id="street_number" onChange={handleChange} placeholder="Address"/>
    </div>

    <div className="afi FormInput">
      <input type="text" id="city" onChange={handleChange} placeholder="City"/>
    </div>

    <div className="afi FormInput">
      <input type="text FormInput" id="state" onChange={handleChange} placeholder="State"/>
    </div>

    <div className="afi FormInput">
      <input type="text" id="postal_code" onChange={handleChange} placeholder="Postal Code"/>
    </div>
    <span className="FormText">Shoot Date and Time</span>

    <div className="FormInput">
    <Datetime
    inputProps={{ placeholder: 'MM/DD/YYYY 00:00 AM/PM'}}
     />
    </div>

    <div className="FormSubmit">
      <button onClick={handleClick}>Submit</button>
    </div>

    </form>
  )

}
