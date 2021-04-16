import Items from './Items';
import './App.css';
import Item from './Item';
import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './checkOut';

var idl=[];
var quantity=[];
var amt =0;


function Check(){
  return (
      <div className="App">
      <h1>
       Billing
      </h1><br/>
      <form>
  <table class="table">
  
    <thead class="thead-dark">
      <tr>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">quantity</th>
        <th scope="col">Amount</th>
  
      </tr>
    </thead>
    <tbody>
    {idl.map(function(i,index){
  return (
    <Checkout 
    key= {Items[i].key}
    img= {Items[i].img}
    name= {Items[i].name}
    price={Items[i].price}
    quant={quantity[index]}
    total={Items[i].price*quantity[index]}
    />
  );
})}
  </tbody>
      <tr>
        <th scope="col">Total</th>
        <th scope="col"></th>
        <th scope="col">{amt}</th>
        <th scope="col"></th>
        <th scope="col"><button class="btn btn-success" >Pay</button></th>
  
      </tr>
  
  </table>
  </form>
      </div>
  );
  
    }



function goto(){

  var i=0;
 for(i=0;i<Items.length;i++){
var check = document.getElementById(Items[i].name);
var quant = document.getElementById(Items[i].key).value;

  if(check.checked === true){
    console.log(Items[i].name);
    idl.push(i);
    quantity.push(quant);
    amt = amt + Items[i].price*quant;
  }
  
 }
ReactDOM.render(<Check/>, document.getElementById('root'));

}


function App() {

  return (
    <div className="App">
    <h1>
     Food App Menu
    </h1><br/>
    <form>
<table class="table">

  <thead class="thead-dark">
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">quantity</th>
      <th scope="col">Add Item</th>

    </tr>
  </thead>
  <tbody>
{Items.map(function(NewItem){
  return (
    <Item 
    id= {NewItem.key}
    img= {NewItem.img}
    name= {NewItem.name}
    price={NewItem.price}
    />
  );
})}
</tbody>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"><button class="btn btn-success" onClick={goto}>Check Out</button></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>

</table>
</form>
    </div>
  );
}
export default App;
