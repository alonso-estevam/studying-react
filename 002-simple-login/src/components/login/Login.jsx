import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import "./login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando  " + username + "senha: " + password);
    }

    return (
        <div className="container">
{/* o padrão dos formulários html é recarregar a página, então usa-se o prevent default para evitar esse comportamento */}
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>
                <div>
                    <input type="email" 
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div>
                    <input 
                    type="password" 
                    name="senha"
                    id="senha"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <div className="recall-forget">
                    <label htmlFor="">
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>Não tem uma conta? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;