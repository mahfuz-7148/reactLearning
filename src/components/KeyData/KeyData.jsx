import React from "react";

const KeyData = ({keyData}) => {

    const {name, email, phone, website} = keyData

  const style = {
    textAlign: "center",
    fontSize: "30px",
    color: "green",
    padding: "30px",
  };
  return (
    <div>
      <h1 style={style}>Name: {name} </h1>
      <h1 style={style}>Email: {email} </h1>
      <h1 style={style}>Phone: {phone} </h1>
      <h1 style={style}>Website: {website} </h1>
    </div>
  );
};

export default KeyData;