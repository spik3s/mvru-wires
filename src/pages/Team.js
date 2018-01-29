import React from "react";
import FindMore from "../components/FindMore";
import CallToAction from "../components/CallToAction";

const Team = props => {
	var itemsLeaders = [];
	for (var i = 0; i < (props.count || 3); i++) {
		itemsLeaders.push(
			<div className="card mb-3" key={"news-"+i}>
				<div className="row">
					<div
						className="col-12 col-sm-6 col-md-3"
						style={{
							display: "block",
							backgroundImage:
								"url('https://via.placeholder.com/200x200')",
							backgroundSize: "cover",
							paddingBottom: "20%"
						}}
					/>
					<div className="col-12 col-sm-6 col-md-9">
						<div className="card-body ">
							<p className="card-text">
								<small className="text-muted">
									Job title or so
								</small>
							</p>

							<h4 className="card-title">Title Name Surname</h4>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer. This is a wider
								card with supporting text below as a natural
								lead-in to additional content. This content is a
								little bit longer.
							</p>
							<p className="card-text">Contact details</p>
							<a href="/" className="card-link">
								Publications
							</a>
							<a href="/" className="card-link">
								Other kind of a link
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	var smallItems = [];
	for (var ix = 0; ix < (props.count || 12); ix++) {
		smallItems.push(
			<div className="col-6 mb-3" key={"card-"+ix}>
				<div className="card ">
					<div className="row">
						<div
							className="col-4"
							style={{
								display: "block",
								backgroundImage:
									"url('https://via.placeholder.com/200x200')",
								backgroundSize: "cover",
								paddingBottom: "20%"
							}}
						/>
						<div className="col-8">
							<div className="card-body ">
								<p className="card-text">
									<small className="text-muted">
										Job title or so
									</small>
								</p>
	
								<h4 className="card-title">Title Name Surname</h4>
								<p className="card-text">
									This is a wider card with supporting text below
									as a natural lead-in to additional content. This
									content is a little bit longer. This is a wider
									card with supporting text below as a natural
									lead-in to additional content. This content is a
									little bit longer.
								</p>
								<p className="card-text">Contact details</p>
								<a href="/" className="card-link">
									Publications
								</a>
								<a href="/" className="card-link">
									Other kind of a link
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<main role="main">
			<div className="jumbotron mb-0">
				<div className="container text-center">
					<div className="row justify-content-center">
						<div className="col-8">
							<h1 className="display-3">Team</h1>
							<p>
								This is a template for a simple marketing or
								informational website. It includes a large
								callout called a jumbotron and three supporting
								pieces of content. Use it as a starting point to
								create something more unique.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container my-3">
				<div className="row">
					<div className="col">
						<ul className="nav nav-pills  nav-fill">
							<li className="nav-item">
								<a className="nav-link active" href="#leaders">
									Team Leaders
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#second">
									Second Group
								</a>
							</li>
							<li className="nav-item disabled">
								<a className="nav-link disabled" href="#third">
									Third Group
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container my-5">
				<div className="row" id="leaders">
					<div className="col-12">
						<h2>Team Leaders</h2>
					</div>

					<div className="container my-5">
						<div className="row justify-content-center">
							<div className="col-12">{itemsLeaders}</div>
						</div>

						<hr />
					</div>
				</div>
				<a id="second"></a>
				<div className="row">
					<div className="col-12">
						<h2>Second Group</h2>
					</div>
					{smallItems}
				</div>

				<hr />
			</div>
			<CallToAction
				className="my-5"
				text="Work with us"
				buttonLabel="Learn More &raquo;"
				destination="/careers"
			/>
			<FindMore />
		</main>
	);
};

export default Team;
