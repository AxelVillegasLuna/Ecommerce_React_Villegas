const Data = [
    {
        id: 1,
        title: "Producto 1",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 20
    },
    {
        id: 2,
        title: "Producto 2",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 15 
    },
    {
        id: 3,
        title: "Producto 3",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 9
    },
    {
        id: 4,
        title: "Producto 4",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 5
    },
    {
        id: 5,
        title: "Producto 5",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 12
    },
    {
        id: 6,
        title: "Producto 6",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 35
    },
    {
        id: 7,
        title: "Producto 7",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 2
    },
    {
        id: 8,
        title: "Producto 8",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 22
    },
    {
        id: 9,
        title: "Producto 9",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 7
    },
    {
        id: 10,
        title: "Producto 10",
        desc: "Descripción del producto",
        img: "https://dummyimage.com/200x250/f2f2f2/aaa",
        stock: 10
    }
]

const getProducts = new Promise((resolve, reject) => {
    let condition = true;
    if(condition){
        setTimeout(() => {
            resolve(Data);
        }, 2000);
    } else{
        reject(alert("Error 404: No se encontraron datos de productos"));
    }
});

export default getProducts;