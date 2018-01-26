import React from "react";
import { Link } from "react-router-dom";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const Contact = props => {
	return (
		<main role="main">
			<div className="jumbotron mb-0">
				<div className="container text-center">
					<div className="row justify-content-center">
						<div className="col-8">
							<h1 className="display-3">Contact</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="container my-5">
				<div className="row justify-content-between">
					<div className="col-8">
						<h2>Get in touch with us</h2>
						<p>
							<strong>Mahidol Vivax Research Unit (MVRU)</strong>
							<br />
							3rd Floor 50th Anniversary Chalermprakiat Building,<br />
							Faculty of Tropical Medicine, Mahidol University<br />
							420/6 Ratchawithi Road, Rachathewi Bangkok 10400
							Thailand<br />
							Phone​ +66 2354 9100 ext. 2020, +66 23069187 Fax.
							+66 2354 8051
						</p>

						<p>
							General information and enquiries :
							wiyada.kun@mahidol.edu<br />
							Support for MVRU research : jetsumon.pra@mahidol.ac.
							th , wang.ngu@mahidol.edu , wanlapa.ros@mahidol.edu<br />
							Logistic information : jrachaneeporn@gmail.com
						</p>
					</div>

					<div className="col-3">
						<h2>Questions?</h2>
						<ul className="list-unstyled">
							<li>
								<Link to="/faq">
									<h3>How can I apply for work at MVRU?</h3>
								</Link>
							</li>
							<li>
								<Link to="/faq">
									<h3>How can I become a MVRU affiliate?</h3>
								</Link>
							</li>
							<li>
								<Link to="/faq">
									<h3 />
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<hr />
			</div>

			
						<MyMapComponent
							isMarkerShown
							googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
							loadingElement={<div style={{ height: `100%` }} />}
							containerElement={
								<div className="my-5" style={{ height: `500px` }} />
							}
							mapElement={<div style={{ height: `100%` }} />}
						/>
		
		</main>
	);
};

export default Contact;

const MyMapComponent = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			defaultZoom={17}
			defaultCenter={{ lat: 13.7655, lng: 100.5342 }}
		>
			{props.isMarkerShown && (
				<Marker position={{ lat: 13.7655, lng: 100.5342 }} />
			)}
		</GoogleMap>
	))
);
