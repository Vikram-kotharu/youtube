

const VideoItem = (props) =>{

    const {ans} = props
   

    return(
        <>
        <div>
            <img height='100px' src={ans.snippet.thumbnails.high.url} alt='image' />
            <h1 className="mb-3">{ans.snippet.title}</h1>
        </div>

        </>
    )
}


export default VideoItem