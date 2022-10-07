
import './index.css'
const VideoItem = (props) =>{

    const {ans,onVideoSelect} = props
   

    return(
        <>
        <div className='col-lg-12'>
             <div className="row mb-4 p-3 ui segment col-lg-12" onClick={()=>{
            onVideoSelect(ans)
        }}>
            <img className='col-lg-3' height='150px' src={ans.snippet.thumbnails.high.url} alt='image' />
            <div className='col-lg-8'>
            <h4 className="mb-3 mt-2 ml-2 ">{ans.snippet.title}</h4>
            <p className="ml-2 text" >{ans.snippet.channelTitle}</p>

            </div>
            
        </div>
        </div>
       

        </>
    )
}


export default VideoItem