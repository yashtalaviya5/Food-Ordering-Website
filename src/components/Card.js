import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    const dispatch = useDispatchCart();
    const data = useCart();
    const priceRef = useRef();

    let options = props.options;
    let priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const [finalPrice, setFinalPrice] = useState(0);

    // Update size on mount
    useEffect(() => {
        if (priceRef.current) {
            setSize(priceRef.current.value);
        }
    }, []);

    // Recalculate final price whenever qty or size changes
    useEffect(() => {
        if (size && options[size]) {
            setFinalPrice(qty * parseInt(options[size]));
        }
    }, [qty, size, options]);

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }
        if (food.length !== 0) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return;
            }
            else if (food.size !== size) {

                await dispatch({
                    type: "ADD",
                    id: props.foodItem._id,
                    name: props.foodItem.name,
                    price: finalPrice,
                    qty: qty,
                    size: size,
                    img: props.ImgSrc
                });
                return;
                // console.log(data);
            }
            return;
        }
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size,
            img: props.ImgSrc
        });

    };

    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "175px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded text-light'
                            onChange={(e) => setQty(parseInt(e.target.value))}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} className='text-light' value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>

                        <select className='m-2 h-100 bg-success rounded text-light'
                            ref={priceRef}
                            onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} className='text-light' value={data}>{data}</option>
                            })}
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Rs {finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success container justify-content-center ms-2' onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
