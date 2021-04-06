import { combineReducers, createStore } from "redux";

/*
  Example of how to create new reducers
  
  IMPORTANT: 
    * I do not recommend that you delete the example reducer from the project, 
      when you start it, just remove where it is being used in this file. 
*/
import reducerExample, {
  IReducerExampleState,
} from "../reducers/reducerExample";

export interface IState {
  // Enter the reducer status typing here
  example: IReducerExampleState;
}

const reducers = combineReducers({
  // Name and match your reducer to the main
  example: reducerExample,
});

const store = createStore(reducers);

export default store;
