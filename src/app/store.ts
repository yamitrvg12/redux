export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
}

export function rootReducer(state: IAppState, action):IAppState {
    return state;
}