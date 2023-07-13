/* eslint-disable react/prop-types */

import classes from './Cards.module.css';
const Card = (props) =>{
    return   <div  className={classes.card} style={{ backgroundColor: props.bgColor }}>
    <div className={classes.cardLeft}>
        <p> {props.title} </p>
        <h1> {props.price} </h1>
    </div>
    <div className={classes.cardRight}>
        <img src={props.image} alt="total Revenues" />
    </div>
</div>
};


export default Card;