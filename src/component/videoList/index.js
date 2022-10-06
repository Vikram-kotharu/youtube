
import VideoItem from "../videoItem"

const VideoLists = (props)=>{

    const {videos} = props
    
    const rendered = videos.map(index=>{
        return <VideoItem ans={index}/>
    })

    return <>
        {rendered}
    </>
    
}

export default VideoLists