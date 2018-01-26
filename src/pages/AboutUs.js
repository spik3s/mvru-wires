import React from "react";
import FindMore from "../components/FindMore";
import GreyBox from "../components/GreyBox";
import CollaboratorsGrid from "../components/CollaboratorsGrid";
import CollaboratorsList from "../components/CollaboratorsList";
import CallToAction from "../components/CallToAction";

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
						<h3>Transmission Blocking Vaccines for P. vivax</h3>
						<p>
							To reduce the current burden of malaria and prevent
							its reintroduction after elimination, transmission
							blocking (TMB) vaccines can pay an important role.
							These vaccines are aimed at preventing transmission
							of malaria parasites from human to human through
							mosquitoes. At MVRU, our mosquito facility is
							optimised to support TMB vaccine development. Using
							membrane feeding assays, we have tested many
							candidates for TMB vaccines. Current research
							programs are focused on new target discovery and
							development of now vaccine platforms to induce
							strong and long lasting immune response required to
							block transmission.
						</p>
					</div>

					<div className="col-md-4">
						<GreyBox marginBottom="1rem" />
						<h3>Invasion of erythrocytes</h3>
						<p>
							P. vivax invades reticulocytes, the young immature
							erythrocytes. Understanding how the parasite
							recognises these cells is key to devise
							interventions that block blood infection. At MVRU,
							we focus on a class of parasite adhesion proteins
							called the reticulocyte binding proteins, with an
							aim to elucidate their biological roles during
							reticulocyte invasion and potential for vaccine
							development.
						</p>
					</div>

					<div className="col-md-4">
						<GreyBox marginBottom="1rem" />
						<h3>
							Novel interventions to reduce malaria transmission
						</h3>
						<p>
							It is well known that residents of malaria endemic
							areas can develop immunity against the disease.
							Because of this, the vast majority of people who are
							infected by malaria parasites are actually
							asymptomatic. Research has shown that these
							asymptomatic carriers are an important source of
							transmission. Targeting these carriers is difficult
							because it requires active surveillance with
							sensitive but cost prohibitive molecular diagnosis.
							To address this problem, MVRU is aiming to conduct a
							novel mass drug administration (MDA) trial of
							Ivermectin, a broad spectrum anti parasitic drug
							shown to reduce mosquito’s ability to transmit
							malaria. The target time line of MDA implementation
							is 2018, the results of which will inform policy
							makers about the potential of this tool for malaria
							elimination.
						</p>
					</div>
				</div>

				<CollaboratorsGrid title="We have been funded by" count={12} />
				<CollaboratorsList count={6} />
				<CallToAction
					className="my-5"
					text="Get in touch!"
					buttonLabel="Learn More &raquo;"
					destination="/contact"
				/>
			</div>
			<FindMore />
		</main>
	);
};

export default AboutUs;
