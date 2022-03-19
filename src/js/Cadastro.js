import React from 'react';

class Cadastro extends React.Component{
  // Construtor
  constructor(props){
      super(props);
      this.state = {
          nomeCadastro: '',
          emailCadastro: '',
          senhaCadastro: '',
          confirmarSenhaCadastro: '',
          dataCadastro: ''
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
  // Validação do Nome no Formulário de Cadastro
  nomeCadastro = (e) => {
    e.preventDefault();
    this.setState({nomeCadastro: e.target.value});
  };
  // Validação do Email no Formulário de Cadastro
  emailCadastro = (e) => {
    e.preventDefault();
    this.setState({emailCadastro: e.target.value});
  };
  // Validação da Senha no Formulário de Cadastro
  senhaCadastro = (e) => {
    e.preventDefault();
    this.setState({senhaCadastro: e.target.value});
  };
  // Validação da Confirmação de Senha no Formulário de Cadastro
  confirmarSenhaCadastro = (e) => {
    e.preventDefault();
    this.setState({confirmarSenhaCadastro: e.target.value});
  };
  // Validação da Data de Nascimento no Formulário de Cadastro
  dataCadastro = (e) => {
    e.preventDefault();
    this.setState({dataCadastro: e.target.value});
  };
  // Submição do Formulário de Cadastro
  cadastrar = (e) => {
    e.preventDefault();
  };
  // Formulário de Cadastro
  render(){
    return(
        <div>
            <div className="formulario">
                <a className="formulario-aba formulario-aba-nao-selecionada" href="#login" onClick={this.login}>Login</a>
                <a className="formulario-aba" href="#cadastro" onClick={this.cadastro}>Cadastro</a>
                <form name="formulario-cadastro" id="cadastro" className="formulario-form" onSubmit={this.cadastrar}>
                    <input type="text" name="nome-cadastro" className="formulario-input" placeholder="Nome" value={this.state.nomeCadastro} onChange={this.nomeCadastro} required/>
                    <input type="email" name="email-cadastro" className="formulario-input" placeholder="Email" value={this.state.emailCadastro} onChange={this.emailCadastro} required/>
                    <input type="password" name="senha-cadastro" className="formulario-input" placeholder="Senha" value={this.state.senhaCadastro} onChange={this.senhaCadastro} required/>
                    <input type="password" name="confirmar-senha-cadastro" className="formulario-input" placeholder="Confime a senha" value={this.state.confirmarSenhaCadastro} onChange={this.confirmarSenhaCadastro} required/>
                    <input type="date" name="data-cadastro" className="formulario-input" value={this.state.dataCadastro} onChange={this.dataCadastro} required/>
                    <input type="submit" className="formulario-button" value="Cadastrar"/>
                </form>
            </div>
        </div>
    )
  }
}

export default Cadastro;
