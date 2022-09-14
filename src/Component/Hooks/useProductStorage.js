import { useState } from "react";

const getProductStore = ()=> {
    let storage = localStorage.getItem('vipBookedProducts');
    if (storage) {
        storage = JSON.parse(storage);
    }
    else{
        storage = [];
    }
    return storage;
}


// declering and updating local storage
const useProductStore = ()=> {    
    const [data,setData] = useState([...getProductStore()]);

    const getData = ()=> {
        setData([...getProductStore()]);
    }

    const upserting = (product) => {
        const allData = [...getProductStore()];
        const index = allData.findIndex(data => data._id === product._id);

        if (index < 0) {
            allData.push(product);
        } else {
            allData.splice(index, 1, product)
        }

        localStorage.setItem('vipBookedProducts', JSON.stringify(allData));
        setData(getProductStore());
    }

    const deleting = (id) => {
        const allData = [...getProductStore()];
        const index = allData.findIndex(data => data._id === id);

        if (index >= 0) {
            allData.splice(index, 1)
        }

        localStorage.setItem('vipBookedProducts', JSON.stringify(allData));
        setData(getProductStore());
    }
    
    return [data,upserting,deleting,getData];
}


export default useProductStore;