import React from 'react';

class Login extends React.Component{
  // Construtor
  constructor(props){
      super(props);
      this.state = {
          emailLogin: '',
          senhaLogin: ''
      };
  }
  // Muda para a Aba de Login
  login = (e) => {
    e.preventDefault();
    this.props.aba(true);
  }
  // Muda para a Aba de Cadastro
  cadastro = (e) => {
    e.preventDefault();
    this.props.aba(false);
  }
  // Validação do Nome no Formulário de Login
  emailLogin = (e) => {
    e.preventDefault();
    this.setState({emailLogin: e.target.value});
  };
  // Validação da Senha no Formulário de Login
  senhaLogin = (e) => {
    e.preventDefault();
    this.setState({senhaLogin: e.target.value});
  };
  // Submição do Formulário de Login
  entrar = (e) => {
    e.preventDefault();
  };
  // Formulário de Login
  render(){
    return(
        <div>
            <div className="formulario">
                <a className="formulario-aba" href="#login" onClick={this.login}>Login</a>
                <a className="formulario-aba formulario-aba-nao-selecionada" href="#cadastro" onClick={this.cadastro}>Cadastro</a>
                <form name="formulario-login" id="login" className="formulario-form" onSubmit={this.entrar}>
                    <input type="email" name="email-login" className="formulario-input" placeholder="Email" value={this.state.emailLogin} onChange={this.emailLogin} required/>
                    <input type="password" name="senha-login" className="formulario-input" placeholder="Senha" value={this.state.senhaLogin} onChange={this.senhaLogin} required/>
                    <input type="submit" className="formulario-button" value="Entrar"/>
                </form>
            </div>
        </div>
    )
  }
}

export default Login;