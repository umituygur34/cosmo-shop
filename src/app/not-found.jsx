import React from "react";
const NotFound = () => {
	return (
		<div className="container">
			<div className="row align-items-center justify-content-center">
				<div className="col-md-4">
					<img src="/images/404.jpg" className="img-fluid" />
				</div>
				<div className="col-md-4 d-flex flex-column pt-4 text-center text-md-start">
					<h2 className="text-primary fs-1">Not Found-Root</h2>
					<p>The page you requested was not found</p>
				</div>
			</div>
		</div>
	);
};
export default NotFound;
