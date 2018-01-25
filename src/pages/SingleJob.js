import React from "react";
import FindMore from "../components/FindMore";

const SingleJob = props => {
	return (
		<main role="main">
			<div className="jumbotron mb-0">
				<div className="container text-center">
					<div className="row justify-content-center">
						<div className="col-8">
							<h1 className="display-3">
								Job {props.match.params.id}
							</h1>
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

			<div className="container my-5">
				<div className="row">
					<div className="col-12 col-md-6  px-5 my-3">
						<h2>Insectary</h2>
						<p>
							Our highly standardised insectary harbours
							Anopheline mosquitoes for malaria research. With the
							SingleJob to produce > 20,000 female An. dirus and
							An. Minimum per week, we are always ready for
							malaria vaccine testing, transmission studies, and
							large scaled sporozoite production for drug
							discovery projects. We have shipped our infected
							mosquitoes domestically and internationally for
							malaria research and vaccine trails. Our staff have
							provided guidance in setting up mosquito facilities
							worldwide.
						</p>
					</div>

					<div className="col-12 col-md-6  px-5 my-3">
						<h2>Access to Vivax-infected blood</h2>
						<p>
							Because P. vivax cannot be maintained and propagated
							in culture, malaria patients or infected carriers
							are the only sources of live parasites for research.
							Working with malaria clinic and local hospitals, we
							have established access to patients in endemic areas
							throughout Thailand. Since 2011, our teams have been
							deployed to the Thai-Myanmar, Thai Cambodian, and
							Southern regions to collect fresh parasites. With
							the technical and logistical knowhow, we have
							achieved and can provide reliable mosquito infection
							and short-term blood stage parasite culture for
							malaria research.
						</p>
					</div>

					<div className="col-12 col-md-6  px-5 my-3">
						<h2>Platform for testing new malaria diagnostics</h2>
						<p>
							With access to malaria endemic populations, parasite
							culture, and a large archived of blood/plasma
							samples, we are always poised for testing new
							malaria diagnostics. Expert microscopy (decades of
							experience), qPCR, and nested PCR are our routine
							benchmarks for malaria assay validation. Our staff
							are also highly trained in LAMP and RDT for on-site
							testings.
						</p>
					</div>

					<div className="col-12 col-md-6  px-5 my-3">
						<h2>Advanced Malaria Diagnosis</h2>
						<p>
							We are highly experienced in malaria diagnosis. With
							expert microscopy, RDT, nested PCR, qPCR, qRT-PCR
							and LAMPs, we provide reference quality answers to
							malaria infection regardless of the method of sample
							collection. Our Qiagen-Tropmed lab at the Faculty of
							Tropical Medicine in Bangkok houses a high
							throughput automated system for large scaled
							epidemiological surveys. Thousands of blood samples
							can be analysed in days. This facility is an
							important part of our current ambition to eliminate
							malaria.
						</p>
					</div>

					<div className="col-12 col-md-6  px-5 my-3">
						<h2>Field Research</h2>
						<p>
							Field studies are necessary for closing the
							knowledge gap in malaria epidemiology and
							transmission. With over 30 years of experience in
							conducing field studies in Thailand, we have tackled
							and handled logistical and ethical challenges in
							various research activities. Different protocols -
							cross sectional surveys, cohort studies, passive
							case detections, follow ups, human landing capture
							of mosquitoes - have been successfully implemented
							in various sites in the country.
						</p>
					</div>

					<div className="col-12 col-md-6  px-5 my-3">
						<h2>Field Laboratories</h2>
						<p>
							Our field laboratories are situated in the midst of
							Thailand’s endemic areas. They offer unique
							opportunities to experiment with live P. vivax
							parasites. These labs enable short-term in vitro
							culture, sophisticate sample processing, and
							mosquito infection experiments. They are excellent
							teaching grounds for students and great retreat
							sites for investigators!
						</p>
					</div>
				</div>

				<hr />
			</div>
			<FindMore />
		</main>
	);
};

export default SingleJob;
