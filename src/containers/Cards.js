import React from "react"
import "../styles/containers/cards.css"
import Card from "../components/Card"
import data from "../utils/data"

const Cards = () => {
	return (
		<div className="cards">
			{data.map((item) => {
				return <Card 
				state={item.openSpots} 
				score={item.stats.rating}
				scoreCount={item.stats.reviewCount}
				price={item.price}
				location={item.location}
				title={item.title}
				key={item.id}
				img={item.coverImg} />
				
			})}
		</div>
	)
}

export default Cards

