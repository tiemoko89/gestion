import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const ListClient = () => {
    const [clients, setClients] = useState([]);
    console.log('voici le resultat', clients)
    const listClient = async () => {
      const { data } = await axios.get('http://localhost:8081/lister/client/');
      setClients(data)
    }
  
    useEffect(() => {
  
      listClient();
  
    }, []
  
    )
    const supprimerUnClient = async(id) =>{
  
     await axios.delete(`http://localhost:8081/supprimer/client/${id}`);
     listClient();
    }
    return (

        <div className="container">

            <h1>Page principale</h1>
            <a href='/creer-client'>Enregister Un client</a>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenoms</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Adresse</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map((client) => (
                            <tr>
                                <td>{client.nom}</td>
                                <td>{client.prenom}</td>
                                <td>{client.telephone}</td>
                                <td>{client.adresse}</td>
                                <td><a onClick={() => supprimerUnClient(client._id)}>Supprimer</a></td>
                            </tr>
                        )

                        )

                    }

                </tbody>
            </table>
        </div>

    )
};

export default ListClient;