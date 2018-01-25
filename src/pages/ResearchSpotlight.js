import React from "react";
import { Link } from "react-router-dom";
import FindMore from "../components/FindMore";

const ResearchSpotlight = props => {
	return (
		<main role="main">
			<div className="jumbotron mb-0">
				<div className="container text-center">
					<div className="row justify-content-center">
						<div className="col-8">
							<h1 className="display-3">Research Spotlight</h1>
							<p>
								This is a template for a simple marketing or
								informational website. It includes a large
								callout called a jumbotron and three supporting
								pieces of content. Use it as a starting point to
								create something more unique.
							</p>
							<p>Success Stories &amp; Past Projets</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container my-5">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="card mb-3">
							<div className="row">
								<div
									className="col-12 col-sm-6 col-md-4"
									style={{
										display: "block",
										backgroundImage:
											"url('http://via.placeholder.com/200x200')",
										backgroundSize: "cover",
										paddingBottom: "33%"
									}}
								/>
								<div className="col-12 col-sm-6 col-md-8">
									<div className="card-body ">
										<h4 className="card-title">
											Success Story
										</h4>
										<p className="card-text">
											This is a wider card with supporting
											text below as a natural lead-in to
											additional content. This content is
											a little bit longer. This is a wider
											card with supporting text below as a
											natural lead-in to additional
											content. This content is a little
											bit longer.
										</p>
										<p className="card-text">
											<small className="text-muted">
												Last updated 3 mins ago
											</small>
										</p>
										<Link
											to="/research/fancy-story"
											className="btn btn-primary float-right"
										>
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="card mb-3">
							<div className="row">
								<div
									className="col-12 col-sm-6 col-md-4"
									style={{
										display: "block",
										backgroundImage:
											"url('http://via.placeholder.com/200x200')",
										backgroundSize: "cover",
										paddingBottom: "33%"
									}}
								/>
								<div className="col-12 col-sm-6 col-md-8">
									<div className="card-body">
										<h4 className="card-title">
											Success Story
										</h4>
										<p className="card-text">
											This is a wider card with supporting
											text below as a natural lead-in to
											additional content. This content is
											a little bit longer. This is a wider
											card with supporting text below as a
											natural lead-in to additional
											content. This content is a little
											bit longer.
										</p>
										<p className="card-text">
											<small className="text-muted">
												Last updated 3 mins ago
											</small>
										</p>
										<Link
											to="/research/fancy-story-2"
											className="btn btn-primary float-right"
										>
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="card mb-3">
							<div className="row">
								<div
									className="col-12 col-sm-6 col-md-4"
									style={{
										display: "block",
										backgroundImage:
											"url('http://via.placeholder.com/200x200')",
										backgroundSize: "cover",
										paddingBottom: "33%"
									}}
								/>
								<div className="col-12 col-sm-6 col-md-8">
									<div className="card-body">
										<h4 className="card-title">
											Success Story
										</h4>
										<p className="card-text">
											This is a wider card with supporting
											text below as a natural lead-in to
											additional content. This content is
											a little bit longer. This is a wider
											card with supporting text below as a
											natural lead-in to additional
											content. This content is a little
											bit longer.
										</p>
										<p className="card-text">
											<small className="text-muted">
												Last updated 3 mins ago
											</small>
										</p>
										<Link
											to="/"
											className="btn btn-primary float-right"
										>
											Read more
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<Link
									to="/research"
									className="btn btn-primary float-right"
								>
									Load more
								</Link>
							</div>
						</div>
					</div>
				</div>

				<hr />
			</div>
			<div className="container my-5">
				<div className="row">
					<div className="col-12">
						<h3 className="display-4">Research Projects</h3>
						<ul className="nav nav-pills">
							<li className="nav-item">
								<Link
									to={{ search: "?sort=ongoing" }}
									className="nav-link active"
								>
									Ongoing
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to={{ search: "?sort=past" }}
									className="nav-link"
								>
									Past
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="row justify-content-center my-3">
					<div className="col-12 col-sm-6 mb-4">
						<div className="card h-100">
							<div className="card-body">
								<Link to="/">
									<h5 className="card-title">
										The development of Invasion inhibition
										assay for vaccine screening of
										Plasmodium vivax
									</h5>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6 mb-4">
						<div className="card h-100">
							<div className="card-body">
								<Link to="/">
									<h5 className="card-title">
										Characterization of Plasmodium vivax
										gametocyte and its association with
										mosquito infectivity
									</h5>
								</Link>
								<p className="card-text">
									Characterization of gametocyte development
									will lead to the discovery of the gametocyte
									markers which relate to...
								</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6  mb-4">
						<div className="card h-100">
							<div className="card-body">
								<Link to="/">
									<h5 className="card-title">
										Transcriptomes and Proteomes of
										Plasmodium vivax
									</h5>
								</Link>
								<p className="card-text">
									This study depict a comprehensive view of
									gene expression of P. vivax blood stage.
									Such information...
								</p>
								<p className="card-text">
									<small className="text-muted">
										Last updated 3 mins ago
									</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6 mb-4">
						<div className="card h-100">
							<div className="card-body">
								<p className="card-text">
									<small className="text-muted">
										Research Project
									</small>
								</p>
								<Link to="/">
									<h5 className="card-title">
										Development of Plasmodium vivax
										gametocyte and its association with
										mosquito infectivity
									</h5>
								</Link>
								<p className="card-text">
									TThe information on P. vivax gametocyte
									development will give a better understanding
									of gametocyte biology and their
									infectiveness to the mosquito, allowing
									future identification of novel candidates
									for transmission blocking vaccines/drugs.
								</p>

								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										Cras justo odio
									</li>
									<li className="list-group-item">
										Dapibus ac facilisis in
									</li>
									<li className="list-group-item">
										Vestibulum at eros
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-12">
						<Link
							to="/research"
							className="btn btn-primary float-right"
						>
							Load more
						</Link>
					</div>
				</div>

				<hr />
			</div>

			<FindMore />
		</main>
	);
};

export default ResearchSpotlight;
