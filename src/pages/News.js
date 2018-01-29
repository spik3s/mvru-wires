import React from "react";
import FindMore from "../components/FindMore";
import { Link } from "react-router-dom";

const News = props => {

	var itemsNews = [];
	for (var i = 0; i < (props.count || 6); i++) {
		itemsNews.push(
			<div className="card mb-3">
				<div className="row">
					<div
						className="col-4"
						style={{
							display: "block",
							backgroundImage:
								"url('http://via.placeholder.com/200x200')",
							backgroundSize: "cover",
							paddingBottom: "25%"
						}}
					/>
					<div className="col-8">
						<div className="card-body ">
							<p className="card-text">
								<small className="text-muted">
									Post Category
								</small>
							</p>

							<h3 className="card-title">Title of the next big discovery</h3>
							<p className="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer. This is a wider
								card with supporting text below as a natural
								lead-in to additional content. This content is a
								little bit longer. <Link to="/news/post-name">Read more...</Link>
							</p>
							
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<main role="main">
			<div className="jumbotron mb-0">
				<div className="container text-center">
					<div className="row justify-content-center">
						<div className="col-8">
							<h1 className="display-3">News</h1>
						
						</div>
					</div>
				</div>
			</div>
			<div className="container my-3">
				<div className="row">
					<div className="col">
						<ul class="nav nav-pills  nav-fill">
							<li class="nav-item">
								<a class="nav-link active" href="/">
									All
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/">
									Category 1
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/">
									Category 2
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="container my-5">
				<div className="row">
				{itemsNews}

				</div>

				<hr />
			</div>
			<FindMore />
		</main>
	);
};

export default News;
