



import React,{useState,useEffect} from 'react';
import axios from "axios"

function Joke() {
    const [state, setstate] = useState([])
    useEffect(() => {
       axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDTqcA6uNc-xN_6OkiJM8xVgxTX7G2j2h0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6").then(res=>{
           console.log(res)
           setstate=(res.data.items)
       })
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Joke;