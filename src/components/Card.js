import React from "react"
import "../styles/components/card.css"
import star from "../assets/icons/star.svg"


const Card = (props) => {
	console.log(props)
	let badgeText
    if (props.info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.info.location === "Online") {
        badgeText = "ONLINE"
    }
	return (
		<div className="card-container">
			<div className="card">
				<img className="card-image" src={process.env.PUBLIC_URL + `./images/${props.info.coverImg}`} alt="hosting place" />
				{/* conditional rendering */}
				{badgeText && <p className="status">{badgeText}</p>}
			</div>
			<div className="card-info">
				<div className="score-info">
					<img src={star} alt="star" />
					<span>{props.info.stats.rating}</span>
					<span>({props.info.stats.reviewCount})</span>
					<span>&#x2022; {props.info.location}</span>
				</div>
				<div className="card-detail">
					<p className="detail">{props.info.title}</p>
					<div className="cost">
					<span>From /${props.info.price} </span> 
					<span>person</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Card

