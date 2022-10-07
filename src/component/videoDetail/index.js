


const VideoDetail = (props)=>{
    const {yvideo} = props
    let videoSrc = ''

    if (!yvideo){
         videoSrc = 'https://www.youtube.com/embed/oIy1NGgCk78'
        return <p>Waiting for user action!</p>
    }
     videoSrc = `https://www.youtube.com/embed/${yvideo.id.videoId}`
    return(
        <>
           <div className="ui embed ">
            <iframe src={videoSrc} />
           </div>
           <div className="ui segment">
            <h4>{yvideo.snippet.title}</h4>
            <p>{yvideo.snippet.description}</p>
           </div>
        </>
    )
}

export default VideoDetail