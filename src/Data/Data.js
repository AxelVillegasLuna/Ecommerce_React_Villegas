import { db } from './DataFirebase';
import { getDocs, getDoc, collection, doc, query, where } from 'firebase/firestore';

// Función para obtener la colección de productos de la base de Firebase
export async function getProducts() {
    let response = [];
    const colRef = collection(db, 'products');

    try {
        const snapshot = await getDocs(colRef);

        response = snapshot.docs.map((rawDoc) => {
            return {
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
    } catch (error) {
        console.log('Se ha producido un error: ', error);
    }
    
    return response;
}

// Función para obtener la colección de productos de cierta categoría de la base de Firebase
export async function getProductsByCategory(categoryId) {
    let response = [];
    const q = query(collection(db,'products'), where('category', '==', categoryId));

    try {
        const snapshot = await getDocs(q);

        response = snapshot.docs.map((rawDoc) => {
            return {
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
    } catch (error) {
        console.log('Se ha producido un error: ', error);
    }

    return response;
}

// Función para obtener el registro de un producto según su ID de la base de Firebase
export async function getProductById(productId) {
    let response = null;
    const itemRef = doc(db, 'products', productId);
    
    try {
        const snapshot = await getDoc(itemRef);
        if(snapshot.exists()){
            response = {id: snapshot.id,
                        ...snapshot.data()
                    }
        }
    } catch (error) {
        console.log('Se ha producido un error: ', error);
    }

    return response;
}

