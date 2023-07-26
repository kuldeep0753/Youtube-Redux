import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img src={thumbnails.medium.url} alt="loading" className='rounded-lg' />
      {/* <p>time</p> */}
      {/* <div>
        <h3>title</h3>
        <div className='flex'>
        <p>Views</p>
        <p>1 month ago</p>
        </div>
       </div> */}
      <ul>
          <li className='font-bold py-2'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} Views</li>
      </ul> 
    </div>
  )
}
   
export default VideoCard