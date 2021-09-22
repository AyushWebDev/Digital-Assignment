import React from 'react';
import img from '../image/download.jpg';
import axios from 'axios';

class HomePage extends React.Component{
    constructor(){
        super();
        this.state={
           data: {
               videosData: []
           }
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

    render(){        
        return(
            <div>
            
                <div className="jumbotron" style={{backgroundImage: `url(${img})`,width: "100%"}}>
                    
                    <h3 className="lead" style={{width: "30rem",color: "white",marginBottom: "20px",fontSize: "20px"}}><b>Diagonosis and monitoring of airway diseases in the era of social distancing</b></h3>
                    
                    
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Watch Now</a>
                    </p>
                   
                    <nav style={{textAlign: "center"}}>
                    <a href="/html/" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}}>Favourites</a> 
                    <a href="/css/" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}}>Resp. Devices</a> 
                    <a href="/js/" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}}>CT Scans</a> 
                    <a href="/python/" className="btn btn-success" style={{fontSize: "18px", marginRight: "20px"}}>Neurology</a>
                    </nav>
                   
                </div>


               
               
                <div class="container">
                    <div>
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
                        
                    </div>
                </div>
                    
            
        </div>
)}}

export default HomePage;