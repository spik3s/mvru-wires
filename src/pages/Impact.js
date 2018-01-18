import React from 'react';
import { Link } from 'react-router-dom'

const Impact = (props) => {
    return (
        <main role="main">

            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Impact</h1>
                    <p>This is a template for a simple marketing or informational website. It includes a large callout called a
           jumbotron and three supporting pieces of content. Use it as a starting point to create something more
           unique.</p>
                    <p><Link to="/" className="btn btn-primary btn-lg"role="button">Learn more &raquo;</Link></p>
                </div>
            </div>

           

        </main>
    );
}

export default Impact;