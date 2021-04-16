import React from "react";

function Item(props) {
  return (
      <tr>
    <td><img src={props.img}/></td>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td><input type="number" defaultValue="1" min="1" id={props.id}></input></td>
    <td><input type="checkbox" id={props.name}></input></td>
    </tr>
  );
}

export default Item;
