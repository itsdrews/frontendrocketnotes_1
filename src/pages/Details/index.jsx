import { Container,Links, Content} from "./styles";

import { api } from "../../service/api";

import { Header} from '../../components/Header';

import { Button} from "../../components/Button";

import { ButtonText } from "../../components/ButtonText";

import { Section} from "../../components/Section";

import { Tag } from "../../components/Tags";

import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect} from "react";

export  function Details (){
  const [data,setData]= useState(null)
  const params = useParams();
  const navigate = useNavigate();
  function handleBack(){
    navigate(-1)

  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja remover a nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }
  useEffect(()=>  {
    async function fetchNote(){
      const response = await api.get( `/notes/${params.id}`);
      setData(response.data)
    }
    fetchNote();
  },[])

  return (
    <Container>
      <Header/>


      {
        data && 
      <main>
        <Content>


      <ButtonText onClick = {handleRemove} title="Excluir nota"></ButtonText>

      <h1>
        {data.title}
      </h1>
      <p>
        {data.description}
      </p>
      {

        data.links&&
      <Section title = "Links úteis" >
      <Links  >

      {
        data.links.map(link =>(

        <li key = {String(link.id)}>
          <a href={link.url}>{link.url}t</a>
        </li>
        ))

      }
      
       
      </Links >
      </Section>
      }

      {
        data.tags&&
      <Section title="Marcadores">
        {
          data.tags.map(tag =>(
            
            <Tag 
            key = {String(tag.id)}
            title={tag.name}></Tag>
          ))

        }

      </Section>

      }

      <Button onClick ={handleBack} title= "Voltar"/>
    

        </Content>
      </main>

      }
    </Container>
  )
}