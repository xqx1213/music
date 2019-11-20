import React from 'react';
import {Input ,Button,List} from 'antd';
const TodoListUI=(props)=>{
    return ( 
        <div>
            <Input placeholder={props.inputValue} style={{width:"250px"}} onChange={props.changeValue}/>
            <Button type='primary' onClick={props.hanldButton}>增加</Button>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.data}
                    renderItem={(item,index)=>(<List.Item onClick={props.delItem.bind(this,index)}>{item}</List.Item>)}
                />    
            </div>
        </div>
     );
}
export default TodoListUI;