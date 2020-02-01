import {
	SAVE_POSITIONS,
	GET_POSITIONS,
	RESET_POSITIONS
} from './actions'

import { defaultState } from './data/defaultState'

function LayoutApp(state = defaultState, action) {
    switch (action.type) {
        case SAVE_POSITIONS: {
            return {
                ...state,
                layout: action.layout
            };
        }
        case GET_POSITIONS: {
            return {
                ...state,
                layout: action.layout
            };
        }

        case RESET_POSITIONS: {
            console.log('state=', state)
            console.log('actions=', action)
            return {
                
            };
        }

        default: {
            return state;
        }
    }
}

export default LayoutApp;