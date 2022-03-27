import React from 'react'
import "./post.css"
import Avatar from "@material-ui/core/Avatar"
export const Post = ({imageUrl,username,caption}) => {
  return (
    <div className='post'>
        <div className='post_header'>
        <Avatar 
        className='post_avatar'
        src=''
        />
        
        <h3>{username}</h3>
        </div>
        <img className='post_image' src={imageUrl}/>
    
    <h4 className='post_text'><strong>{username}</strong> :{caption}</h4>
    </div>
  )
}
