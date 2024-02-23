import { RiGitRepositoryLine } from "../assets/icons/icons";
import ReposTab from "./ReposTab";
import { getRepos } from "../redux/features/repoSlice";
import { useEffect, useState } from "react";
import { Repository } from "../types";
import { TailSpin } from "react-loader-spinner";

const Repos = () => {
	const [data, setData] = useState<Repository[]>([]);
	const [searchText, setSearchText] = useState<string>("");
	const [loading, setLoading] = useState(false);

	const getRepoData = async () => {
		setLoading(true);
		try {
			const res = await getRepos();
			console.log(res);
			setData(res);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const handleSearch = (e: React.FormEvent) => {
		const target = e.target as HTMLInputElement;
		setSearchText(target.value);
	};

	const filteredData = data.filter((repo: any) =>
		repo.name.toLowerCase().includes(searchText.toLowerCase())
	);

	useEffect(() => {
		getRepoData();
	}, []);

	return (
		<>
			{loading ? (
				<TailSpin
					color="blue"
					radius={"8px"}
					width="100%"
					height="100px"
				/>
			) : (
				<div>
					<div className="repos">
						<div className="search_bar">
							<input
								onChange={handleSearch}
								className="home_search_input"
								type="text"
								placeholder="Find a repository..."
							/>
							<div className="search_bar_btns">
								<select name="type" id="type">
									<option value="Type">Type</option>
									<option value="All">All</option>
									<option value="Public">Public</option>
									<option value="Private">Private</option>
								</select>
								<select name="language" id="language">
									<option value="language">Language</option>
								</select>
								<select name="sort" id="sort">
									<option value="sort">Sort</option>
								</select>
								<button className="search_bar_btn">
									<span>
										<RiGitRepositoryLine />
										New
									</span>
								</button>
							</div>
						</div>
						<hr />
						{filteredData.map((repo) => (
							<ReposTab key={repo.id} repo={repo} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Repos;
