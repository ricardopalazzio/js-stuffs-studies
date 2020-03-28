import React , { useState } from 'react';
import { FiLogIn }  from 'react-icons/fi'
import { Link , useHistory } from 'react-router-dom';

import './styles.css'
import api from '../../services/api'
import logoImg  from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

const Logon = () => {
    const history   = useHistory();
    const [id , setId]  = useState('');
 

    async function handleDefault(e){
        e.preventDefault();
        console.log(id);
        try {
            const response = await api.post('session' ,  { id });
            localStorage.setItem('ongId' , id);
            localStorage.setItem('ongName' , response.data.name);

            history.push('/profile')
        }catch(err) {
            alert('login fail')
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the Noia"/>
                <form onSubmit={handleDefault}>
                    <h1>Login</h1>

                    <input placeholder="Enter with your ID"
                    value={id}
                    onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit"> SingIn </button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                         Join us 
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt="Noia" />
        </div>

     );
}
 
 

export default Logon;