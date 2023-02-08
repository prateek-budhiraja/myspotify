import dispatchAction from "../utils/dispatchAction";

export const initialState = {
	user: null,
	playlists: [],
	playlist: {},
	token: null,
	spotify: null,
};

const reducer = (state, action) => {
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

		case dispatchAction.SET_SPOTIFY:
			return {
				...state,
				spotify: action.spotify,
			};
		default:
			return state;
	}
};

export default reducer;
