import dispatchAction from "../utils/dispatchAction";

export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token: null,
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case dispatchAction.SET_USER:
			return {
				...state,
				user: action.user,
			};
		case dispatchAction.SET_TOKEN:
			return {
				...state,
				token: action.token,
			};
		case dispatchAction.SET_PLAYLISTS:
			return {
				...state,
				playlists: action.playlists,
			};
		default:
			return state;
	}
};

export default reducer;
