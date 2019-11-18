import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    constructor(props) {
        super(props);
        this.deleteItem=this.deleteItem.bind(this);
    }
    deleteItem(){
        this.props.deleteItem(this.props.index);
    }
    render() { 
        return ( 
            <li onClick={this.deleteItem}>{this.props.content}</li>
         );
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
}

Item.propTypes={
    index:PropTypes.number
}

export default Item;


