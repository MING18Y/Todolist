import React from 'react';
import ReactDom from 'react-dom';

import "../style/item.css";
import "../style/background.css";

import Item from "./Item.jsx";

export default class ItemList extends React.Component{
  constructor(props){
      super(props);
  }
  render(){
      return(
        <div className="container">
          <ul>
              {
                this.props.itemList.map((itemlist)=>{
                    return(
                        <Item id={itemlist.id}
                          key={itemlist.id}
                          name={itemlist.name}
                          status={itemlist.status}
                          deleteTask={this.props.deleteTaskRoot}  
                          checkedTask={this.props.checkedTaskRoot}/>
                    )
                })
              }
          </ul>
        </div>
      )
  }
}