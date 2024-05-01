import { useState} from   'react';

import { useAuth } from '../../hooks/auth';
import  { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';

import { FiMail, FiLock} from 'react-icons/fi';

import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';


export function Signin( {}){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");



  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }
 


  return (

    <Container>
      <Form>

      <h1>
        Rocketnotes
      </h1>
       <p>Aplicação para salvar e gerenciar os seus links úteis</p>

       <h2>Faça seu login </h2>

       <Input 
        placeholder = 'email'
        type = 'text'
        icon = {FiMail}
        onChange = {e => setEmail(e.target.value)}
       
       >
       
       </Input>
       <Input 
        placeholder = 'senha'
        type = 'password'
        icon = {FiLock}
        onChange = {e => setPassword(e.target.value)}

       
       >
       
       </Input>

      <Button title = 'Entrar' onClick = {handleSignIn}/>

      <Link to = "/register ">Criar Conta</Link>

      </Form>

      <Background/>


    </Container>

  );


};