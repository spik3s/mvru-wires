import React from "react";


const Jumbotron = props => {
	return (
		<div className={"jumbotron " + props.className}>
			<div className={"container " + (props.textAlign || "text-center")}>
				<div className={"row " + (props.contentAlign || "justify-content-md-center")}>
					<div className="col-6">
            {props.children}
          </div>
				</div>
			</div>
		</div>
	);
};

export default Jumbotron;
