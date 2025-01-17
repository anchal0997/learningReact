import React,{Component} from 'react';
import PROJECTS from './data/projects'


class Project extends Component{
    render(){
        console.log("this.props"+this.props+"\n");

        const{title,image,description}=this.props.project;
        return(
            <div style={{display:'inline-block' ,width:300,margin:10}}><h3>{title}</h3><img src={image} alt='profile' style={{width:200,height:120}}></img><p>{description}</p></div>
        )
    }
}

class Projects extends Component{
    render(){
        return (
            <div>
                <h2>HIGHLIGHTED PROJECTS</h2>
                <div >
                   { PROJECTS.map(PROJECT => {
                        return(
                            <Project key={PROJECT.id} project={PROJECT}/>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default Projects;