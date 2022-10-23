import React from "react"
import "../styles/components/card.css"
import host from "../assets/images/host.jpg"
import star from "../assets/icons/star.svg"

const Card = () => {
	return (
		<div className="card-container">
		<div className="card">
				<img className="card-image" src={host} alt="hosting place" />
			<p className="status">Sold</p>
		</div>
		<div className="card-info">
				<div className="score-info">
					<img src={star} alt="star" />
					<p className="score">
						5.0 <span>(6) &#x2022; USA</span>
					</p>
				</div>
				<div className="card-detail">
					<p className="detail">Life lessons with Katie Zaferes</p>
					<p className="cost">
						<strong>From $136 /</strong> <span>person</span>
					</p>
				</div>
			</div>
		</div>
	)
}
export default Card

