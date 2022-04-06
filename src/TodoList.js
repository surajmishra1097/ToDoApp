import React,{useState} from 'react'
import ToDo from './ToDo';

export default function TodoList() {

    const [inputList,setInputList]=useState("");
    const [Items,setItems]=useState([]);


    const itemEvent=(event)=>{
        setInputList(event.target.value);
        
    };

    const listOfItems=()=>{
      setItems((oldItems)=>{
          return [...oldItems,inputList];
      });
      setInputList("");
    };

    const deleteItems = (id)=>{

        setItems((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
              return index!== id;   
            })
        })
    }

  return (
    <>
      <div className="main_div">
          <div className="center_div">
              <br />
              <h1>ToDo List</h1>
              <br />
              <input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent}/>
              <button onClick={listOfItems}>+</button>

              <ol>
                { Items.map((itemval,index)=>{
                    //  return <li> {itemval}</li>
                   return <ToDo key={index} id={index} text={itemval} onSelect={deleteItems}/>
                 })}
              </ol>
          </div>
      </div>
    </>
  )
}
