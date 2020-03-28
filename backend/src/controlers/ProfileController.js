const connection   = require('../database/connection');
const incidents_table = 'incidents';
module.exports  = {
    async index(request , response) {
        const ong_id  = request.headers.authorization;

        const  incidents  =  await connection(incidents_table)
        .where('ong_id' , ong_id).select('*');

        return response.json(incidents);
        
    }
}