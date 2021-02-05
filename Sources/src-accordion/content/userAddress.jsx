import React from "react";
const Address = () => {
  return (
    <React.Fragment>
      <div class="accordion-content">
        <fieldset>
          <p>
            <label for="cufc4">
              Vill :
              <input type="text" value="" name="Name" id="cufc4" />
            </label>
          </p>
          <p>
            <label for="cufc5">
              Distt :
              <input type="text" value="" name="Name" id="cufc5" />
            </label>
          </p>
          <p>
            <label for="cufc6">
              PinCode :
              <input type="text" value="" name="Number" id="cufc6" />
            </label>
          </p>
        </fieldset>
      </div>
    </React.Fragment>
  );
};

export default Address;
