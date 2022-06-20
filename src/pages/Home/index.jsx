import React from 'react';
import {Link} from 'react-router-dom';
import * as C from "./style";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import Sidebar from '../../components/Sidebar';
import User from '../../assets/conecte-se.png';

const Home = () => {

  const {signout} = useAuth();
  const navigate = useNavigate();
  
  return (
    
   <C.Container>
    
    <Sidebar />
    <C.Content>
    <C.Block>

      <C.Img src={User} />

    </C.Block>
    <C.Block>

<C.Img src={User} />

</C.Block>
<C.Block>

<C.Img src={User} />

</C.Block>
    </C.Content>
   </C.Container>
  )
}

export default Home
