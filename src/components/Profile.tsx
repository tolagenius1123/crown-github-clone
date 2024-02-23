import { useEffect, useState } from "react";
import "./reusables.css";
import { getProfile } from "../redux/features/profileSlice";
import { User } from "../types";
import rocket from "../assets/images/rocketdab.png";
import {
	BiBuildingHouse,
	BiLink,
	GoLocation,
	BsClock,
	BsPeople,
} from "../assets/icons/icons";

const Profile = () => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [profile, setProfile] = useState<User>(() => {
		const user = localStorage.getItem("user");
		return user ? JSON.parse(user) : {};
	});

	const [editedProfile, setEditedProfile] = useState<User>({
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
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setProfile(editedProfile);

		localStorage.setItem("user", JSON.stringify(editedProfile));

		setIsEditing(false);
	};

	const handleChange = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target as
			| HTMLInputElement
			| HTMLTextAreaElement;
		setEditedProfile((prevProfile: any) => ({
			...prevProfile,
			[name]: value,
		}));
	};

	const getProfileData = async () => {
		try {
			const res = await getProfile();

			const user = localStorage.getItem("user");
			const userData: User = user ? JSON.parse(user) : null;

			if (!userData) {
				setProfile(res);
				localStorage.setItem("user", JSON.stringify(res));
			} else {
				setProfile(userData);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const time = new Date();
	const currentTime = `${time.getHours()}:${time.getMinutes()}`;

	useEffect(() => {
		getProfileData();
		const user = localStorage.getItem("user");
		const userData: User = user ? JSON.parse(user) : null;
		console.log(userData);
		setEditedProfile(userData);
	}, []);

	return (
		<div className="profile">
			<div className="profile-pic">
				<img
					src={profile?.avatar_url ? profile.avatar_url : rocket}
					// src={rocket}
					alt="profile_picture"
				/>
			</div>
			{isEditing ? (
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						onChange={handleChange}
						value={editedProfile?.name}
					/>
					<label htmlFor="bio">Bio</label>
					<textarea
						name="bio"
						id="bio"
						cols={30}
						rows={4}
						onChange={handleChange}
						value={editedProfile?.bio}
					></textarea>
					<div className="form_field">
						<label htmlFor="company">
							<BiBuildingHouse />
						</label>
						<input
							type="text"
							id="company"
							name="company"
							onChange={handleChange}
							value={editedProfile?.company ?? ""}
						/>
					</div>
					<div className="form_field">
						<label htmlFor="location">
							<GoLocation />
						</label>
						<input
							type="text"
							id="location"
							name="location"
							onChange={handleChange}
							value={editedProfile?.location}
						/>
					</div>
					<div className="form_field">
						<label htmlFor="blog">
							<BiLink />
						</label>
						<input
							type="text"
							id="blog"
							name="blog"
							onChange={handleChange}
							value={editedProfile?.blog}
						/>
					</div>
					<div className="form_btns">
						<button id="save" type="submit">
							Save
						</button>
						<button id="cancel" onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</div>
				</form>
			) : (
				<div className="profile-info">
					<div className="fullname">{profile?.name}</div>
					<div className="username">{profile?.login} . he/him</div>
					<div className="title">{profile?.bio}</div>
					<button
						className="edit_profile_btn"
						onClick={() => setIsEditing(true)}
					>
						Edit profile
					</button>
					<div className="statistics">
						<div className="followers">
							<BsPeople />
							{profile?.followers} followers
						</div>
						<div className="following">
							.{profile?.following} following
						</div>
					</div>
					<div className="other_info">
						<p className="address">
							<BiBuildingHouse />
							{profile?.company}
						</p>
						<p className="state">
							<GoLocation />
							{profile?.location}
						</p>
						<p className="time_zone">
							<BsClock />
							time
							{currentTime}(UTC + 01:00)
						</p>
						<p className="website">
							<BiLink />
							<a href="">{profile?.blog}</a>
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
