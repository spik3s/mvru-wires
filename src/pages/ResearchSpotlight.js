import React from "react";
import { Link } from "react-router-dom";
import FindMore from "../components/FindMore";
import PostGrid from "../components/PostGrid";
import CallToAction from "../components/CallToAction";

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
			
			<PostGrid />

			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<button type="button" className="btn btn-secondary">
							Load more...
						</button>
					</div>
				</div>
			</div>

			<div className="container my-5">
				<div className="row">
					<div className="col-12">
						<h3 className="h1">Research Projects</h3>
					</div>
				</div>

				<div className="row justify-content-center my-3">
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
								<p className="card-text">
									<small className="text-muted">
										Research Project
									</small>
								</p>
								<Link to="/">
									<h5 className="card-title">
										Characterization of Plasmodium vivax
										gametocyte and its association with
										mosquito infectivity
									</h5>
								</Link>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-6  mb-4">
						<div className="card h-100">
							<div className="card-body">
								<p className="card-text">
									<small className="text-muted">
										Research Project
									</small>
								</p>
								<Link to="/">
									<h5 className="card-title">
										Transcriptomes and Proteomes of
										Plasmodium vivax
									</h5>
								</Link>
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
							</div>
						</div>
					</div>

					<div className="col-12 text-center mb-5	">
						<button type="button" className="btn btn-secondary">
							Load more...
						</button>
					</div>
				</div>
			</div>

			<CallToAction
				className="my-5"
				text="Explore our long list of publications"
				buttonLabel="See More &raquo;"
				destination="/publications"
			/>

			<hr />
			<FindMore />
		</main>
	);
};

export default ResearchSpotlight;
