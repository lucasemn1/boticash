import { LOAD_USER } from "../actions/user";

export interface IUserReducer {
  name: string;
  email: string;
}

const INITIAL_STATE: IUserReducer = {
  name: "",
  email: "",
};

export default function userReducer(
  state = INITIAL_STATE,
  action: { type: string; payload: IUserReducer }
) {
  switch (action.type) {
    case LOAD_USER:
      return action.payload;
    default:
      return state;
  }
}
