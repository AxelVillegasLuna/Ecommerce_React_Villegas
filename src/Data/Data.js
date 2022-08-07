const products = [
    {
        id: 1,
        title: "NOTEBOOK BANGHO MAX L4",
        description: "NOTEBOOK BANGHO MAX L4 I1 F CELERON 5205U 4GB SSD 120GB 14 FREE",
        img: "https://www.venex.com.ar/products_images/1647962114_noteook-bangho-max-l4-i1-f-celeron-5205u-4gb-ssd-120gb-14-free.jpg",
        price: 68000,
        category: 'notebook',
        stock: 20
    },
    {
        id: 2,
        title: "RELOJ SMARTWATCH HAYLOU LS05",
        description: "RELOJ SMARTWATCH HAYLOU SOLAR LS05 BLACK",
        img: "https://www.venex.com.ar/products_images/1646417808_sfsdfsdf.png",
        price: 6000,
        category: 'smartwatch',
        stock: 15 
    },
    {
        id: 3,
        title: "NOTEBOOK ASUS X515EA-EJ711",
        description: "NOTEBOOK ASUS X515EA-EJ711 I3 1115G4 4GB SSD256GB 15.6 FREE",
        img: "https://www.venex.com.ar/products_images/1631646750_notebook-asus-x515ea-ej711-i3-1115g4-4gb-ssd-256gb-15.6.jpg",
        price: 115000,
        category: 'notebook',
        stock: 9
    },
    {
        id: 4,
        title: "TABLET LENOVO K10",
        description: "TABLET LENOVO 10.3 K10 3GB 32GB WIFI",
        img: "https://www.venex.com.ar/products_images/1637155971_z5xd1gfxdfs.png",
        price: 46000,
        category: 'tablet',
        stock: 5
    },
    {
        id: 5,
        title: "TABLET LENOVO TAB3",
        description: "TABLET LENOVO 8 TAB3 32GB 2G M8 SMART",
        img: "https://www.venex.com.ar/products_images/1639160699_dsfgdfg.png",
        price: 26000,
        category: 'tablet',
        stock: 12
    },
    {
        id: 6,
        title: "NOTEBOOK DELL INSPIRON 3501",
        description: "NOTEBOOK DELL INSPIRON 3501 I3 1115G4 4GB 1TB 15.6 W10",
        img: "https://www.venex.com.ar/products_images/1643986742_notebook-dell-inspiron-3501-i3-1115g4-4gb-1tb-15.6.jpg",
        price: 112000,
        category: 'notebook',
        stock: 35
    },
    {
        id: 7,
        title: "NOTEBOOK LENOVO IDEAPAD S145",
        description: "NOTEBOOK LENOVO IDEAPAD S145 15IIL I3 1005 G1 4GB 1TB 15.6 FREE",
        img: "https://www.venex.com.ar/products_images/1626471024_notebook-lenovo-ideapad-s145-15iil-i3-1005-g1-4gb-1tb-15.6-free.jpg",
        price: 130000,
        category: 'notebook',
        stock: 2
    },
    {
        id: 8,
        title: "RELOJ SMARTWATCH XIAOMI MI BAND 6",
        description: "RELOJ SMARTWATCH XIAOMI MI BAND 6 BLACK",
        img: "https://www.venex.com.ar/products_images/1633457676_6sw5dgf4dsf.png",
        price: 9000,
        category: 'smartwatch',
        stock: 22
    },
    {
        id: 9,
        title: "TABLET APPLE IPAD MINI 6TA GENERACION",
        description: "TABLET APPLE IPAD MINI 6TA GENERACION 64GB SPACE GREY",
        img: "https://www.venex.com.ar/products_images/1646333719_ipad.png",
        price: 150000,
        category: 'tablet',
        stock: 7
    },
    {
        id: 10,
        title: "RELOJ SMARTWATCH HUAWEI FIT",
        description: "RELOJ SMARTWATCH HUAWEI FIT BLACK",
        img: "https://www.venex.com.ar/products_images/1656423293_ewwq.png",
        price: 20000,
        category: 'smartwatch',
        stock: 10
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000)
        })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 2000)
    })    
}

