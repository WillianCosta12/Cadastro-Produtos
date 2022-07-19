import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { Profile } from "./formProduto";

export interface ListProps {
    produtos: Profile[]
}

export function List(props: ListProps){ 

    const [activeContentTab, setActiveContentTab] = useState("Sem Conteúdo");

    const handleTab = (id: string, index:number) => {
      setActiveContentTab(props.produtos[index].descricao);
    };


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
                            <button>Editar</button>
                            <button>Remover</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};
export default List;