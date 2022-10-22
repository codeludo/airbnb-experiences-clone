import React from "react"
import imgGrid from "../assets/images/photo-grid.png"
import "../styles/components/hero.css"

const Hero = () => {
	return (
		<div className="hero">
			<figure>
				<img src={imgGrid} alt="grid of cards" />
			</figure>
			<h1 className="title">Online Experiences</h1>
			<p className="title-description">
				Join unique interactive activities led by one-of-a-kind
				hosts—all without leaving home.
			</p>
		</div>
	)
}

export default Hero
