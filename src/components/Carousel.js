import React from "react";
import "./Carousel.css";

const Carousel = props => {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-ride="carousel"
		>
			<ol className="carousel-indicators">
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="0"
					className="active"
				/>
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="1"
				/>
				<li
					data-target="#carouselExampleIndicators"
					data-slide-to="2"
				/>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<blockquote className="blockquote text-center py-5">
						<p className="mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer posuere erat a ante.
						</p>
						<footer className="blockquote-footer">
							Someone famous in{" "}
							<cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
				</div>
				<div className="carousel-item">
					<blockquote className="blockquote text-center py-5">
						<p className="mb-0">
							Consectetur adipiscing elit. Integer posuere erat a
							ante.
						</p>
						<footer className="blockquote-footer">
							Someone famous in{" "}
							<cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
				</div>
				<div className="carousel-item">
					<blockquote className="blockquote text-center py-5">
						<p className="mb-0">Integer posuere erat a ante.</p>
						<footer className="blockquote-footer">
							Someone famous in{" "}
							<cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
				</div>
			</div>
			<a
				className="carousel-control-prev"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="prev"
			>
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"
				/>
				<span className="sr-only">Previous</span>
			</a>
			<a
				className="carousel-control-next"
				href="#carouselExampleIndicators"
				role="button"
				data-slide="next"
			>
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"
				/>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};

export default Carousel;
