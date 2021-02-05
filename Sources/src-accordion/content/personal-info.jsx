import React from "react";
import "./personal-info.css";
const Information = () => {
  return (
    <React.Fragment>
      <div class="accordion-content">
        <fieldset>
          <p>
            <label for="cufc1">
              Name :
              <input type="text" value="" name="Name" id="cufc1" />
            </label>
          </p>
          <p>
            <label for="cufc2">
              Number :
              <input type="text" value="" name="Phone" id="cufc2" />
            </label>
          </p>
          <p>
            <label for="cufc3">
              Email :
              <input type="text" value="" name="Email" id="cufc3" />
            </label>
          </p>
        </fieldset>
      </div>
    </React.Fragment>
  );
};

export default Information;
