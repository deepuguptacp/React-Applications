import React from "react";
import { Link } from "@reach/router";

const Pet = (props) => {
  return (
    <div>
      <Link to={`/Details`} className="Pet">
        […]
      </Link>
    </div>
  );
};

export default Pet;
