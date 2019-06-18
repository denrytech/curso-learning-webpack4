import React from "react"
import { render } from "react-dom"

const Navbar = () => {
	return (
		<ul>
			<li><a href="index.html">Index</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="contact.html">Contact</a></li>
		</ul>
	)
}

render (
	<Navbar />,
	document.getElementById('navbar')
)