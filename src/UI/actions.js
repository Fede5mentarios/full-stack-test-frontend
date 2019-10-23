import { getPacks } from "../APIs/packs";

export const FETCH_PACKS = "FETCH_PACKS";

export function fetchPacks() {
	return (dispatch, getState) => {
		getPacks().then(packs => {
			dispatch({ type: FETCH_PACKS, payload: packs });
		});
	};
}
 
export function fetchPacks(state = {}, action) {
    switch (action.type) {
        case FETCH_PACKS:
            return Object.assign({}, state, { packs: action.payload })
        default:
            return state 
    }
}