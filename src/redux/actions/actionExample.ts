import { IReducerExampleState } from "../reducers/reducerExample";

export const TEST = "TEST";

export function test(data: IReducerExampleState) {
  return {
    type: TEST,
    payload: data
  }
}
