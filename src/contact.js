// const $ = require("jquery");

// $("#target").html("Hello world!");

import React from "react"
import { render } from "react-dom"
import './style.css'

const Contact = () => {
	return (
		<div>
			<h1>Contact from React</h1>
		</div>
	)
}

render (
	<Contact />,
	document.getElementById("target")
)

