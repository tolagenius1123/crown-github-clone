import { Repository } from "../types";
import moment from "moment";

interface ReposTabProps {
	repo: Repository;
}

const ReposTab = ({ repo }: ReposTabProps) => {
	const lastUpdated = moment(repo.updated_at).startOf("day").fromNow();

	return (
		<>
			<div className="repo-tab">
				<div className="repo_left">
					<div className="title">
						<h2>{repo.name}</h2>
						<p>{repo.private === false ? "Public" : "Private"}</p>
					</div>
					<p className="description">{repo.description}</p>
					<div className="details">
						<div className="program">
							<div
								className={
									(repo.language === "JavaScript" &&
										"color_js") ||
									(repo.language === "TypeScript" &&
										"color_ts") ||
									"color_others"
								}
							></div>
							<div className="language">{repo.language}</div>
						</div>
						<div className="last_updated">
							Updated {lastUpdated}
						</div>
					</div>
				</div>
				<div className="repo_right">
					<div className="repo_btn">
						<div className="star">
							⭐<div>Star</div>
						</div>
						<div className="star_drop">🔻</div>
					</div>
				</div>
			</div>
			<hr className="repo_hr" />
		</>
	);
};

export default ReposTab;
