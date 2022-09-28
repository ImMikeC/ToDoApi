import React from "react";
import App from "./App.jsx";
import PropTypes from "prop-types";
import "../../styles/home.css";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5 col-sm-6">
			<h1>Write your task</h1>
			<App />
		</div>
	);
}