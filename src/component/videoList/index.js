
import VideoItem from "../videoItem"

const VideoLists = (props)=>{

    const {videos,onVideoSelect} = props


    
    const rendered = videos.map(index=>{
        return <VideoItem onVideoSelect={onVideoSelect} ans={index}/>
    })

    return <>
        {rendered}
    </>
    
}

export default VideoLists