import React, { Fragment } from "react";

const HandleSubmit = (e) => {
  e.preventDefault();
};

const Auth = () => {
  return (
    <Fragment>
      <form onSubmit={HandleSubmit}>
        <div>
          <label>Nome do Usuario</label>
          <input type="text" required />
        </div>

        <div>
          <label>Palavra-Passe</label>
          <input type="password" minLength="8" required />
        </div>
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Auth;
