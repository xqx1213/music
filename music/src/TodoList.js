import React, { Component } from 'react';
import axios from 'axios';
import store from './store/';
import {changeInputAction,addItemAction,delItemAction,getDataAction} from './store/actions';

import TodoListUI from'./TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeValue=this.changeValue.bind(this);
        this.storeChage=this.storeChage.bind(this);
        this.hanldButton=this.hanldButton.bind(this);
        this.delItem=this.delItem.bind(this);
        store.subscribe(this.storeChage);
    }
    changeValue(e){
        const action=changeInputAction(e.target.value);
        store.dispatch(action);
    }
    storeChage(){
        this.setState(store.getState());
    }
    hanldButton(){
        const action=addItemAction();
        store.dispatch(action);
    }
    delItem(index){
        const action=delItemAction(index);
        store.dispatch(action);
    }
    componentDidMount(){
        
        axios.get('http://localhost:4000/dj/program?rid=336355127')
        .then((res)=>{
            debugger
            if(res.status===200){          
                let list=res.data.programs.map((item)=>{
                    return item.name
                })      
                let action=getDataAction(list)
                store.dispatch(action)                
            }
            console.log(res)

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() { 
        return ( 
            <TodoListUI
                data={this.state.data}
                inputValue={this.state.inputValue}
                changeValue={this.changeValue}
                hanldButton={this.hanldButton}
                delItem={this.delItem}
            />
         );
    }
}
 
export default TodoList;