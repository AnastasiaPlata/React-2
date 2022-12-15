import "./card.css";
// αντικαθιστά το div 
function Card(props){
    // card -> css κλάση  + οποιαδήποτε άλλη κλάση css 
    const classes= "card " + props.className;
return <div className={classes}>{props.children}</div>;
// επιστρέφει την μορφή που θα έχει στα exprenses αρχεία ,
// όπου props.children ->  είναι ότι υπάρχει μέσα στο div  
}
export default Card;