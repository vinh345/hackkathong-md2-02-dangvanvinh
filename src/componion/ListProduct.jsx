import React, { useId, useState } from 'react'
import '../index.css';


export default function ListProduct() {
    const [products, setProducts] = useState([
        {
            name: "Coca",
            img: 'https://i.imgur.com/6QjVUZV.jpg',
            price: "10,000$",
            quantity: 0,
            id: 1

        },
        {
            name: "VinhHao",
            img: 'https://i.imgur.com/6QjVUZV.jpg',
            price: "15,000$",
            quantity: 0,
            id: 2

        },
        {
            name: "Sprite",
            img: 'https://i.imgur.com/VmU4KDK.jpg',
            price: "20,000$",
            quantity: 0,
            id: 3

        },
        {
            name: "Pepsi",
            img: 'https://i.imgur.com/6QjVUZV.jpg',
            price: "9,000$",
            quantity: 0,
            id: 4

        },
        {
            name: "Revive",
            img: 'https://i.imgur.com/VmU4KDK.jpg',
            price: "8,000$",
            quantity: 0,
            id: 5

        },
        {
            name: "Ryo",
            img: 'https://i.imgur.com/6QjVUZV.jpg',
            price: "11,000$",
            quantity: 0,
            id: 6

        },
        {
            name: "NumberOne",
            img: 'https://i.imgur.com/VmU4KDK.jpg',
            price: "13,000$",
            quantity: 0,
            id: 7

        },
        {
            name: "Sting",
            img: 'https://i.imgur.com/VmU4KDK.jpg',
            price: "20,000$",
            quantity: 0,
            id: 8
        },
    ]);

    let cart = products.filter((item) => {
        return item.quantity != 0

    })
    const revive = (index) => {
        if (products[index].quantity != 0) {
            const newArr = [...products]
            newArr[index].quantity = newArr[index].quantity - 1
            setProducts(newArr)
        }
    }

    const addToCart = (index) => {

        const newArr = [...products]
        newArr[index].quantity = newArr[index].quantity + 1
        setProducts(newArr)
    }
    return (
        <>
            {/* <img src="../../public/img/0GPFIYa.jpg" alt="" /> */}
            <div className="section">
                <header>
                    <div className="header">
                        <h2>To spend 1423456325239 You Have a Lot of Money </h2>
                    </div>
                </header>
                <body>
                    <div className="product">
                        {products.map((item, index) => {
                            return <div className='productList'>
                                <div className="img">
                                    <img src={item.img} />
                                </div>
                                <div className="priceName">
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                                <div className="quantity">
                                    <button onClick={() => revive(index)} className='btn'>Interest</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => addToCart(index)}>Add</button>
                                </div>
                            </div>
                        })}
                    </div>
                </body>
                <div className="cart">
                    <h3>Giỏ hàng của bạn</h3>
                    {cart.map((item, index) => (
                        <div>
                            <div className="infor">
                                <p>Tên sản phẩm {item.name}</p>
                                <p>{item.price}</p>
                            </div>
                            <div className="sumMoney">
                                <p>Tổng số tiền là:</p>
                                <button>Làm mới giỏ hàng</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}