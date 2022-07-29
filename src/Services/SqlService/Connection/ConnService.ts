import sql from 'mssql'

const settings = 
{
    user: "SA",
    password: "10deagosto",
    server: "localhost",
    database: "CVM_GPA_CTN_01",
     options: {        

        trustServerCertificate: true,
    } 
};

class Connection 
{        
    async GetConnection()     
    {   
        return await sql.connect(settings); 
    }    
}

const conn = new Connection().GetConnection();
export default conn;