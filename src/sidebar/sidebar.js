import React, { useEffect, useState } from 'react'

const Sidebar = (props) => {
    
    const getAlbumList = (albumId) => {

        const albums = props.data.filter(album => {
            return album.albumId == albumId;
        })

        props.setalbumList(albums)
    }


  return (
    <div className="sidebarwid">
        {props.album.map((key)=>(
            <a className='sidebar' key={key} onClick={() => getAlbumList(key) } >{key}</a>
        ))}
    </div>
  )
}

export default Sidebar