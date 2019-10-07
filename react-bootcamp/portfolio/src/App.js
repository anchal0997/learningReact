import React,{Component} from 'react';


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
            <h1>ANOTHER PARA</h1>
        <p>I love MUSIC</p>
    </div>);
    if(!this.state.displayBio)
    {
        bio=(<div>HELLO</div>);
    }
        return(
            <div>
                <h1>ANCHAL</h1>
                <p>
                    I am a girl !!!!!

                    <button onClick={this.readMore}>Read More</button>
                </p>
                {bio}
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
