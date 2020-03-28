import React ,  {useState} from 'react'
import { Link , useHistory } from 'react-router-dom';
import { FiArrowLeft }  from 'react-icons/fi';
import logoImg  from '../../assets/logo.svg';
import './styles.css'

import api from '../../services/api'

export default function Register() {
  const history = useHistory();


   const [name ,  setName] = useState('');
   const [email ,  setEmail] = useState('');
   const [whatsapp ,  setWhatsApp] = useState('');
   const [city ,  setCity] = useState('');
   const [uf ,  setUf] = useState(''); 

   async function handlerRegister(event) {
        event.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        console.log(data);

        try {
            const response  =  await api.post('ongs', data);
            history.push('/');
        }catch(err){
            console.log(err)
        }finally{
            console.log('be the noia')
        }


    }

    return(
        <div className="register-container">
            <div className="content">
                
                <section>
                    <img src={logoImg} alt="Be teh Noia"/>
                    <h1>Register</h1>
                    <p>Register  and help people to find the NOIA</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                         Back to Sigin
                    </Link>
                </section>
                

                <form onSubmit={handlerRegister}>
                    <input placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail"
                         value={email}
                         onChange={e => setEmail(e.target.value)} />
                    <input placeholder="WhatsApp" 
                     value={whatsapp}
                     onChange={e => setWhatsApp(e.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}  />
                        <input placeholder="Uf" style={{width: 80}} 
                        value={uf}
                        onChange={e => setUf(e.target.value)} />
                    </div>

                    <button className="button" type="submit" >Submit</button>
                </form> 

            </div>        

        </div>
    );
}  