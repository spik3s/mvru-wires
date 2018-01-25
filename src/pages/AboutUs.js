import React from "react";
import FindMore from "../components/FindMore";
import GreyBox from "../components/GreyBox";
import CollaboratorsGrid from "../components/CollaboratorsGrid";

const AboutUs = props => {
	return (
		<main role="main">
			<div className="jumbotron">
				<div className="container text-center">
					<h1 className="display-3">About Us</h1>
				</div>
			</div>

			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-10">
						<p>
							MVRU is a major unit of the Malaria Excellence
							Centre of the Faculty of Tropical Medicine, Mahidol
							University. Founded in 2011 under the leadership of
							Dr. Jetsumon Sattabongkot, the MVRU has grown from 8
							staff to over 30 currently. With full access to
							Mahidol University facilities and supporting
							infrastructure, including well equipped field
							laboratories in malaria endemic sites, MVRU has
							established itself as a leader in Plasmodium vivax
							research. The unit has attracted many international
							research supports aiming to drive malaria
							elimination.
						</p>
					</div>
				</div>

				<div className="row my-4">
					<div className="col-md-4">
						<GreyBox />
					</div>
					<div className="col-md-4">
						<GreyBox />
					</div>
					<div className="col-md-4">
						<GreyBox />
					</div>
				</div>

				<div className="row justify-content-md-center">
					<div className="col-10">
						<p>
							MVRU’s mission is to accelerate malaria elimination
							through research. To achieve our goal, we strive to
							fill important knowledge gaps in P. vivax biology as
							well as to provide platforms for development of new
							diagnostic and therapeutic tools. MVRU staff work
							both in the field and in the lab to discover,
							create, and validate new ways to fight malaria.
						</p>
						<p>
							Working closely with both community leaders in the
							endemic areas of Thailand and leading international
							scientists, we have built a strong collaborative
							network to support frontier research in vivax
							malaria. Population-based studies (social and
							epidemiological) have been a major part of our
							research to advance understanding of risk factors,
							trends of infection, and impacts of different
							interventions.
						</p>
						<p>
							Fresh P. vivax parasites from patients and
							asymptomatic carriers have allowed us and
							collaborators to investigate the biology of all
							stages of the parasite. With our high-quality
							colonies of Anopheline mosquitos, we can study of
							malaria transmission in the well-controlled
							laboratory settings. Our high-capacity production of
							female An. dirus have also made possible studies of,
							and drug screening against, the elusive liver-stage
							parasites including hypnozoites.
						</p>
					</div>
				</div>

				<div className="row my-4">
					<div className="col-md-12">
						<GreyBox height="50%" />
					</div>
				</div>

				<div className="row justify-content-md-center">
					<div className="col-10">
						<p>
							MVRU research activities have been supported by Bill
							and Melinda Gates Foundation, US-NIH, US-DoD,
							Wellcome Trust, Korea-NIH, and GHIT. Our
							achievements and commitment to research are
							reflected in continuous international fundings as
							well as in peer-reviewed publications. Our
							investigators serve on several international
							scientific boards and committees.
						</p>
						<p>
							Within the next 5 years, we will put our best effort
							to provide a better understanding malaria
							transmission, develop new transmission blocking
							vaccines for P. vivax, evaluate novel interventions,
							validate new diagnostic tools, and close key
							knowledge gaps in P. vivax biology related to the
							parasite dormancy and population reservoir.
						</p>
					</div>
				</div>

				<div className="row my-4">
					<div className="col-12 text-center my-4">
						<h2>Research Areas</h2>
					</div>
					<div className="col-md-4">
						<GreyBox marginBottom="1rem" />
						<h3>Heading</h3>
						<p>
							Donec id elit non mi porta gravida at eget metus.
							Fusce dapibus, tellus ac cursus commodo, tortor
							mauris condimentum nibh, ut fermentum massa justo
							sit amet risus. Etiam porta sem malesuada magna
							mollis euismod. Donec sed odio dui.
						</p>
					</div>
					<div className="col-md-4">
						<GreyBox marginBottom="1rem" />
						<h3>Research Areas</h3>
						<p>
							Donec id elit non mi porta gravida at eget metus.
							Fusce dapibus, tellus ac cursus commodo, tortor
							mauris condimentum nibh, ut fermentum massa justo
							sit amet risus. Etiam porta sem malesuada magna
							mollis euismod. Donec sed odio dui.
						</p>
					</div>
					<div className="col-md-4">
						<GreyBox marginBottom="1rem" />
						<h3>Heading</h3>
						<p>
							Donec sed odio dui. Cras justo odio, dapibus ac
							facilisis in, egestas eget quam. Vestibulum id
							ligula porta felis euismod semper. Fusce dapibus,
							tellus ac cursus commodo, tortor mauris condimentum
							nibh, ut fermentum massa justo sit amet risus.
						</p>
					</div>
				</div>

				<CollaboratorsGrid title="We have been funded by"/>
				<CollaboratorsGrid />


				<hr />
			</div>
			<FindMore />
		</main>
	);
};

export default AboutUs;
