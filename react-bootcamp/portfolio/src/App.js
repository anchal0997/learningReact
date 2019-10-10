import React,{Component} from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
import profile from './assets/profile.png'

//NEVER DIRECTLY MODIFY STATE
//always use SetState
class App extends Component{

    constructor(){
        super();
        this.state={displayBio:false};
        this.readMore=this.readMore.bind(this);
    }

    readMore(){
        this.setState({displayBio:true})
    }
    render(){
        let bio =(<div>
            <h1>More About Me</h1>
        <p>I love MUSIC</p>
    </div>);
    if(!this.state.displayBio)
    {
        bio=(<div>HELLO</div>);
    }
        return(
            <div>
                <img src={profile} alt='profile'></img>
                <h1>ANCHAL</h1>
                <p>
                    I am a girl !!!!!<br />

                    <button onClick={this.readMore}>Read More</button>
                </p>
                {bio}

                <hr/>

                <Projects></Projects>
                <hr />
                <SocialProfiles></SocialProfiles>
            </div>
            
        )
    }

}

// class RegularClass{

// }

// class ComponentClass extends Component{

// }

// const regClass=new RegularClass();
// const compClass=new ComponentClass();



export default App;
