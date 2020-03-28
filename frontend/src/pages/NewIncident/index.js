import React , { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { FiArrowLeft }  from 'react-icons/fi';
import logoImg  from '../../assets/logo.svg';
import './styles.css'
import api from '../../services/api';

const NewIncident = () => {

    const history = useHistory();


    const [title ,  setTitle] = useState('');
    const [description ,  setDescription] = useState('');
    const [value ,  setValue] = useState('');    
    const ongId  = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }
        try{

            await api.post('incidents'  , data , 
            { 
                headers: {
                    authorization:  ongId,
                }
            });
            history.push('/profile');
        }catch(err){
            alert('ErroR')
        }

    }

    return ( 

        <div className="new-incident-container">
        <div className="content">
            
            <section>
                <img src={logoImg} alt="Be teh Noia"/>
                <h1>New</h1>
                <p>Describe it detiled</p>
                
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041"/>
                     Back to Home
                </Link>
            </section>
            

            <form onSubmit={handleNewIncident}>
                <input placeholder="Titulo do caso"
                value={title}
                onChange={e => setTitle(e.target.value)} />
                <textarea  placeholder="Descricao"
                value={description}
                onChange={e => setDescription(e.target.value)} />
                <input placeholder="Valor em reais"
                value={value}
                onChange={e => setValue(e.target.value)} />
                <button className="button" type="submit" >Submit</button>
            </form> 

        </div>        

    </div>
    );
}
 
export default NewIncident;