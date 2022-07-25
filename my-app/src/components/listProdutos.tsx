import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { Profile } from "./formProduto";



export interface ListProps {
    produtos: Profile[],
    childToParent: any
}

export function List(props: ListProps){ 

    //const [id, setId] = useState(0);
    //const [edicao, setEdicao] = useState(false);

    const [activeContentTab, setActiveContentTab] = useState("Sem Conteúdo");
    const [prods, setProds] = useState<Profile[]>([]);

    const handleTab = (id: string, index:number) => {
      setActiveContentTab(props.produtos[index].descricao);
    };

    
    const editar = (index: string) => {
    }

    const remover = (index: string) => {
        let i = parseInt(index);
        if(props.produtos.length >0 && props.produtos.length >= i){
            setProds(props.produtos.splice(i, 1));
            console.log(props.produtos)
        }
    }

    

    return(
        <div className="main">
            <p className="title">Produtos Listados</p>
            <div className="prod-list">
                {props.produtos.map((id,index) =>
                    <div className="produto">
                        <p className="title"><strong>Título: </strong>{props.produtos[index].titulo}</p>
                        <p><strong>Categoria:</strong> {props.produtos[index].categoria}</p>
                        <p><strong>R$</strong> {props.produtos[index].valor}</p>
                        <p><strong>Descrição:</strong> {props.produtos[index].descricao}</p>
                        <div className="button-list">
                            <button onClick={() => props.childToParent(index,true)}>Editar</button>
                            <button onClick={() =>  remover(""+index)}>Remover</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};
export default List;