import { useState, useEffect } from 'react';
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material';
import './styles.css'

interface GithubResponse {
  id: number;
  bio: string;
  login: string;
}

export const Login = () => {
    const [contador, setContador] = useState(0)
    const [info, setInfo] = useState<GithubResponse | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    // Form
    const [name, setName] = useState('');
  
    useEffect(() => {
      console.log('name', name);
    }, [name]);
  
    useEffect(() => {
      // fetch('https://api.github.com/users/gustavo-cauzzi')
      // .then(response => response.json())
      // .then(responseBody => {
      //   setInfo(responseBody)
      //   setIsLoading(false)
      // })
  
      const getData = async () => {
        const response = await api.get('/users/gustavo-cauzzi')
        setInfo(response.data)
        setIsLoading(false)
      }
  
      getData()
    }, [])
  
    const handleIncrement = () => {
      setContador(contador + 1)
    }
  
    const handleSaveUser = () => {
      // TODO: save
    }
  
    // const handleLogin = () => {
    //   // TODO: Request do login
    //   const data = { jwt: 'batata' }
    //   api.defaults.headers['Authorization'] = `Bearer ${data.jwt}`
    // }
  
    const handleGoToSignIn = () => {
        navigate('/signin')
    }
  

    return (

    <div className="container">
        <p>
            Contador {contador}
        </p>
        <Button onClick={handleIncrement} variant="outlined">
            Incrementar
        </Button>
        <Button onClick={handleIncrement} variant="contained">
            Incrementar
        </Button>
        <Button onClick={handleGoToSignIn}>
            Criar seu usuario
        </Button>

    <form onSubmit={(event) => {
      event.preventDefault()
      handleSaveUser()
    }}>
      <TextField label="Name" type="text" value={name} onChange={event => setName(event.target.value)} />

      <button>Save</button>
    </form>
  </div>
    )
}