import { Filtros } from "./components/Filtros";
import { Produtos } from "./components/Produtos";
import { Carrinho } from "./components/Carrinho";
import styled from "styled-components";
import React from "react";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

class App extends React.Component {
  state = {
    carrinho: [],
    pagina: "produtos",
  };

  onClickAdicionarCarrinho = (produto) => {
    const copiaCarrinho = [...this.state.carrinho];
    copiaCarrinho.push(produto);

    this.setState({ carrinho: copiaCarrinho });
  };

  onClickTrocaPagina = () => {
    const novaPagina = this.state.pagina === "produtos" ? 'carrinho' : 'produtos'

    this.setState({pagina: novaPagina})
  }

  render() {
    return (
      <>
        <AppContainer>
          {this.state.pagina === "produtos" ? (
            <>
              <Filtros />
              <Produtos
                onClickAdicionarCarrinho={this.onClickAdicionarCarrinho}
              />
            </>
          ) : (
            <Carrinho produtosCarrinho={this.state.carrinho} />
          )}
        </AppContainer>
        <button onClick={this.onClickTrocaPagina}>Troca de página</button>
      </>
    );
  }
}

export default App;
