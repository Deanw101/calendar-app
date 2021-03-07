import Datetime from "react-datetime";
import {useState} from "react";

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

function InputField(props) {

  const { id, handleChange, placeholder } = props;
  return (
    <div className="afi FormInput Fifty">
      <input type="text" id={id} onChange={handleChange} placeholder={placeholder}/>
    </div>
  )
}

export default function Form (props) {
  const {handleSubmit} = props;

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
          inputProps={{ placeholder: 'MM/DD/YYYY 00:00 AM/PM'}}
        />
      </div>

      <div className="FormSubmit">
        <button onClick={handleClick}>Submit</button>
      </div>

    </form>

  )

}
