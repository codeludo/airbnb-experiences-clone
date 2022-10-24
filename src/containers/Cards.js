import React from "react"
import "../styles/containers/cards.css"
import Card from "../components/Card"
import data from "../utils/data"

const Cards = () => {
	return (
		<div className="cards">
			{data.map((info) => {
				return <Card 
				key={info.id}
				{...info}
				/>
				
			})}
		</div>
	)
}

export default Cards

