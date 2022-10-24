import React from "react"
import "../styles/components/card.css"
import star from "../assets/icons/star.svg"


const Card = (props) => {
	let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
	return (
		<div className="card-container">
			<div className="card">
				<img className="card-image" src={process.env.PUBLIC_URL + `./images/${props.img}`} alt="hosting place" />
				{/* conditional rendering */}
				{badgeText && <p className="status">{badgeText}</p>}
			</div>
			<div className="card-info">
				<div className="score-info">
					<img src={star} alt="star" />
					<span>{props.score}</span>
					<span>({props.scoreCount})</span>
					<span>&#x2022; {props.location}</span>
				</div>
				<div className="card-detail">
					<p className="detail">{props.title}</p>
					<div className="cost">
					<span>From /${props.price} </span> 
					<span>person</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Card

