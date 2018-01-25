import React from "react";
import { Link } from "react-router-dom";

const CallToAction = props => {
	return (
		<div className={"container text-center " + props.className}>
			<div className="row justify-content-center align-content-center">
				<div className="col-8 col-xl-6 d-flex align-items-center justify-content-around">
					<span className="h3">{props.text}</span>

					<Link
						to={props.destination}
						className="btn btn-primary btn-lg"
						role="button"
					>
						{props.buttonLabel}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CallToAction;
