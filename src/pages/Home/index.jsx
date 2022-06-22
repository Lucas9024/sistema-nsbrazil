import React, {useState} from 'react';
import * as C from "./style";
import Sidebar from '../../components/Sidebar';
import User from '../../assets/conecte-se.png';
import Admin from '../../assets/admin.png';
import Relatorio from "../../assets/relatorio.png";
import * as U from "./style-adduser";
import * as A from "./style-addAdmin";
import useAuth from '../../hooks/useAuth';
import  Button  from '../../components/Button/index';
import Input from "../../components/Input/index";

const Home = () => {

  const [stateHome, setStateHome] = useState();

let RegisterUser = () => {


  const { signup } = useAuth();

  const [email, setEmail]  = useState();
  const [emailConf, setEmailConf]  = useState();
  const [senha, setSenha] = useState();
  const [error, setError]  = useState();

  const handleRegister = () => {

    if(!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;

    }else if(email !== emailConf){
      setError("Os emails são diferentes!")
      return;
    }
    const res = signup(email, senha);

    if(res){
      setError(res)
      return;
    }
    alert("Admin cadastrado com sucesso!");



  }
  
  return (
    
    <U.ContainerUser>
    <U.ContentUser>

      
    <br />
        <Input Placeholder="email do aplicador" 
        Value={email}
        type="email"
        onChange={(e)=> [setEmail(e.target.value), setError("")]}
        />
        <Input Placeholder="Confirme o email aplic." 
        Value={emailConf}
        type="email"
        onChange={(e)=> [setEmailConf(e.target.value), setError("")]}
        />

        <Input Placeholder="Digite sua senha" 
        Value={senha}
        type="password"
        onChange={(e)=> [setSenha(e.target.value), setError("")]}
        />
        <Button Text="Cadastrar" onClick={handleRegister}/>
        <U.LabelErrorUser>{error}</U.LabelErrorUser>


    </U.ContentUser>
</U.ContainerUser>
  )
 }
 let RegisterAdmin = () => {


  const { signup } = useAuth();

  const [email, setEmail]  = useState();
  const [emailConf, setEmailConf]  = useState();
  const [senha, setSenha] = useState();
  const [error, setError]  = useState();

  const handleRegister = () => {

    if(!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;

    }else if(email !== emailConf){
      setError("Os emails são diferentes!")
      return;
    }
    const res = signup(email, senha);

    if(res){
      setError(res)
      return;
    }
    alert("Admin cadastrado com sucesso!");



  }
  
  return (
    
    <A.ContainerUser>
    <A.ContentUser>
    <br />
        <Input Placeholder="email do admin" 
        Value={email}
        type="email"
        onChange={(e)=> [setEmail(e.target.value), setError("")]}
        />
        <Input Placeholder="Confirme o email admin" 
        Value={emailConf}
        type="email"
        onChange={(e)=> [setEmailConf(e.target.value), setError("")]}
        />

        <Input Placeholder="Digite sua senha" 
        Value={senha}
        type="password"
        onChange={(e)=> [setSenha(e.target.value), setError("")]}
        />
        <Button Text="Cadastrar" onClick={handleRegister}/>
        <U.LabelErrorUser>{error}</U.LabelErrorUser>


    </A.ContentUser>
</A.ContainerUser>
  )
 }

 return (

  <C.Container>

  <Sidebar />
  <C.Content>
    <C.Blocks>

    <C.Block
  onClick={()=> setStateHome(<RegisterUser />)}
  >

    <C.Img src={User}/>
    <C.Label>
      Cadastro aplicador
    </C.Label>

  </C.Block>
  <C.Block
  onClick={()=> setStateHome(<RegisterAdmin />)}
  >

<C.Img src={Admin} />
    <C.Label>
      Cadastro admin
    </C.Label>

</C.Block>
<C.Block>

<C.Img src={Relatorio} />
<C.Label>
      relatório das obras
</C.Label>


</C.Block>


    </C.Blocks>
 
  {stateHome}

  </C.Content>
 </C.Container>


)
}

export default Home
