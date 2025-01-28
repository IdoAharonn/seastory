import React, { useState } from 'react';
import { Box, Button, Checkbox, TextField } from "@mui/material";

//כל הרכיב = קומפוננטה יושב כאן
export const Store = () => {

    //איזור הלוגיקה = הפעולות 
    const [myProduct, setMyProduct] = useState({
        name: "default",
        description: "Add new product",
        price: -1,
        inStock: false,


    });

    const [myCastumers, setCastumers] = useState({
        name: "default",
        age: -1,
        id: -1,
        email: " write your email",


    });
    const changeProduct = (ev) => {
        let value = ev.target.value;
        const name = ev.target.name;
        console.log("target=", value, " name=", name, ev.target.checked);
        if (name === "inStock") {
            value = ev.target.checked;
        }
        setMyProduct((prev) => {
            return { ...prev, [name]: value }
        });


     
    }

        const changeCastumers = (ev) => {
            let value = ev.target.value;
            const name = ev.target.name;
            console.log("target=", value, " name=", name, ev.target.checked);
            if (name === "inStock") {
                value = ev.target.checked;
            }
            setCastumers((prev) => {
                return { ...prev, [name]: value }
            });

        }

        //איזור התצוגה
        return (
            <>
                <h2>this is my store  </h2>
                <h3>add products</h3>
                <TextField id="outlined-basic" label="name" variant="outlined" name="name"
                    onChange={changeProduct} />

                <TextField id="outlined-basic" label="description" variant="outlined" name="description"
                    onChange={changeProduct} />

                <TextField id="outlined-basic" label="price" variant="outlined" name="price" type='number'
                    onChange={changeProduct} />
                <p> in stock?</p>
                <Checkbox label="in stock" name="inStock" onChange={changeProduct} />

                <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                    <h3>{myProduct.name}</h3>
                    <p>{myProduct.description}</p>
                    <p>Price: ${myProduct.price}</p>
                    <p>In Stock: {myProduct.inStock ? "Yes" : "No"}</p>
                    <img src={myProduct.imgUrl} alt="error" />
                </div>

                <h4>All products</h4>
                <div>
                    {products.map((product, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
                            <img src={product.imgUrl} alt="error" />
                        </div>
                    ))}
                </div>
                <div> my castumers</div>
                <TextField id="outlined-basic" label="name" variant="outlined" name="name"
                    onChange={changeCastumers} />
                <TextField id="outlined-basic" label="age" variant="outlined" name="age"
                    onChange={changeCastumers} />
                <TextField id="outlined-basic" label="id" variant="outlined" name="id"
                    onChange={changeCastumers} />
                <TextField id="outlined-basic" label="email" variant="outlined" name="email"
                    onChange={changeCastumers} />

                <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                    <h3>name:{myCastumers.name}</h3>
                    <p>age:{myCastumers.age}</p>
                    <p>id:{myCastumers.id}</p>
                    <p>email:{myCastumers.email}</p>
                </div>

            </>
        )
    }
    const product1 = {
        name: "oil",
        description: "oil for jetski",
        price: 90,
        inStock: true,
        imgUrl: "data:image/webp;base64,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"

    }
    const product2 = {
        name: "Wax",
        description: "Wax for bords",
        price: 15,
        inStock: true,
        imgUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRxEJmAbBxsxxytytVTCITW-XpWsf5sNpg0fFnPdA7uhJiVkkctbRXzuBtURLEl6z2fYwp-6VcZ8m17RGiUyAvKIJNNOAS8lE1bqhX0LOie-WTVe_8oVbgLIQ&usqp=CAc"

    }
    const product3 = {
        name: "lish",
        description: "lish for bords",
        price: 150,
        inStock: false,
        imgUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTEqZzbRxcyq3tHMNwjL2Jrbd9RF4eMyjyoWw-FF61MahYIloUns_gDPaZ_XQrp9P8JZtjfgY5o087NCTLwtaNsqLC-63TzcUB4bXE8RxfIqasrMZCghSm5ON7qBRFhOzi27AQdm5RIxQ&usqp=CAc"

    }
    const product4 = {
        name: "engine",
        description: "Jet ski engine for the model YAMAHA VX HO CROSIER",
        price: 24000,
        inStock: true,
        imgUrl: "data:image/jpeg;base64,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"


    }
    const product5 = {
        name: "Surfing pants",
        description: "Billabong surf jeans size S",
        price: 24000,
        inStock: true,
        imgUrl: "data:image/jpeg;base64,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"

    }
    const products = [product1, product2, product3, product4, product5];
/*
- תרגל עוד שינוי סטייט עם אובייקט גלשן
- עצב את אותה רשימה בצורה של קלפים כמו אלה
https://mui.com/material-ui/react-card/#complex-interaction


*/

