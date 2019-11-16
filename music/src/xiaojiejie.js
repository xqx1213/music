import React, { Component } from 'react';
import Item from './Item';
class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue:'',
            list:["头部按摩","精油推背"]
         }
         this.handleChange=this.handleChange.bind(this);
         this.handleButton=this.handleButton.bind(this);
         this.handleClick=this.handleClick.bind(this);
    }
    handleChange(e){
        let value=e.target.value;
        if(value!==''){
            this.setState({
                inputValue:e.target.value
            })
        }        
    }
    handleButton(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    handleClick(index){
        let list=this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }  
    render() { 
        return ( 
            <div>
                <div><input value={this.inputValue} onChange={this.handleChange} /> <button onClick={this.handleButton}> 增加服务 </button></div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <Item key={"list_"+index} content={item} index={index} deleteItem={this.handleClick} />
                        })
                    }
                </ul> 
            </div>
         );
    }
}
export default Xiaojiejie;