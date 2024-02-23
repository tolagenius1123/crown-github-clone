import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types";

const initialState: User = {
	login: "",
	id: 0,
	node_id: "",
	avatar_url: "",
	gravatar_id: "",
	url: "",
	html_url: "",
	followers_url: "",
	following_url: "",
	gists_url: "",
	starred_url: "",
	subscriptions_url: "",
	organizations_url: "",
	repos_url: "",
	events_url: "",
	received_events_url: "",
	type: "",
	site_admin: false,
	name: "",
	company: null,
	blog: "",
	location: "",
	email: null,
	hireable: null,
	bio: "",
	twitter_username: null,
	public_repos: 0,
	public_gists: 0,
	followers: 0,
	following: 0,
	created_at: "",
	updated_at: "",
};

export const getProfile = async () => {
	const response = await axios.get(import.meta.env.VITE_API_PROFILE_URL);
	return response.data;
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		// updateProfile: (state, action) => {
		// },
	},
});

// export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
