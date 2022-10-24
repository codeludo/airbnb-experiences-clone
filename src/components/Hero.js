import React from "react"
import "../styles/components/hero.css"

const Hero = () => {
	return (
		<div className="hero">
			<figure>
				<img src={process.env.PUBLIC_URL + './images/photo-grid.png'} alt="grid of cards" />
			</figure>
			<div className="hero-description">
				<h1 className="title">Online Experiences</h1>
				<p className="title-description">
					Join unique interactive activities led by one-of-a-kind
					hosts—all without leaving home.
				</p>
			</div>
		</div>
	)
}

export default Hero

