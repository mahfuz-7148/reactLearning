import React from "react";

const KeyData = ({keyData}) => {

    const {name, email, phone, website} = keyData

  // const style = {
  //   textAlign: "center",
  //   fontSize: "30px",
  //   color: "green",
  //   padding: "30px",
  // };
  return (
    <div className="border-2 border-orange-600 p-5">
      <h1 className="text-3xl">Name: {name} </h1>
      <h1 className="text-2xl">Email: {email} </h1>
      <h1 className="text-2xl">Phone: {phone} </h1>
      <h1 className="text-2xl">Website: {website} </h1>
    </div>
  );
};

export default KeyData;