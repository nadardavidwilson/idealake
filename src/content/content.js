import React, { useEffect, useState } from 'react'
import '../App.css';

const Content = (props) => {

  return (
    <div className="rightside">
        {props.album_list.map((key)=>(
           
            <div className="content-width" key={key.id}>
                <div className="p-1" >
                   <img src={key.thumbnailUrl} alt="" width="200" height="200"></img>
                   
                </div>
                <div>
                    <p>{key.title}</p>

                </div>
                 
                
            </div>
        ))}
    </div>
  )
}

export default Content