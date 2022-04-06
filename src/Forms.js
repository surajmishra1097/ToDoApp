// import React, { Component } from 'react'

// export default class Forms extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        firstName:"",
//        category:"",
//        aboutYou:"",
//     }
//   }

//   handelSubmit=()=>{
//     alert(JSON.stringify(this.state))
//   }
  
//   render() {
//     return (
//       <div>
//         <form action="" onSubmit={this.handelSubmit}>
//          UserName: <input type="text" value={this.state.firstName} onChange={(event)=>{this.setState({firstName:event.target.value})}}/><br /><br />
//           <select name="" id="" value={this.state.category} onChange={(event)=>{this.setState({category:event.target.value})}}>
//             <option value="select...">Select...</option>
//             <option value="option a">option A</option>
//             <option value="option b">option B</option>
//           </select><br /><br />
//           <textarea name="" id="" cols="30" rows="10" value={this.state.aboutYou} onChange={(event)=>{this.setState({aboutYou:event.target.value})}}>About you</textarea><br /><br />
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     )
//   }
// }
