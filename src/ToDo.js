import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
export default function ToDo(props) {

//   const deleteItems = ()=>{

//   }

  return (
    <>
     <div className="todo_style">
         {/* <i className="fa fa-times" aria-hidden="true" onClick={()=>{
             props.onSelect(props.id)
         }}/> */}
         <CancelIcon className="fa fa-times" onClick={()=>{
             props.onSelect(props.id)
         }}/>
         
         
         <li>{props.text}</li>
         </div> 

    </>
  )
}
