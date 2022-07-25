import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import List from "./listProdutos";
import { Profile } from "./formProduto";

export interface ListProps {
  produtos: Profile[],
}

export interface EditaProps {
  produtos : Profile[],
  id : number
  childToParent : any
  childToParent2 : any
}

export function EditaProduto(props: EditaProps){ 

  const id  = props.id;
  const [novoTitulo, setnovoTitulo] = useState(props.produtos[id].titulo);
  const [novoValor, setnovoValor] = useState(props.produtos[id].valor);
  const [novaDescricao, setnovaDescricao] = useState(props.produtos[id].descricao);
  const [novaCategoria, setNovaCategoria] = useState(props.produtos[id].categoria);
  
  const categorias = ["Padaria",
  "Alimentos (cereais e grãos)",
  "Congelados e frios",
  "Hortifruti",
  "Limpeza",
  "Higiene pessoal",
  "Bebidas",
  "Papelaria"] 

    const {register, handleSubmit, formState: { errors }} = useForm<Profile>()

    const edita = handleSubmit((data) => {
      data.id = props.id
      props.produtos[props.id] = data;
      console.log('novo titulo', props.produtos);
      props.childToParent2(props.produtos, false)
    })

    const handleChange1 = (event: any) => {
      setnovoTitulo(event.target.value);
      console.log('novo titulo', event.target.value);
    };

    const handleChange2 = (event: any) => {
      setnovoValor(event.target.value);
      console.log('novo valor:', event.target.value);
    };

    const handleChange3 = (event: any) => {
      setnovaDescricao(event.target.value);
      console.log('nova descricao', event.target.value);
    };



  return(
      <div className="form-div">
        {/* Tab nav */}
        <p className="title">Edição de Produtos: {novoTitulo}</p>
        <div className="nav">
          <nav id="tab-form">
              <form className="data-input" onSubmit={edita}>
                  <div className="form-input">
                    <div className="form-container">
                      <label className="titulo">Título:</label>
                      
                      <input {...register("titulo", {required: true})} onChange={handleChange1} value={novoTitulo} type="text" id="titulo" className="inputTitulo" placeholder="Digite o Titulo do Produto" />
                      {
                        errors.titulo && <div className="error"> É necessário informar o título do Produto</div>
                      }
                    </div>
                    <div className="form-container">
                      <label className="categoria" >Categoria:</label>
                      <select {...register("categoria", {required: true})} name="categoria" id="categoria">
                          <option>{novaCategoria}</option>
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
                      <input  {...register("valor", {required: true})} onChange={handleChange2} value={novoValor} pattern="[0-9]+" type="text" id="valor" className="inputValor" placeholder="Digite o Preço do Produto em R$" />
                      {
                        errors.valor && <div className="error"> É necessário informar o Valor do Produto</div>
                      }
                    </div>
                    <div className="form-container">
                      <label className="label-descricao" >Descrição:</label>
                      <textarea  {...register("descricao", {required: true})} onChange={handleChange3} value={novaDescricao} id="descricao" className="textADescricao" />
                      {
                        errors.descricao && <div className="error"> É necessário informar a descrição do Produto</div>
                      }
                    </div>
                  </div>
                  <div className="form-btn">
                    <button onClick={() => props.childToParent(id,false)}>Cancelar</button>
                    <input  type="submit" className="submit-btn" value="Editar" />
                  </div>
              </form>
          </nav>
        </div>
      </div>
  );

};
export default EditaProduto;