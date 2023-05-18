import Card from '../ui/Card';
import classes from './ProductItem.module.css'

function ProductItem (props){
    return (
        
            <div>
                <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                    <p>{props.description }</p>
                </div>
                <div className={classes.actions}> 
                    <button>Add To Cart</button>
                </div>
            </Card>
        
                </li>
            </div>      
        
    ); 
}

export default ProductItem;  