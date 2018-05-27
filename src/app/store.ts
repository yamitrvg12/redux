import { INCREMENT } from 'app/actions';
import { tassign } from 'tassign';

export interface IAppState {
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
}

export function rootReducer(state: IAppState, action):IAppState {
    switch (action.type) {
        case INCREMENT: 
            return tassign(state, { counter: state.counter + 1 });

    }
    return state;
}