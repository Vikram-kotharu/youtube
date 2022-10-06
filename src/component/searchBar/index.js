import { Component } from "react";


class SearchBar extends Component{
    state = {values:""}

    

    onSearch = (e) =>{
        this.setState({values:e.target.value})
        
        
    }

    onSubmit = async(e) =>{
        e.preventDefault()
        this.props.onSend(this.state.values)
        




    }
    render(){
        return(
            <>
                
                    <form className="ui form" action="" method="get" accept-charset="utf-8" onSubmit={this.onSubmit}>
                         <div className="field">
                           <label>Video search</label>
                           <input className="form-control" type="search" name="" id="" value={this.state.values} onChange={this.onSearch}  placeholder='Seach for Any Videos' />
                         </div>
                    </form>
              
                
            </>
        )
    }
}

export default SearchBar