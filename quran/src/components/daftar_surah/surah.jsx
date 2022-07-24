import axios from "axios";
import { useState, useEffect } from "react";

const Surat = props => {
    const [data,setData] = useState([]);
    const [search,setSearch] = useState("");

    axios.get("https://al-quran-8d642.firebaseio.com/data.json?print=pretty").then((res) => {
        setData(res.data);
    }).catch((err) => {
        console.log(err.response);
    })


}

export default Surat;