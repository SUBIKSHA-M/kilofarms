import React from 'react';
import './CreateProduct.css';

const CreateProduct = ({ onInputChange, onButtonSubmit }) => {
  return (
  <div>
      <p className='f3'>
        {'Create a product here!'}
      </p>
    <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
        </div>

        <div className='form center pa4 br3 shadow-5'>
             <select id='myselect'>
             <option>Fruits</option>
             <option>Vegetables</option>
             <option>others</option>
             </select>
             <input type="button" onclick="getOption()" value="Create" onChange={onInputChange}/>
        </div>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Create a Product</button>
    </div>
  </div>

  );
}
function getOption() {
  var obj = document.getElementById("myselect");
  document.getElementById("demo").innerHTML = 
  obj.options[obj.selectedIndex].text;
}

export default CreateProduct;
