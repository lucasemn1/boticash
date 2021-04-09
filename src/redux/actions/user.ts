import { IUserReducer } from "../reducers/user";

export const LOAD_USER = "LOAD_USER";

export function loadUser(userData: IUserReducer) {
  return {
    type: LOAD_USER,
    payload: userData
  }
}
