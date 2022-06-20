import React from 'react'; 
import * as C from './style';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import ButtonSignout from '../ButtonSignout';
import Logo from '../../assets/logoNsBrazil.png';

const Sidebar = () => {

  const {signout} = useAuth();
  const navigate = useNavigate();


  return (

    <C.Side>
      <C.Img src={Logo} style={{objectFit: 'contain'}}/>

      <ButtonSignout Text="sair" onClick={() => [signout(), navigate("/")]}> 
          Sair
    </ButtonSignout>

    </C.Side>
  )
}

export default Sidebar
