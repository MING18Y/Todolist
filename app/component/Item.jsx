import React from 'react';
import ReactDom from 'react-dom';
import "../style/item.css";
import "../style/background.css";

export default class Item extends React.Component{
  constructor(props){
      super(props);

      this.deleteTask=this.deleteTask.bind(this);
      this.checkedTask=this.checkedTask.bind(this);

  }
  deleteTask(){
    console.log("called Item deleteTask(){}")
    this.props.deleteTask(this.props.id);
  }
  checkedTask(){
    console.log("called Item checkedTask(){}")
    this.props.checkedTask(this.props.id);
  }
  render(){
      const finish = {
          backgroundColor:'#98FB98',
          color:'green',
          width:'80%',
          height:'150px',
          margin:'5px auto',
          fontSize:'40px',
          lineHeight: '150px',
          paddingLeft:'50px',
          borderRadius:'10px'
      }
      const unfinish ={
          backgroundColor:'white',
          width:'80%',
          height:'150px',
          margin:'5px auto',
          fontSize:'40px',
          lineHeight: '150px',
          paddingLeft:'50px',
          borderRadius:'10px'
      }
      var itemStyle =this.props.status === 0 ? unfinish:finish;
      return(
          <li>
              <div  style={itemStyle}>
                  <div className="itemLabel">{this.props.name}</div>
                  <div className="buttonGroup">
                      {/* <ButtonGroup /> */}
                      <div className="button button1" onClick={this.checkedTask}>✔</div>
                      <div className="button button2" onClick={this.deleteTask}>✖</div>
                  </div>
              </div> 
          </li>
      )
  }
}