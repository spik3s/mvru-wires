import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Jumbotron from "../components/Jumbotron";
import CallToAction from "../components/CallToAction";
import PostGrid from "../components/PostGrid";
import CollaboratorsGrid from "../components/CollaboratorsGrid";
import GreyBox from "../components/GreyBox";

const Homepage = props => {
	return (
		<main role="main">
			<Jumbotron
				className="mb-0"
				textAlign="text-center"
				contentAlign="justify-content-md-center"
			>
				<h1 className="display-3">
					<span className="font-weight-bold">
						Statement about what we do
					</span>
				</h1>
			</Jumbotron>

			<CallToAction
				className="my-5"
				text="Talk how capability support brand essence"
				buttonLabel="Explore our capabilities &raquo;"
				destination="/capabilities"
			/>

			<PostGrid />

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
				className="mb-0 mt-5 grad-right"
				textAlign="text-left"
				contentAlign="justify-content-md-start"
			>
				<h2 className="display-4">Benefit 1</h2>
				<p>
					Short text presenting and introducing visitors to the benefits that collaborating with MVRU can bring to their organisation
				</p>
				
			</Jumbotron>

			<Jumbotron
				className="mb-0 grad-left"
				textAlign="text-right"
				contentAlign="justify-content-md-end"
			>
				<h2 className="display-4">Benefit 2</h2>
				<p>
					Short text presenting and introducing visitors to the benefits that collaborating with MVRU can bring to their organisation
				</p>
				
			</Jumbotron>

			<Jumbotron
				className="grad-right"
				textAlign="text-left"
				contentAlign="justify-content-md-start"
			>
				<h2 className="display-4">Benefit 3</h2>
				<p>
					Short text presenting and introducing visitors to the benefits that collaborating with MVRU can bring to their organisation
				</p>
				
			</Jumbotron>

			<CallToAction
				className="my-5"
				text="Get in touch!"
				buttonLabel="Contact us &raquo;"
				destination="/contact"
			/>

			<CollaboratorsGrid title="Funders &amp; Collaborators" count={9} />
		</main>
	);
};

export default Homepage;
