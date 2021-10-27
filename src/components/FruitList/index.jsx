import './style.css'

export const FruitList= ( {fruits} ) =>{
    return (
        fruits.map((fruit,index)=><li key={index}>{fruit.name}</li>)
    )
}

export default FruitList