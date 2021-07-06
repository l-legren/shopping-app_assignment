// Third-party imports
import React, { useState } from "react"

// Global imports

// Local imports
import {GridContainer} from './styles'
import mockedItems from "./mockedItems.json";
import GridCard from "../GridCard/gridCard";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GridProducts
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {?} param? - ?
 */
const GridProducts = () => {

    const [menu, setMenu] = useState([])

    const addingToMenu = (dish) => {
        // setMenu([...menu, dish])
        console.log(dish)
    }

    return (
        <GridContainer>
            {mockedItems.map(item => 
                (<GridCard key={item.title} title={item.title} image={item.thumbnailUrl} addingToCart={addingToMenu} />)
            )}
        </GridContainer>
    )
}

export default GridProducts