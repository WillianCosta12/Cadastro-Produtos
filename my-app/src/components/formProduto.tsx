import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import List from "./listProdutos";
import editaProduto, { EditaProduto } from "./editaProduto";


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

    const [produtos, setProdutos] = useState<Profile[]>([]);

    //let produtos: Profile[]
    /*produtos = [
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
    ]*/

    const [count, setCount] = useState(0);
    const [editando, setEditando] = useState(99999);
    const [editandoB, setEditandoB] = useState(false);

    const {register, handleSubmit, formState: { errors }} = useForm<Profile>()

    const cadastro = handleSubmit((data) => {
      data.id = count
      produtos[count] = data;
      setCount(count + 1)
    })

    const childToParent = (id: number, ed: any) => {
      setEditandoB(ed)
      setEditando(id)
    }

    const childToParent2 = (p: Profile[], ed: any) => {
      setEditandoB(ed);
      setProdutos(p);
    }

    const teste = () =>{
      if(editandoB){

      }
    }
    const editaMode = (
    <EditaProduto  produtos={produtos} id={editando} childToParent={childToParent} childToParent2={childToParent2}></EditaProduto>)

    const nadaMode = (
      <br></br>
    )

    const formMode = (
      <div className="form-div">
        {/* Tab nav */}
        <p className="title">Cadastro de Produtos</p>
        <div className="nav">
          <nav id="tab-form">
              <form className="data-input" onSubmit={cadastro}>
                  <div className="form-input">
                    <div className="form-container">
                      <label className="titulo">Título:</label>
                      
                      <input {...register("titulo", {required: true})} type="text" id="titulo" className="inputTitulo" placeholder="Digite o Titulo do Produto" />
                      {
                        errors.titulo && <div className="error"> É necessário informar o título do Produto</div>
                      }
                    </div>
                    <div className="form-container">
                      <label className="categoria" >Categoria:</label>
                      <select {...register("categoria", {required: true})} name="categoria" id="categoria">
                          <option value="">Selecione a categoria do Produto</option>
                          {categorias.map((id, index) => 
                            <option> {categorias[index]} </option>)
                          }
                      </select>
                      {
                        errors.categoria && <div className="error"> É necessário selecionar a categoria do Produto</div>
                      }
                    </div>
                    <div className="form-container">
                      <label className="valor">Valor:</label>
                      <input  {...register("valor", {required: true})} pattern="[0-9]+" type="text" id="valor" className="inputValor" placeholder="Digite o Preço do Produto em R$" />
                      {
                        errors.valor && <div className="error"> É necessário informar o Valor do Produto</div>
                      }
                    </div>
                    <div className="form-container">
                      <label className="label-descricao" >Descrição:</label>
                      <textarea  {...register("descricao", {required: true})} id="descricao" className="textADescricao" />
                      {
                        errors.descricao && <div className="error"> É necessário informar a descrição do Produto</div>
                      }
                    </div>
                  </div>
                  <div className="form-btn">
                    <input  type="submit" className="submit-btn" value="Cadastrar" />
                  </div>
              </form>
          </nav>
        </div>
      </div>
    )

  return(


    <div className="main-index">
        
      <br/>
      { editandoB ? editaMode : formMode}
      <div className="conteudo">
      <List  childToParent={childToParent} produtos={produtos}></List>
      </div>
    </div>

   
  );

};

/*
 MENU, tá ficando torto quando coloca

    <div className="menu-class">
      <div className="item-class">
      <img src="icon-supermarket-white.png" alt="Minha Figura" width="50" height="50"/>
      </div>
       <div className="item-class-2">
         Bem Vindo! Cadastre seus produtos.
       </div>
      </div>

*/
export default Form;