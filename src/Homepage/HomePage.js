import React from 'react';
import img from '../image/download.jpg';
import axios from 'axios';

class HomePage extends React.Component{
    constructor(){
        super();
        this.state={
           data: {
               videosData: []
              
           },
           tag: "",
           comp: false,
           all: true
        }
    }

    componentDidMount()
    {
        const apiUrl = 'https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
              this.setState({
                  data: data
              })
          })
    }

    handleClick=t=>event=>{
        event.preventDefault();
        this.setState({
            comp: true,
            tag: t,
            all: false
        })
    }

    showAll=event=>{
        event.preventDefault();
        this.setState({
            all: true,
            comp: false,
            tag: ""
        })
    }

    render(){        
        return(
            <div>
            
                <div className="jumbotron" style={{backgroundImage: `url(${img})`,width: "100%"}}>
                    
                    <h3 className="lead" style={{width: "30rem",color: "white",marginBottom: "20px",fontSize: "20px"}}><b>Diagonosis and monitoring of airway diseases in the era of social distancing</b></h3>
                    
                    
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Watch Now</a>
                    </p>
                   
                    <nav style={{textAlign: "center"}}>
                    <a href="#" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}} onClick={this.showAll}>Favourites</a> 
                    <a href="#" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}} onClick={this.handleClick("tb")}>Resp. Devices</a> 
                    <a href="#" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}} onClick={this.handleClick("cancer")}>CT Scans</a> 
                    <a href="#" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}} onClick={this.handleClick("copd")}>Neurology</a>
                    </nav>
                   
                </div>


               
               
                <div class="container">
                    <div>
                        {this.state.all &&
                        <div className="row">
                            {this.state.data.videosData.map((obj,key)=>(
                                <>
                               <div style={{backgroundImage: `url(${obj.thumbnailUrl})`,width: "25rem",backgroundSize: "25rem",margin: "20px",marginBottom: "20px",marginRight: "20px"}} className="col-md-2">
                                    <h4 style={{padding: "30px 30px"}}>{obj.title}</h4>
                                    <a href={obj.videolink} className="btn btn-primary" style={{}}>Video</a>
                                </div>
                                
                                </>
                            ))}
                        </div>
                        }
                         {this.state.comp &&
                        <div className="row">
                            {this.state.data.videosData.filter(obj=>obj.tags.includes(this.state.tag)).map((obj,key)=>(
                                <>
                               <div style={{backgroundImage: `url(${obj.thumbnailUrl})`,width: "25rem",backgroundSize: "25rem",margin: "20px",marginBottom: "20px",marginRight: "20px"}} className="col-md-2">
                                    <h4 style={{padding: "30px 30px"}}>{obj.title}</h4>
                                    <a href={obj.videolink} className="btn btn-primary" style={{}}>Video</a>
                                </div>
                                
                                </>
                            ))}
                        </div>
                        }
                        
                    </div>
                </div>
                    
            
        </div>
)}}

export default HomePage;