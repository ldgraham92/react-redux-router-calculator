import { v4 as uuidv4 } from 'uuid';

const historyReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_CALC_HISTORY':
            const newHistory = {
                id: uuidv4(),
                task: action.payload
            }
            const newCalcHistory = [...state];
            newCalcHistory.push(newHistory);
            return newCalcHistory;

        case 'REMOVE_CALC_HISTORY':
            const updatedCalcHistory = state.filter(
                calcHist => calcHist.id !== action.payload
            );
            return updatedCalcHistory;

        default:
            return state;
    }
}
export default historyReducer;