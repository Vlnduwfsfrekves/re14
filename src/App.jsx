import { Component } from "react";
import Searchbar from './Searchbar'
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import {Div} from './App.styled'
import Loader from "./Loader";
import Modal from "./Modal";
export class App extends Component{
    state={
        currentPage:1,
        pages:'',
        status:'none',
        allImages:[],
        hiddenIs:true,
        input:'',
        link:''
    }
    componentDidMount(){
        document.addEventListener('keydown',(e)=>{
            if(e.key==='Escape'){
                this.setState({hiddenIs:true})
            }
        })
    }
    componentWillUnmount(){
        document.removeEventListener('keydown',(e)=>{
            if(e.key==='Escape'){
                this.setState({hiddenIs:true})
            }
        })
    }
    inputCh=(input)=>{
        this.setState({input:input})
    }
    onSubmit=async(e)=>{
        e.preventDefault()
        e.currentTarget.reset()
        this.setState({status:'load',allImages:[]})
        await fetch(`https://pixabay.com/api/?q=${this.state.input}&page=1&key=39207344-802fb38289e47f3cf2d375300&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r=>r.json())
        .then(res=>{this.setState({allImages:res.hits,currentPage:1})})
        .finally(()=>{this.setState({status:'alreadyLoad'})})
    }
    clickIm=(e)=>{
        this.setState({hiddenIs:false,link:e.target.src})
    }
    clBackdrop=(e)=>{
        if(e.target===e.currentTarget){
            this.setState({hiddenIs:true})
        }
    }
    loadMore=async()=>{
        this.setState({status:'load'})
        await fetch(`https://pixabay.com/api/?q=${this.state.input}&page=${this.state.currentPage+1}&key=39207344-802fb38289e47f3cf2d375300&image_type=photo&orientation=horizontal&per_page=12`)
        .then(r=>r.json())
        .then(res=>this.setState({allImages:[...this.state.allImages,...res.hits],currentPage:this.state.currentPage+1}))
        .finally(()=>this.setState({status:'alreadyLoad'}))
    }
    render(){
        return(
            <Div>
                <Searchbar inputCh={this.inputCh} onSubmit={this.onSubmit}/>
                <ImageGallery clickButton={this.clickIm} items={this.state.allImages}/>
                <Loader status={this.state.status}/>
                <Button status={this.state.status} loadmore={this.loadMore}/>
                <Modal input={this.state.input} clBackdrop={this.clBackdrop} hiddenIs={this.state.hiddenIs} link={this.state.link}/>
            </Div>
        )
    }
}
export default App;