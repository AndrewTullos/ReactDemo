import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./assets/search.svg";

// d79b6b85

const API_URL = "http://www.omdbapi.com?apikey=d79b6b85";

function App() {
	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		console.log(data.search);
	};

	useEffect(() => {
		searchMovies("Superman");
	}, []);

	return <h1>Hello World</h1>;
}

export default App;
