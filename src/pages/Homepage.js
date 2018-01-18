import React from 'react';
import { Link } from 'react-router-dom'
import './Homepage.css'



const Homepage = (props) => {
    return (
        <main role="main">

            <div className="jumbotron mb-0">
                <div className="container text-center">
                    <div className="row justify-content-md-center">
                        <div className="col-8">
                            <h1 className="display-3"><span className="font-weight-bold">Real World</span> Research</h1>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                       jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                       unique.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron mb-0 grad-left" >
                <div className="container text-right">
                    <div className="row justify-content-md-end">
                        <div className="col-8">
                            <h2 className="display-4">Access to real samples</h2>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                   jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                   unique.</p>
                            <p><Link to="/capacity" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron mb-0 grad-right" >
                <div className="container text-left">
                    <div className="row justify-content-md-start">
                        <div className="col-8">
                            <h2 className="display-4">Perfect Simulation</h2>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                   jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                   unique.</p>
                            <p><Link to="/" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron grad-left mb-0">
                <div className="container text-right">
                    <div className="row justify-content-md-end">
                        <div className="col-8">
                            <h2 className="display-4">Great Lab, experienced Staff</h2>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                   jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                   unique.</p>
                            <p><Link to="/" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-0" />

            <div className="jumbotron mb-0">
                <div className="container text-center">
                    <div className="row justify-content-md-center">
                        <div className="col-8">
                            <h1 className="display-3">Real Impact</h1>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                       jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                       unique.</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="jumbotron mb-0 grad-left" >
                <div className="container text-right">
                    <div className="row justify-content-md-end">
                        <div className="col-8">
                            <h2 className="display-4">High throughput assay</h2>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                   jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                   unique.</p>
                            <p><Link to="/" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron mb-0 grad-right" >
                <div className="container text-left">
                    <div className="row justify-content-md-start">
                        <div className="col-8">
                            <h2 className="display-4">Better transmission monitoring</h2>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                   jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                   unique.</p>
                            <p><Link to="/" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron grad-left mb-0">
                <div className="container text-right">
                    <div className="row justify-content-md-end">
                        <div className="col-8">
                            <h2 className="display-4">Enabling life saving therapy</h2>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                   jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                   unique.</p>
                            <p><Link to="/" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link></p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container-fluid bg-light py-3">
                <div className="row no-gutters ">
                    <div className="col">
                        {/* <div className="row">
                            <div className="col-12 mb-3">
                                <h3>News &amp; Publications</h3>
                            </div>
                        </div> */}

                        <ul className="list-news-grid ">
                            <li className="bg-warning list-news-grid__item list-news-grid__item--medium">
                                <Link to="/" className="list-news-grid__link text-light">
                                    <div className="list-news-grid__img">
                                        <img src="https://placeimg.com/640/480/nature" alt="Featured News" className="img-thumbnail" />
                                    </div>
                                    <span className="list-news-grid__info ">
                                        <span className="list-news-grid__type">News</span>
                                        <b><h4 className="display-4">Small but fast: a miniaturized origami-inspired...</h4></b>
                                        <i></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="bg-info  list-news-grid__item list-news-grid__item--small">
                                <Link to="/" className="list-news-grid__link">
                                    <div className="list-news-grid__img">
                                        <img src="https://placeimg.com/320/240/nature" alt="Featured News" className="img-thumbnail" />
                                    </div>
                                    <span className="list-news-grid__info">
                                        <span className="list-news-grid__type">News</span>
                                        <b className="display-4"><h5 className="display-5">Small but fast: a miniaturized origami-inspired...</h5></b>
                                        <i></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="bg-secondary list-news-grid__item list-news-grid__item--small">
                                <Link to="/" className="list-news-grid__link">
                                    <div className="list-news-grid__img">
                                        <img src="http://via.placeholder.com/300x200" alt="Featured News" className="img-thumbnail" />
                                    </div>
                                    <span className="list-news-grid__info">
                                        <span className="list-news-grid__type">News</span>
                                        <b className="display-4"><h5 className="display-5">Small but fast: a miniaturized origami-inspired...</h5></b>
                                        <i></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="bg-secondary list-news-grid__item list-news-grid__item--small">
                                <Link to="/" className="list-news-grid__link">
                                    <div className="list-news-grid__img">
                                        <img src="http://via.placeholder.com/300x200" alt="Featured News" className="img-thumbnail" />
                                    </div>
                                    <span className="list-news-grid__info">
                                        <span className="list-news-grid__type">News</span>
                                        <b className="display-4"><h5 className="display-5">Small but fast: a miniaturized origami-inspired...</h5></b>
                                        <i></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="bg-secondary list-news-grid__item list-news-grid__item--small">
                                <Link to="/" className="list-news-grid__link">
                                    <div className="list-news-grid__img">
                                        <img src="http://via.placeholder.com/300x200" alt="Featured News" className="img-thumbnail" />
                                    </div>
                                    <span className="list-news-grid__info">
                                        <span className="list-news-grid__type">News</span>
                                        <b className="display-4"><h5 className="display-5">Small but fast: a miniaturized origami-inspired...</h5></b>
                                        <i></i>
                                    </span>
                                </Link>
                            </li>
                            <li className="bg-secondary list-news-grid__item list-news-grid__item--small">
                                <Link to="/" className="list-news-grid__link">
                                    <div className="list-news-grid__img">
                                        <img src="http://via.placeholder.com/300x200" alt="Featured News" className="img-thumbnail" />
                                    </div>
                                    <span className="list-news-grid__info">
                                        <span className="list-news-grid__type">News</span>
                                        <b className="display-4"><h5 className="display-5">Small but fast: a miniaturized origami-inspired...</h5></b>
                                        <i></i>
                                    </span>
                                </Link>
                            </li>

                        </ul>

                    </div>
                    {/* <div className="col-6">
                        <div className="row">
                            <div className="card w-100">
                                <div className="card-header">
                                    Other News
                        </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Link to="/" className="card-link">Cras justo odio</Link></li>
                                    <li className="list-group-item"><Link to="/" className="card-link">Dapibus ac facilisis in</Link></li>
                                    <li className="list-group-item"><Link to="/" className="card-link">Vestibulum at eros</Link></li>
                                    <li className="list-group-item"><Link to="/" className="card-link">Vestibulum at eros 2</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <h3>Our Collaborators</h3>
                            </div>
                        </div>
                        <div className="row justify-content-center">

                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <img src="http://via.placeholder.com/200x200" alt="Featured News" className="img-thumbnail rounded-circle m-md-3 my-3" />
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <img src="http://via.placeholder.com/200x200" alt="Featured News" className="img-thumbnail rounded-circle m-md-3 my-3" />
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <img src="http://via.placeholder.com/200x200" alt="Featured News" className="img-thumbnail rounded-circle m-md-3 my-3" />
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <img src="http://via.placeholder.com/200x200" alt="Featured News" className="img-thumbnail rounded-circle m-md-3 my-3" />
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <img src="http://via.placeholder.com/200x200" alt="Featured News" className="img-thumbnail rounded-circle m-md-3 my-3" />
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                                <img src="http://via.placeholder.com/200x200" alt="Featured News" className="img-thumbnail rounded-circle m-md-3 my-3" />
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </main>
    );
}

export default Homepage;