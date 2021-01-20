import Datetime from "react-datetime";

export default function SubmitedForm (props) {

  return (
    <form>
    <span className="FormText">Your Details</span>
    <div className="afi FormInput Fifty">
      <input type="text" id="fname" placeholder="First Name"/>
    </div>

    <div className="afi FormInput Fifty">
      <input type="text" id="lname" placeholder="Last Name"/>
    </div>

    <div className="afi FormInput">
      <input type="text" id="root_phone" placeholder="Phone Number"/>
    </div>

    <span className="FormText">Shoot Location</span>

    <div className="afi FormInput">
      <input type="text" id="street_number" placeholder="Address"/>
    </div>

    <div className="afi FormInput">
      <input type="text" id="city" placeholder="City"/>
    </div>

    <div className="afi FormInput">
      <input type="text FormInput" id="state" placeholder="State"/>
    </div>

    <div className="afi FormInput">
      <input type="text" id="postal_code" placeholder="Postal Code"/>
    </div>
    <span className="FormText">Shoot Date and Time</span>

    <div className="FormInput">
    <Datetime
    inputProps={{ placeholder: 'MM/DD/YYYY 00:00 AM/PM'}}
     />
    </div>

    <div className="FormSubmit">
      <button >Submit</button>
      <button className="backTo">Back to Bookings</button>
    </div>
    <span className="FormTextSubmitted">Your shoot has been booked!</span>

    </form>
  )

}
