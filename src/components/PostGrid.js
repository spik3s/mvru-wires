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
									to="/research/research-spotlight-story"
									className="list-news-grid__link text-light"
								>

									<div className="list-news-grid__img">
										<img
											src="http://via.placeholder.com/680x380"
											alt="Featured News"
											className="img-thumbnail"
										/>
									</div>
									<span className="list-news-grid__info ">
										<span className="list-news-grid__type  text-dark">
											Research Spotlight
										</span>
										<b>
											<h4 className="display-4 text-dark">
												Research Spotlight headline
											</h4>
										</b>
										<p className="text-dark">Summary of the article about the research spotlight story</p>
										<i />
									</span>
								</Link>
							</li>
							<li className="bg-info  list-news-grid__item list-news-grid__item--small">
								<Link to="/news/news-article" className="list-news-grid__link">
									<div className="list-news-grid__img">
										<img
											src="http://via.placeholder.com/320x240"
											alt="Featured News"
											className="img-thumbnail"
										/>
									</div>
									<span className="list-news-grid__info">
										<span className="list-news-grid__type">
											Post Category
										</span>
										<b className="display-4">
											<h5 className="display-5 text-dark">
												Another article headline
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
											Post Category
										</span>
										<b className="display-4">
											<h5 className="display-5 text-dark">
												Latest news title
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
											Post Category
										</span>
										<b className="display-4">
											<h5 className="display-5 text-dark">
												Article Headline
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
											Post Category
										</span>
										<b className="display-4">
											<h5 className="display-5 text-dark">
												Article Headline
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
