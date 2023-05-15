import React from "react";
import CustomButton from "../CustomButton";

import { CustomForm } from "./StyledComponents";

function Form() {
  return (
    <CustomForm>
      <h3>FREE NO OBLIGATION ESTIMATE</h3>
      <span htmlFor="firstNameFeild">
        First Name<span>*</span>
      </span>
      <input type="text" id="firstNameameFeils" required />

      <span htmlFor="lastNameFeild">
        Last Name<span>*</span>
      </span>
      <input type="text" id="lastNameFeild" required />

      <span htmlFor="emailFeild">
        Email Address<span>*</span>
      </span>
      <input type="email" id="emailFeild" required />

      <span htmlFor="phoneFeild">
        Phone Number<span>*</span>
      </span>
      <input type="tel" id="phoneFeils" required />

      <span htmlFor="zipFeild">
        Zip<span>*</span>
      </span>
      <input type="zip" id="zipFeils" required />
      <div className="">
        <input type="checkbox" required />
        <p className="form-terms-p">
          I am interested in learning more about possibly having LeafGuard on my
          home. By submitting this form, I agree to hear about LeafGuard
          products and sales. I understand that LeafGuard may use an auto-dial
          phone system, text or email messages to communicate with me about a
          free estimate and new products or services I may be interested in. I
          can be reached at any of the telephone numbers or emails I have
          provided above. I understand I do not need to sign or submit this
          approval in order for me to obtain a free estimate from LeafGuard, I
          can always call 1.800.LeafGuard
        </p>
      </div>
      <CustomButton text="I Agree" fillParent />
    </CustomForm>
  );
}

export default Form;
