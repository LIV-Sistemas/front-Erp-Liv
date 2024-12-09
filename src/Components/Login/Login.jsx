import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa'
// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


const Login = () => {

    // const [login, setLogin] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    // const navigate = useNavigate();

    // //Requisição para consumir uma API com axious/Função para realizar o login
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post("http://localhost:8080/auth/login", {
    //             login,
    //             password,
    //         });

    //         let token = response.data;

    //         localStorage.setItem("token", token);
    //         navigate("/HomePage")
    //     } catch (err) {
    //         console.log(err)
    //         setError("Usuário ou senha incorreto");
    //     }
    // };

    //corpo do login
    return (
        <div className="container">
            <form className='form-login'>
                <h1>Acesse o sistema</h1>
                <div className="input-field">
                    <input type="text" placeholder="Preencha o Login"/>
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Preencha a Senha"/>
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                {/* </div>
                {error && <p className="error">{error}</p>}
                <div> */}
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login