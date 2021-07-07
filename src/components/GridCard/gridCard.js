// Third-party imports
import React, { useState } from "react";
import { useDispatch} from "react-redux";

// Global imports

// Local imports
import { SingleCard, MinusPlusButton, ButtonWrapper, Quantity, CardHeader } from "./styles";
import { newProduct, addUnit, removeUnit, removeProduct } from "../../actions";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GridCard
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {title} string - Name of the product
 * @param {image} string - Image of the product
 */
const GridCard = ({ title, image, id }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const addToMenu = () => {
        if (quantity < 10) {
            let newQuantity = quantity + 1;
            setQuantity(newQuantity);
            if (newQuantity === 1) {
                dispatch(newProduct({
                    id,
                    quantity: 1
                }));
            } else {
                dispatch(addUnit(id))
            }
        } else {
            setQuantity(10);
        }
    };

    const removeFromMenu = () => {
        if (quantity > 0) {
            let newQuantity = quantity - 1;
            setQuantity(newQuantity);
            if (quantity === 1) {
                dispatch(removeProduct(id));
            } else {
                dispatch(removeUnit(id))
            }
        } else {
            setQuantity(0);
        }
    };

    return (
        <SingleCard styles={{ width: "max-content" }}>
            <CardHeader>{ title }</CardHeader>
            <img src={image} alt={title} />
            <ButtonWrapper>
                <MinusPlusButton onClick={() => removeFromMenu()}>
                    -
                </MinusPlusButton>
                <Quantity>{quantity}</Quantity>
                <MinusPlusButton onClick={() => addToMenu()}>+</MinusPlusButton>
            </ButtonWrapper>
        </SingleCard>
    );
};

export default GridCard;
