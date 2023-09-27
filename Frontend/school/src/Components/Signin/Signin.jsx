import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  Select
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Signin() {
  const [login, setLogin] = useState("signin")
  const location = useLocation();
  const nav=useNavigate();
  useEffect(()=>{
    if(location.pathname=='/studentlogin'){
      setLoginForm({...loginForm,type:"student"})
    }else{
      setLoginForm({...loginForm,type:"company"})
    }
  },[location.pathname])
  const [signupForm,setSignupForm]=useState({name:"",email:"",pass:"",type:""});
  const [loginForm,setLoginForm]=useState({email:"",pass:"",type:""});
  const inlineStyle = {
    background: 'linear-gradient(to right, #ae45ae, #f0419b)',
  };
  const signupFunc=()=>{
    if(signupForm.name != ""&& signupForm.email !="" && signupForm.pass !="" && signupForm.type!=""){
      fetch(`https://harlequin-hippo-tam.cyclic.cloud/users/register`,{
        method:"POST",
        body:JSON.stringify(signupForm),
        headers:{
          "Content-Type":"application/json"
        }
      }).then(res=>res.json()).then((res)=>{
        alert(`${res.message}`)
        setLogin("signin")
        nav("/");
      }).catch(err=>console.log(err))
    }else{
      alert("Please fill all the details")
    }
  }
  const loginFunc=()=>{
    if(loginForm.email != "" && loginForm.pass!=""){
      fetch(`https://harlequin-hippo-tam.cyclic.cloud/users/login`,{
        method:"POST",
        body:JSON.stringify(loginForm),
        headers:{
          "Content-Type":"application/json"
        }
      }).then(res=>res.json()).then((res)=>{
        alert(`${res.message}`)
        if(res.token){
          localStorage.setItem("token",res.token)
          localStorage.setItem("username",res.name)
          nav("/");
        }
      }).catch(err=>console.log(err))
    }else{
      alert("Please fill all the details")
    }
  }
  return (
    <div style={inlineStyle}>
      {
        login == "signin" ?
          <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Box
              py={{ base: '0', sm: '8' }}
              px={{ base: '4', sm: '10' }}
              bg={{ base: 'transparent', sm: 'bg.surface' }}
              boxShadow={{ base: 'none', sm: 'md' }}
              borderRadius={{ base: 'none', sm: 'xl' }}
              style={{ backgroundColor: "white" }}
            >
              <Stack spacing="6">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                  <Heading size={{ base: 'md', md: 'lg' }}>LOGIN FORM  FOR {location.pathname=="/studentlogin" ? "STUDENT" : "COMPANY"}</Heading>
                </Stack>
                <div style={{ border: "1px solid", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{  textAlign: 'center', cursor: "pointer", fontSize: "20px", padding: '5px',background : login=="signin" ? 'linear-gradient(to right, #ae45ae, #f0419b)' : "",color: login =="signin" ? "white" : "black" }}>
                    Signin
                  </div>
                  <div onClick={() => { setLogin("signup") }} style={{ border: "1px solid", textAlign: 'center', cursor: "pointer", fontSize: "20px", padding: '5px' }}>
                    Signup
                  </div>


                </div>
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" type="email" value={loginForm.name} onChange={(e)=>{setLoginForm({...loginForm,email:e.target.value})}}/>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="Password">Password</FormLabel>
                    <Input id="Password" value={loginForm.pass}  onChange={(e)=>{setLoginForm({...loginForm,pass:e.target.value})}} type="Password" />
                  </FormControl>
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="text" size="sm">
                    Forgot password?
                  </Button>
                </HStack>
                <Stack spacing="6">
                  <Button onClick={loginFunc}>Sign in</Button>
                </Stack>
              </Stack>
            </Box>
          </Container> : 
          <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Box
              py={{ base: '0', sm: '8' }}
              px={{ base: '4', sm: '10' }}
              bg={{ base: 'transparent', sm: 'bg.surface' }}
              boxShadow={{ base: 'none', sm: 'md' }}
              borderRadius={{ base: 'none', sm: 'xl' }}
              style={{ backgroundColor: "white" }}
            >
              <Stack spacing="6">
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                  <Heading size={{ base: 'xl', md: 'xl' }}>SIGNUP FORM</Heading>
                </Stack>
                <div style={{ border: "1px solid", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div onClick={() => { setLogin("signin") }} style={{ border: "1px solid", textAlign: 'center', cursor: "pointer", fontSize: "20px", padding: '5px' }}>
                    Signin
                  </div>
                  <div style={{ textAlign: 'center', cursor: "pointer", fontSize: "20px", padding: '5px',background : login=="signup" ? 'linear-gradient(to right, #ae45ae, #f0419b)' : "",color: login =="signup" ? "white" : "black"}}>
                    Signup
                  </div>
                </div>
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input id="name" value={signupForm.name} onChange={(e)=>{setSignupForm({...signupForm,name:e.target.value})}} type="name" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input id="email" value={signupForm.email} onChange={(e)=>{setSignupForm({...signupForm,email:e.target.value})}} type="email" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="Password">Password</FormLabel>
                    <Input id="Password" value={signupForm.pass} onChange={(e)=>{setSignupForm({...signupForm,pass:e.target.value})}} type="Password" />
                  </FormControl>
                  <FormControl>
                  <FormLabel htmlFor="type">Type</FormLabel>
                    <Select placeholder='Select type' value={signupForm.type} onChange={(e)=>{setSignupForm({...signupForm,type:e.target.value})}}>
                      <option value='student'>student</option>
                      <option value='company'>company</option>
                    </Select>
                  </FormControl>
                </Stack>
                <Stack spacing="6">
                  <Button onClick={signupFunc}>Sign up</Button>
                </Stack>
              </Stack>
            </Box>
          </Container>
      }

    </div>
  )
}
