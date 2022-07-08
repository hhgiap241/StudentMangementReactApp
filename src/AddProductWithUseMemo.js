import React, {useMemo, useRef, useState} from "react";
import {Button} from "react-bootstrap";

const AddProductWithUseMemo = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const ref = useRef();

    const handleAddProduct = () => {
        setProducts(prevState => [...prevState,
            {
                name: name,
                price: +price
            }]);
        setName('');
        setPrice('');
        ref.current.focus();
    }
    const total = useMemo(() => {
        const reduce = products.reduce((prev, curr) => {
            console.log('re-calculate');
            return prev + curr.price;
        }, 0);
        return reduce;
    }, [products]);
    return (
        <>

            <div>
                <input
                    ref={ref}
                    placeholder='input product name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
                <br/>
                <input
                    placeholder='input product price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >
                </input>
                <br/>
                <Button
                    onClick={handleAddProduct}
                >Submit
                </Button>
                <h1>Total: {total}</h1>
            </div>
            <div>
                <ul>
                    {products.map(product => <li key={product.name}>{product.name} - {product.price}$</li>)}
                </ul>
            </div>
        </>
    )
}
export default AddProductWithUseMemo;