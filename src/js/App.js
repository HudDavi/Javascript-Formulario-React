import React from 'react';
import Login from './Login';
import Cadastro from './Cadastro';

class App extends React.Component{
    // Construtor
    constructor(props){
        super(props);
        this.state = {
            aba: true
        };
    }
    aba = (e) => {
        this.setState({aba: e});
    }
  render(){
        if(this.state.aba){
            return(
                <div>
                    <Login aba={this.aba}/>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Cadastro aba={this.aba}/>
                </div>
            )
        }
    }
}

export default App;