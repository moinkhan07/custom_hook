import {useEffect,useState} from "react";

const UseFetch = (url) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        let fetchData = async ()=>{
            let res = await fetch(url);
            let fetchedData = await res.json();
            setData(fetchedData);
        } 
        fetchData();
    },[])

  return data;
}

export default UseFetch