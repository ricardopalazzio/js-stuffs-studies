const connection   = require('../database/connection');
const { v4: uuidv4 } = require('uuid');
module.exports = {
    async index(request , response) {
        const ongs  = await connection('ongs').select('*');

        response.json(ongs);
    
    },
    async create(request , response) {

        const { name, email , whatsapp , city , uf}  = request.body;
        const id  =  uuidv4() ;
    
        await connection('ongs').insert(
            {
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            }
        );
          
        console.log(  );
        
        response.json( { id });

    }
}