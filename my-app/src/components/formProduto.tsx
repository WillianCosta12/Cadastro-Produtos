import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import List from "./listProdutos";


export type Profile = {
  titulo: string
  id: number
  categoria: string
  valor: number
  descricao: string
};


export function Form(){ 

  const categorias = ["Padaria",
    "Alimentos (cereais e grãos)",
    "Congelados e frios",
    "Hortifruti",
    "Limpeza",
    "Higiene pessoal",
    "Bebidas",
    "Papelaria"]

    let produtos: Profile[]
    produtos = [
      {
        titulo: "Sabão",
        id: 0,
        categoria: "Limpeza",
        valor: 2.50,
        descricao: "Produto de Limpeza"
      },
      {
        titulo: "Pipoca",
        id: 1,
        categoria: "Alimentos",
        valor: 2.50,
        descricao: "Comida"
      },
    ]

  return(
    <div className="main-index">
      <div className="form-div">
        {/* Tab nav */}
        <p className="title">Cadastro de Produtos</p>
        <div className="nav">
          <nav id="tab-form">
              <form className="data-input">
                  <div className="form-input">
                    <div className="form-container">
                      <label className="titulo">Título:</label>
                      <input type="text" id="titulo" className="inputTitulo" placeholder="Digite o Titulo do Produto" />
                    </div>
                    <div className="form-container">
                      <label className="categoria" >Categoria:</label>
                      <select name="categoria" id="categoria">
                          <option value="">Selecione a categoria do Produto</option>
                          {categorias.map((id, index) => 
                            <option> {categorias[index]} </option>)
                          }
                      </select>
                    </div>
                    <div className="form-container">
                      <label className="valor">Valor:</label>
                      <input type="text" id="valor" className="inputValor" placeholder="Digite o Preço do Produto em R$" />
                    </div>
                    <div className="form-container">
                      <label className="label-descricao" >Descrição:</label>
                      <textarea id="descricao" className="textADescricao" />
                    </div>
                  </div>
                  <div className="form-btn">
                    <input  type="submit" className="submit-btn" value="Cadastrar" />
                  </div>
              </form>
          </nav>
        </div>
      </div>
      <div className="conteudo">
          <List produtos={produtos}></List>
      </div>
    </div>
  );

};
export default Form;