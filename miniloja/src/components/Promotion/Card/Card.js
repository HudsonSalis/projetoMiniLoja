import React from "react";
import style from "styled-components";
import { Link } from "react-router-dom";

const PromotionCard = ( {promotion} )  => {
    return(
        <Layout> 
            <Item>
                
                <img alt="Tenis" src={promotion.imgURL}  width="100" height="100"/>
            
                <Info key={promotion.id}>
                    <h1>{promotion.title}</h1>
                    <span>R$ {promotion.price}</span>
                    <footer>
                        <div className="comentario">
                            { promotion.comments.length > 0 && (<div>{promotion.comments[0].comment}</div>)}
                        </div>
                        <div className="comentarios-irParaOsite">
                            {promotion.comments.length} {" "}
                            {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}

                            <div className="goToSite">IR PARA O SITE</div>
                        </div>
                        <Link to={`edit/${promotion.id}`}>Editar </Link>


                    </footer>
                </Info>

            </Item>
        </Layout>
    )
}

export default PromotionCard;


const Layout = style.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 13px;
  

    align-items: center;
    font-family: 'Roboto', sans-serif;
`;

const Item = style.div`
    display: flex;
    width: 100%;
    min-height: 120px;

    border: 1px solid black;
    border-radius: 8px;
    align-items: flex-start;

    img{
        align-self: center;

        margin-left: 10px;
    }
`;

const Info = style.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 15px;
    background-color: white;  
    align-items: flex-start;
    width: 100%;
    

    h1{
        font-size: 20px;
    }
    span{
        font-weight: bold;
        color: blue;
        padding: 6px 0;
    }

    footer{
        display: flex;
        align-items: center;

        width: 100%;

        .comentarios-irParaOsite{
            display:flex;
            margin-left: auto;
            margin-right: 15px;
            align-items: center;
            margin-bottom: 10px;

            .goToSite{
                color: green;
                border: 1px solid blue;
                cursor: pointer;
                margin-left: 5px;
                padding: 5px;
            }
        }

    }
    
`;
