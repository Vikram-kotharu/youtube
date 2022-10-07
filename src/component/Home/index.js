
import axios from 'axios'
import {Component} from 'react'
import SearchBar from '../searchBar'
import VideoLists from '../videoList'
import VideoDetail from '../videoDetail'
class Home extends Component{

    state = {apidata:[],selectedVideos:null}

    ontype = async(formValue)=>{
        console.log(formValue)
        const resp = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{q:formValue,part:'snippet',maxResults:10,key:'AIzaSyBhFc-uQ2_Pyg0y-tWZQHxFFxOpitzWW5E'}
        })

        console.log(resp.data.items)
        this.setState({apidata:resp.data.items})

    }

    onVideoSelect = (video) =>{
        console.log(video)
        this.setState({selectedVideos:video})

    }
    render(){
        return(
            <>
            <div className="container">
                <div className="search-bar ui segment shadow mt-3">
                <SearchBar onSend={this.ontype}/>
            
             <br/>

             
             <VideoDetail yvideo={this.state.selectedVideos} />
             <VideoLists onVideoSelect={this.onVideoSelect} videos={this.state.apidata}/>

             
             
             

             
             
                </div>
             
            </div>
            
            </>
        )
    }
}

export default Home