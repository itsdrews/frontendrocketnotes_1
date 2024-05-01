import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { api } from '../../service/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Form, Avatar } from './styles';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi';

import { Input } from '../../components/Input';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button';

export function Profile ( ){
  const navigate = useNavigate();
  function handleBack(){
    navigate(-1);
  }
  
  const { user, updateProfile}  = useAuth();
  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const [password0ld,setpassword0ld] = useState();
  const [passwordNew,setpasswordNew] = useState();

  const avatarUrl = user.avatar ?  `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar,setAvatar] = useState(avatarUrl);
  const [avatarFile,setAvatarFile] = useState(null);


  async function handleUpdate(){
    const updated = { 
      name,
      email,
      password: passwordNew,
      old_password:password0ld
    }
    const userUpdated = Object.assign(user,updated)
    await updateProfile({user: userUpdated, avatarFile});
  }
  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }


  return (
    <Container>

    <header>
      <button type="button" onClick={handleBack}>
        <FiArrowLeft/>
      </button>
    </header>
    <Form>
      <Avatar>

        <img 
        src={avatar}
        alt="foto do usuário " />

        <label htmlFor="avatar">
          <FiCamera/>

          <input id = 'avatar'
           type = 'file'
           onChange = { handleChangeAvatar}
          />
        </label>
      </Avatar>
              <Input
              placeholder = 'Nome'
              type = 'text'
              icon = {FiUser}
              value = {name}
              onChange = {e => setName(e.target.value)}

              />
               <Input
              placeholder = 'Email'
              type = 'text'
              icon = {FiMail}
              value = {email} 
              onChange = {e => setEmail(e.target.value)}


              />
               <Input
              placeholder = 'Senha atual'
              type = 'password'
              icon = {FiLock}
              onChange = {e => setpassword0ld(e.target.value)}


              />
               <Input
              placeholder = 'Nova senha'
              type = 'password'
              icon = {FiLock}
              onChange = {e => setpasswordNew(e.target.value)}


              />
              <Button title = 'salvar' onClick = { handleUpdate }/>

    </Form>
    </Container>
  );

};