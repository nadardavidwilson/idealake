import React, { useEffect, useState } from 'react'
import './App.css';
import Content from './content/content'
import Sidebar from './sidebar/sidebar'
import axios from "axios"


const Main = () => {

    const [album,setAlbum] = useState([]);
    const [data, setData] = useState([]);
    const [albumList, setalbumList] = useState([]);

    useEffect(()=>{
      getdata();
    },[]);


    const getdata = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=500').
        then((response) => {
            const alldata = response.data.map( (key) => {
                return key.albumId
            })

            const albumIds = [...new Set(alldata)];

            setAlbum(albumIds)
            setData(response.data)

            });
    }
console.log(albumList)
  return (
    <div className="container">
      <Sidebar album={album} setalbumList={setalbumList} data={data} />
      <Content album_list={albumList}/>
    </div>
  )
}

export default Main