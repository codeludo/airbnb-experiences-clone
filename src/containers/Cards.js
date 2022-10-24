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
				// al agregar las props como objeto, se llaman
				// desde el componente Card con el nombre de la data que viene
				info={info}
				/>
				
			})}
		</div>
	)
}

export default Cards

