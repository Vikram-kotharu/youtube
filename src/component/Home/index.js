
import axios from 'axios'
import {Component} from 'react'
import SearchBar from '../searchBar'
import VideoLists from '../videoList'
class Home extends Component{

    state = {apidata:[]}

    ontype = async(formValue)=>{
        console.log(formValue)
        const resp = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params:{q:formValue,part:'snippet',maxResults:10,key:'AIzaSyBhFc-uQ2_Pyg0y-tWZQHxFFxOpitzWW5E'}
        })

        console.log(resp.data.items)
        this.setState({apidata:resp.data.items})

    }
    render(){
        return(
            <>
            <div className="container">
                <div className="search-bar ui segment shadow mt-3">
                <SearchBar onSend={this.ontype}/>
             I have total of {this.state.apidata.length} videos according to your search
             <br/>
             <VideoLists videos={this.state.apidata}/>
                </div>
             
            </div>
            
            </>
        )
    }
}

export default Home