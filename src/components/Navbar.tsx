import { useState } from "react";
import "./reusables.css";
import { FiMenu, FiPackage, FiInbox } from "react-icons/fi";
import { FaGithub, FaSearch, FaGreaterThan } from "react-icons/fa";
import { BsBook, BsPlusLg } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoProject, GoGitPullRequest } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { VscIssues } from "react-icons/vsc";
import { User } from "../types";

const Navbar = () => {
	const [tab, setTab] = useState<number>(2);

	const user = localStorage.getItem("user");
	const userData: User = user ? JSON.parse(user) : null;

	return (
		<div className="nav">
			<div className="top-nav">
				<div className="top-left">
					<div className="ham-container">
						<FiMenu className="harmburger-menu" />
					</div>
					<FaGithub className="github-icon" />
					<div className="username">
						<p>tolagenius1123</p>
					</div>
				</div>
				<div className="top-right">
					<div className="search">
						<FaSearch className="search-icon" />
						<input type="text" placeholder="Type to search" />
						<div className="vertical-line"></div>
						<FaGreaterThan className="greater-icon" />
					</div>
					<div className="vertical-line"></div>
					<div className="drop_down">
						<BsPlusLg className="plus_sign" />
						<IoMdArrowDropdown className="arrow_down" />
					</div>
					<div className="drop_down">
						<VscIssues className="issues" />
					</div>
					<div className="drop_down">
						<GoGitPullRequest className="pull-request" />
					</div>
					<div className="drop_down">
						<FiInbox className="inbox" />
					</div>
					<div className="pic">
						<img src={userData.avatar_url} alt="profile-pic" />
					</div>
				</div>
			</div>
			<div className="tabs_bar">
				<div className="tabs">
					<div
						className={tab === 1 ? "tab_select" : "tab"}
						onClick={() => setTab(1)}
					>
						<BsBook
							className={
								tab === 1 ? "tab_icon_select" : "tab_icon"
							}
						/>
						<p>Overview</p>
					</div>
					<div
						className={tab === 2 ? "tab_select" : "tab"}
						onClick={() => setTab(2)}
					>
						<RiGitRepositoryLine
							className={
								tab === 2 ? "tab_icon_select" : "tab_icon"
							}
						/>
						<p>Repositories</p>
						<span>2</span>
					</div>
					<div
						className={tab === 3 ? "tab_select" : "tab"}
						onClick={() => setTab(3)}
					>
						<GoProject
							className={
								tab === 3 ? "tab_icon_select" : "tab_icon"
							}
						/>
						<p>Projects</p>
					</div>
					<div
						className={tab === 4 ? "tab_select" : "tab"}
						onClick={() => setTab(4)}
					>
						<FiPackage
							className={
								tab === 4 ? "tab_icon_select" : "tab_icon"
							}
						/>
						<p>Packages</p>
					</div>
					<div
						className={tab === 5 ? "tab_select" : "tab"}
						onClick={() => setTab(5)}
					>
						<AiOutlineStar
							className={
								tab === 5 ? "tab_icon_select" : "tab_icon"
							}
						/>
						<p>Stars</p>
						<span>5</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
