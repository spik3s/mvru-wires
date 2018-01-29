import React from "react";

const CollaboratorsGrid = props => {
	var items = [];
	for (var i = 0; i < (props.count || 8); i++) {
		items.push(
			<div
				key={"collabGrid-" + i}
				className="col-6 col-sm-4 col-md-3 col-lg-2"
			>
				<img
					src="https://via.placeholder.com/200x100"
					alt={"Collaborator " + (i + 1)}
					className="img-thumbnail m-md-3 my-3"
				/>
			</div>
		);
	}
	return (
		<div className={"container my-5 " + props.className}>
			<div className="row">
				<div className="col-12 mb-3 text-center">
					<h3>{props.title || "Our Collaborators"}</h3>
				</div>
			</div>
			<div className="row justify-content-center">
				{items}

			</div>
		</div>
	);
};

export default CollaboratorsGrid;
