import React from 'react';
import ReactDom from 'react-dom';

import "./style/item.css";
import "./style/background.css";

import ItemList from "./component/ItemList.jsx"



class Square extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            newitem:'',
            list: [{
                id: new Date(),
                name: '吃饭',
                status: 0
            }, {
                id: new Date()+1,
                name: '睡觉',
                status: 0
            }, {
                id: new Date()+2,
                name: '喝水',
                status : 0
            }]
        }

        this.saveItem = this.saveItem.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
        this.handleTaskChecked =this.handleTaskChecked.bind(this);
    }
    saveItem(e){
        e.preventDefault()
        let element = ReactDom.findDOMNode(this.refs.taskInput);
        let task = element.value;
        if(!task){
            console.log("检测到todo内容为空");
        }else{
            //todo method..
            let taskObj = {
                id:new Date(),
                name:task,
                status:0,
            }
            let newList = this.state.list;
            newList.push(taskObj)
            this.setState({
                taskObj:taskObj,
                list:newList
            })
            element.value="";
            // this.props.saveItem(taskObj);

        }
        console.log("save item clicked")
    }
    handleTaskDelete(taskId){
        let list = this.state.list;
        list = list.filter(item => item.id !== taskId)
        this.setState({list})
        console.log("handleTaskDelete taskId:",taskId);
        console.log("this.handleTaskDelete");
    }
    handleTaskChecked(taskId){
        // console.log("this.state.list handletaskchecked",this.state.list[0].name)
        let list = this.state.list;
        for(let item of list){
            if(item.id === taskId){
                item.status = item.status === 1 ? 0 : 1 
            }
        }
        this.setState({list:list});
        console.log("handleTaskChecked this.list",this.state.list);
    }

    render(){
        return(
            <div className="square">
                
                <div className="label">To do :</div>
                <ItemList itemList={this.state.list} 
                          deleteTaskRoot={this.handleTaskDelete} 
                          checkedTaskRoot={this.handleTaskChecked}/>
                <div className="label">Task</div>
                <div className="taskInput">
                <input type="text" ref="taskInput" placeholder="What do you need to do?"/>
                </div>
                <div className="saveButton" onClick={this.saveItem}>Save</div>
                
            </div>
        )
    }
}
main();
function main() {
    ReactDom.render(<Square />, document.getElementById('app'));
}