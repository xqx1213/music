
import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM,GET_DATA} from './actionTypes';
const defaultState={
    inputValue:'write something',
    data:[
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}

export default (state=defaultState,action)=>{
    let type=action.type;
    let newState={
        [GET_DATA]:function(){
            let {...newData}=state;  
            newData.data=action.data;  
            return newData    
        },
        [CHANGE_INPUT]:function(){     
            let {...newData}=state;       
            newData.inputValue=action.value;
            return newData
        },
        [ADD_ITEM]:function(){
            let {...newData}=state;    
            newData.data.push(newData.inputValue);
            return newData
        },
        [DEL_ITEM]:function(){
            let {...newData}=state;    
            newData.data.splice(action.index,1);
            return newData    
        }
    }
    return Object.prototype.toString.call(newState[type]).toLowerCase().slice(1,-1)==="object function"?newState[type]():state
}
// export default (state=defaultState,action)=>{

//     switch(action.type){
//         case CHANGE_INPUT:
//             let {...newState}=state;
//             newState.inputValue=action.value;
            
//             return newState
//         case 'addItem':
//             let {...newState1}=state;
//             newState1.data.push(action.value);
//             console.log(newState1)
//             return newState1
//         case 'delItem':
//             let {...newState2}=state;
//             newState2.data.splice(action.value,1)
//             return newState2            
//         default: return state;
//     }
// }


//  5分  30分 12小时  1天 2天 4天 7天 15天