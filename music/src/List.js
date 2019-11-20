import React, { Component } from 'react';
import {List} from 'antd';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <List
                bordered
                dataSource={this.props.data}
                renderItem={item=>(<List.Item>{item}</List.Item>)}
            />  
         );
    }
}
 
export default Lists;