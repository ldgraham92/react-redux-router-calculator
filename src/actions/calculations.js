const addCalcHistory = calcHistory => {
    return{        
        type: 'ADD_NEW_CALC_HISTORY',
        payload: calcHistory
    };
}

const removeCalcHistory = id => {
    return{
        type: 'REMOVE_CALC_HISTORY',
        payload: id
    }
}

export {addCalcHistory, removeCalcHistory};