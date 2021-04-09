import { TEST } from "../actions/actionExample";

export interface IReducerExampleState {
  result: boolean;
}

const INITIAL_STATE: IReducerExampleState = {
  result: false,
};

export default function reducerExample(
  state = INITIAL_STATE,
  action: { type: string }
) {
  switch (action.type) {
    case TEST:
      return { ...state, test: true };
    default:
      return state;
  }
}
