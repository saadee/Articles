const initialState = {
	posts: [],
	post: {},
	Tide: {},
	loading: true,
	error: {},
};
export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'GET_POSTS':
			return {
				...state,
				posts: payload,
				loading: false,
			};
		case 'GET_POST':
			return {
				...state,
				post: payload,
				loading: false,
			};
		case 'UPDATE_POST':
			return {
				...state,
				post: payload,
				loading: false,
			};
		case 'UPDATE_DATE':
			// let index;
			// for (let i = 0; i < state.posts.length; i++) {
			//   if (state.posts[i]._id == state.payload._id) {
			//     index = i;
			//   }
			//   state.posts[index] = payload;
			// }
			return {
				...state,
				// posts:state.posts,
				post: payload.post,
				posts: payload.posts,
				loading: false,
			};
		case 'UPDATE_SHOW':
			return {
				...state,
				// posts:state.posts,
				post: payload.post,
				posts: payload.posts,
				loading: false,
			};
		case 'SHOW_VIEWS':
			return {
				...state,
				post: payload.post,
				posts: payload.posts,
				loading: false,
			};
		case 'DELETE_POST':
			return {
				...state,
				posts: payload.posts,
				loading: false,
			};
		case 'ADD_POSTS':
			return {
				...state,
				posts: [...state.posts, payload],
				loading: false,
			};
		case 'POSTS_ERR':
			return {
				...state,
				error: payload,
				loading: false,
			};
		case 'ADD_ARTICLE':
			console.log(payload);
			return {
				...state,
				posts: payload,
				loading: false,
			};
		default:
			return state;
	}
}
