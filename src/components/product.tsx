import React from 'react';

interface ProductProps{
    name: string,
    price: number,
    stock?:number,
    
}

function Product(props: ProductProps){
    return(
        <div>
            <h1>{props.name}</h1><br></br>
            <h5>Product stock: {props.stock}</h5><br></br>
            <h3>Price: {props.price} $</h3>
        </div>
    );
}

export default Product;