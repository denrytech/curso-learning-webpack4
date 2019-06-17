// const $ = require("jquery");

// $("#target").html("Hello world!");

import React from "react"
import { render } from "react-dom"
import './style.css'

const About = () => {
	return (
		<div>
			<h1>About from React</h1>
		</div>
	)
}

render (
	<About />,
	document.getElementById('target')
)

