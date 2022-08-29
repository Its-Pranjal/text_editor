//import logo from './logo.svg';
//import { useState } from 'react';
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import { type } from '@testing-library/user-event/dist/type';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light"); // whether dark mode is enable or not
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 1000);
	};
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "black";
			showAlert("Dark mode has been enabled", "success");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled", "success");
		}
	};
	return (
		<>
			{/* <Router> */}
				<Navbar
					title="TextEditor"
					mode={mode}
					toggleMode={toggleMode}
					aboutText="About TextEditor"
				/>

				<Alert alert={alert} />
				<div className="container my-3">
					{/* <Routes> */}
						{/* <Route path="/about" element={<About />}></Route> */}
						<TextForm showAlert={showAlert} heading="Enter The Text Below To Analyze" mode={mode}/>

							
							
						
					{/* </Routes> */}
				</div>
			{/* </Router> */}
		</>
	);
}

export default App;
