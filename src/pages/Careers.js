import React from "react";
import FindMore from "../components/FindMore";
import { Link } from "react-router-dom";
const Careers = props => {
	return (
		<main role="main">
			<div className="jumbotron mb-0">
				<div className="container text-center">
					<div className="row justify-content-center">
						<div className="col-8">
							<h1 className="display-3">Work with us</h1>
							<p>
								At MVRU, we value collaboration and teamwork. We
								always look forward to opportunities to work
								with creative and hard-working people who love
								research. Our staff and investigators are highly
								skilled and love to share their experiences with
								aspiring researchers.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="container my-5">
				<div className="row">
					<div className="col-12">
						<h3>Current Job Opportunities</h3>
					</div>
                    <div className="col-12">
                        <ul>
                            <li>
                                <Link to="/careers/job-name">Super duper Researcher</Link>
                            </li>
                            <li>
                                <Link to="/careers/job-name">Super duper Researcher</Link>
                            </li>
                            <li>
                                <Link to="/careers/job-name">Super duper Researcher</Link>
                            </li>
                        </ul>
                    </div>
				</div>

				<hr />
			</div>

			<div className="jumbotron mb-0">
				<div className="container text-center">
					<div className="row justify-content-center">
						<div className="col-8">
							<h1 className="display-3">Study with us</h1>
							<p>
								MVRU offers unique opportunities for students
								and postdocs. Projects abound, from lab-oriented
								molecular &amp; cell biology to immunology to
								epidemiology. Trainees are guided by leading
								malaria researchers and groomed to be the next
								independent scientist. Our trainees have been
								highly successful in securing overseas
								opportunities and jobs
							</p>
						</div>
					</div>
				</div>
			</div>

			<FindMore />
		</main>
	);
};

export default Careers;
