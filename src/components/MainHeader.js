import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = props => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="/">
				MVRU
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					
					<li className="nav-item">
						<NavLink to="/about-us" className="nav-link">
							About<span className="sr-only">(current)</span>
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/capabilities" className="nav-link">
							Capabilities
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/research" className="nav-link">
							Research Spotlight
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/team" className="nav-link">
							Team
						</NavLink>
					</li>

					<li className="nav-item">
						<NavLink to="/contact" className="nav-link">
							Contact Us
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default MainHeader;

{
	/* <header className="masthead fixed-top bg-white">
<div className="container">
  <div className="row justify-content-between align-items-center" >
    <div className="col-6">
      <h1 className="mt-2 display-4"><NavLink to="/" className="font-weight-bold">MVRU</NavLink></h1>
    </div>
    <div className="col-6 text-right" >
      <img src="http://via.placeholder.com/200x200" style={{maxHeight: "80px"}} alt="Featured News" className="img-thumbnail rounded-circle m-md-3 my-3" />
    </div>
  </div>
</div>
<nav className="navbar navbar-expand-md navbar-dark bg-dark">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <div className="container">
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <NavLink to="/about-us" className="nav-link" >About<span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/capabilities" className="nav-link">Capabilities</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/research" className="nav-link" >Research Spotlight</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/team" className="nav-link">Team</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01"
                data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */
}
//       </ul>
//     </div>
//   </div>
// </nav>
// </header> */}
