import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Jumbotron from "../components/Jumbotron";
import CallToAction from "../components/CallToAction";
import PostGrid from "../components/PostGrid";
import CollaboratorsGrid from "../components/CollaboratorsGrid";

const Homepage = props => {
	return (
		<main role="main">
			<Jumbotron
				className="mb-0"
				textAlign="text-center"
				contentAlign="justify-content-md-center"
			>
				<h1 className="display-3">
					<span className="font-weight-bold">Real World</span>{" "}
					Research
				</h1>
				<p>
					This is a template for a simple marketing or informational
					website. It includes a large callout called a jumbotron and
					three supporting pieces of content. Use it as a starting
					point to create something more unique.
				</p>
			</Jumbotron>

			{/* <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Insectary</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
               mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
               mollis euismod. Donec sed odio dui. </p>
                        <p><Link to="/" className="btn btn-secondary" role="button">View details &raquo;</Link></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Archive of Blood</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
               mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
               mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" role="button">View details &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Field Locations</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
               porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
               ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary"  role="button">View details &raquo;</a></p>
                    </div>
                </div>

                <hr />

            </div> */}

			<Jumbotron
				className="mb-0 grad-right"
				textAlign="text-left"
				contentAlign="justify-content-md-start"
			>
				<h2 className="display-4">Access to real samples</h2>
				<p>
					This is a template for a simple marketing or informational
					website. It includes a large callout called a jumbotron and
					three supporting pieces of content. Use it as a starting
					point to create something more unique.
				</p>
				<p>
					<Link
						to="/capacity"
						className="btn btn-primary btn-lg"
						role="button"
					>
						Learn more &raquo;
					</Link>
				</p>
			</Jumbotron>

			<Jumbotron
				className="mb-0 grad-left"
				textAlign="text-right"
				contentAlign="justify-content-md-end"
			>
				<h2 className="display-4">Perfect Simulation</h2>
				<p>
					This is a template for a simple marketing or informational
					website. It includes a large callout called a jumbotron and
					three supporting pieces of content. Use it as a starting
					point to create something more unique.
				</p>
				<p>
					<Link
						to="/"
						className="btn btn-primary btn-lg"
						role="button"
					>
						Learn more &raquo;
					</Link>
				</p>
			</Jumbotron>

			<Jumbotron
				className="grad-right"
				textAlign="text-left"
				contentAlign="justify-content-md-start"
			>
				<h2 className="display-4">Great Lab, experienced Staff</h2>
				<p>
					This is a template for a simple marketing or informational
					website. It includes a large callout called a jumbotron and
					three supporting pieces of content. Use it as a starting
					point to create something more unique.
				</p>
				<p>
					<Link
						to="/"
						className="btn btn-primary btn-lg"
						role="button"
					>
						Learn more &raquo;
					</Link>
				</p>
			</Jumbotron>

			<CallToAction
				className="my-5"
				text="Explore our Capabilities"
				buttonLabel="Learn More &raquo;"
				destination="/capabilities"
			/>

			<PostGrid />

			<CollaboratorsGrid />

            <CallToAction
				className="my-5"
				text="Get in touch!"
				buttonLabel="Learn More &raquo;"
				destination="/contact"
			/>
		</main>
	);
};

export default Homepage;
