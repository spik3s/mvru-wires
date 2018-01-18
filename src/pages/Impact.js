import React from 'react';
import { Link } from 'react-router-dom'

const Impact = (props) => {
    return (
        <main role="main">

            <div className="jumbotron mb-0">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <h1 className="display-3">Research Spotlight</h1>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a
jumbotron and three supporting pieces of content. Use it as a starting point to create something more
unique.</p>
                            <p>Success Stories &amp; Past Projets</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-5">
                <div className="row justify-content-center">

                    <div className="col-10">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4" style={{ display: 'block', backgroundImage: "url('http://via.placeholder.com/200x200')", backgroundSize: "cover", paddingBottom: "33%" }}>

                                </div>
                                <div className="col-12 col-sm-6 col-md-8">
                                    <div className="card-body ">
                                        <h4 className="card-title">Success Story</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to="/" className="btn btn-primary float-right">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4" style={{ display: 'block', backgroundImage: "url('http://via.placeholder.com/200x200')", backgroundSize: "cover", paddingBottom: "33%" }}>

                                </div>
                                <div className="col-12 col-sm-6 col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">Success Story</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to="/" className="btn btn-primary float-right">Read more</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4" style={{ display: 'block', backgroundImage: "url('http://via.placeholder.com/200x200')", backgroundSize: "cover", paddingBottom: "33%" }}>

                                </div>
                                <div className="col-12 col-sm-6 col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">Success Story</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <Link to="/" className="btn btn-primary float-right">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to="/impact" className="btn btn-primary float-right">Load more</Link></div>
                        </div>
                    </div>
                </div>

                <hr />

            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="display-4">Research Projects</h3>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Ongoing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Past</a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center my-3">

                    <div className="col-6">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4" style={{ display: 'block', backgroundImage: "url('http://via.placeholder.com/200x200')", backgroundSize: "cover", paddingBottom: "20%" }}>

                                </div>
                                <div className="col-12 col-sm-6 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">The development of Invasion inhibition assay for vaccine screening of Plasmodium vivax</h5>
                                        <p className="card-text">Established high throughput invasion assay for in vitro vaccine screening of Plasmodium vivax. The optimized invasion assay will increase accuracy,
                                        productivity, and throughput of the assay which will fasten the antimalarial drugs/vaccines discovery.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4" style={{ display: 'block', backgroundImage: "url('http://via.placeholder.com/200x200')", backgroundSize: "cover", paddingBottom: "20%" }}>

                                </div>
                                <div className="col-12 col-sm-6 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Characterization of Plasmodium vivax gametocyte and its association with mosquito infectivity</h5>
                                        <p className="card-text">Characterization of gametocyte development will lead to the discovery of the gametocyte markers which relate to the transmission of the parasite to
                                        mosquito. These markers can be used to determine the level of contribution to transmission of reservoir populations as well as to support the development of transmission blocking vaccines/drugs.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4" style={{ display: 'block', backgroundImage: "url('http://via.placeholder.com/200x200')", backgroundSize: "cover", paddingBottom: "20%" }}>

                                </div>
                                <div className="col-12 col-sm-6 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Transcriptomes and Proteomes of Plasmodium vivax</h5>
                                        <p className="card-text">This study depict a comprehensive view of gene expression of P. vivax blood stage. Such information will help unravel the mechanism of sexual development which may
                                        lead to the discovery of new antimalarial drugs and transmission-blocking vaccine targets. This information will definitely fuel malaria elimination.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4" style={{ display: 'block', backgroundImage: "url('http://via.placeholder.com/200x200')", backgroundSize: "cover", paddingBottom: "20%" }}>

                                </div>
                                <div className="col-12 col-sm-6 col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Development of Plasmodium vivax gametocyte and its association with mosquito infectivity</h5>
                                        <p className="card-text">The information on P. vivax gametocyte development will give a better understanding of gametocyte biology and their infectiveness to the mosquito, allowing future
                                        identification of novel candidates for transmission blocking vaccines/drugs.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12">
                        <Link to="/impact" className="btn btn-primary float-right">Load more</Link></div>


                </div>

                <hr />

            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="display-4">Testimonials</h3>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <blockquote class="blockquote text-center py-5">
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                                <div className="carousel-item">
                                <blockquote class="blockquote text-center py-5">
                                        <p class="mb-0">Consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                                <div className="carousel-item">
                                <blockquote class="blockquote text-center py-5">
                                        <p class="mb-0">Integer posuere erat a ante.</p>
                                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}

export default Impact;