import React from "react";
import "./PostGrid.css";
import { Link } from "react-router-dom";

const PostGrid = props => {
	return (
		<div className="container bg-light py-3">
				<div className="row no-gutters ">
					<div className="col">

						<ul className="list-news-grid ">
							<li className="bg-warning list-news-grid__item list-news-grid__item--full">
								<Link
									to="/"
									className="list-news-grid__link text-light"
								>
									<div className="list-news-grid__img">
										<img
											src="https://placeimg.com/680/380/people"
											alt="Featured News"
											className="img-thumbnail"
										/>
									</div>
									<span className="list-news-grid__info ">
										<span className="list-news-grid__type">
											News
										</span>
										<b>
											<h4 className="display-4">
												Small but fast: a miniaturized
												origami-inspired...
											</h4>
										</b>
										<i />
									</span>
								</Link>
							</li>
							<li className="bg-info  list-news-grid__item list-news-grid__item--small">
								<Link to="/" className="list-news-grid__link">
									<div className="list-news-grid__img">
										<img
											src="https://placeimg.com/320/240/nature"
											alt="Featured News"
											className="img-thumbnail"
										/>
									</div>
									<span className="list-news-grid__info">
										<span className="list-news-grid__type">
											News
										</span>
										<b className="display-4">
											<h5 className="display-5">
												Small but fast: a miniaturized
												origami-inspired...
											</h5>
										</b>
										<i />
									</span>
								</Link>
							</li>
							<li className="bg-secondary list-news-grid__item list-news-grid__item--small">
								<Link to="/" className="list-news-grid__link">
									<div className="list-news-grid__img">
										<img
											src="http://via.placeholder.com/300x200"
											alt="Featured News"
											className="img-thumbnail"
										/>
									</div>
									<span className="list-news-grid__info">
										<span className="list-news-grid__type">
											News
										</span>
										<b className="display-4">
											<h5 className="display-5">
												Small but fast: a miniaturized
												origami-inspired...
											</h5>
										</b>
										<i />
									</span>
								</Link>
							</li>
							<li className="bg-secondary list-news-grid__item list-news-grid__item--small">
								<Link to="/" className="list-news-grid__link">
									<div className="list-news-grid__img">
										<img
											src="http://via.placeholder.com/300x200"
											alt="Featured News"
											className="img-thumbnail"
										/>
									</div>
									<span className="list-news-grid__info">
										<span className="list-news-grid__type">
											News
										</span>
										<b className="display-4">
											<h5 className="display-5">
												Small but fast: a miniaturized
												origami-inspired...
											</h5>
										</b>
										<i />
									</span>
								</Link>
							</li>
							<li className="bg-secondary list-news-grid__item list-news-grid__item--small">
								<Link to="/" className="list-news-grid__link">
									<div className="list-news-grid__img">
										<img
											src="http://via.placeholder.com/300x200"
											alt="Featured News"
											className="img-thumbnail"
										/>
									</div>
									<span className="list-news-grid__info">
										<span className="list-news-grid__type">
											News
										</span>
										<b className="display-4">
											<h5 className="display-5">
												Small but fast: a miniaturized
												origami-inspired...
											</h5>
										</b>
										<i />
									</span>
								</Link>
							</li>
							
						</ul>
					</div>
		
				</div>
			</div>
	);
};

export default PostGrid;
