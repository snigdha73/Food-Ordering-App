import React from "react";

function Checkout(props) 
{
  return (
      <tr>
    <td><img src={props.img}/></td>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td>{props.quant}</td>
    <td>{props.total}</td>
    </tr>
  );
}

export default Checkout;
