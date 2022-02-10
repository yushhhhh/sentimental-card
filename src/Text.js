import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Grid } from '@material-ui/core';

const Text = ()=> {   
    const [data, setData] = useState([]); 
    const onClick = ()=>{
        axios.get('https://api.qwer.pw/request/helpful_text?apikey=guest')
            .then(res =>{
                setData(res.data);
                console.log(res.data)
            })
            .catch(error=>{
                console.log(error);
            })
    };

    return (
        <div>
            {data.map(item=>(
                <h4 key={item}>{item.respond}</h4>
            ))}
            <button onClick={onClick}>글귀</button>
        </div>
    );
    
}

export default Text;