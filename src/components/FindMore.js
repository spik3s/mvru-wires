import React from "react";
import { Link } from "react-router-dom";
import "./FindMore.css";

const FindMore = props => {
	return (
		<div className="container my-5">
			<div className="row ">
				<div className="col-6 mb-4 text-center find-more-item">
					<Link to="/about-us" className="h2">
						<div className="border border-dark find-more-item_inner">
							<b>About Us</b>
						</div>
					</Link>
				</div>
				<div className="col-6 mb-4 text-center find-more-item">
					<Link to="/team" className="h2">
						<div className="border border-dark find-more-item_inner">
							<b>Team</b>
						</div>
					</Link>
				</div>
				<div className="col-6 text-center find-more-item">
					<Link to="/research" className="h2">
						<div className="border border-dark find-more-item_inner">
							<b>Research Spotlight</b>
						</div>
					</Link>
				</div>
				<div className="col-6 text-center find-more-item">
					<Link to="/contact" className="h2">
						<div className="border border-dark find-more-item_inner">
							<b>Contact Us</b>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FindMore;
