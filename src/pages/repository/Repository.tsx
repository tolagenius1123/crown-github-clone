import Navbar from "../../components/Navbar";
import Profile from "../../components/Profile";
import Repos from "../../components/Repos";
import "./Repository.css";

const Repository = () => {
	return (
		<div className="repo">
			<Navbar />
			<div className="content">
				<div className="left">
					<Profile />
				</div>
				<div className="right">
					<Repos />
				</div>
			</div>
		</div>
	);
};

export default Repository;
