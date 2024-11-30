import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Formulaire = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ nom: "", prenom: "", telephone: "", adresse: "" });
    const [error, setError] = useState("");


    const enregistrerUnClient = async (e) => {
        e.preventDefault();
        if (!formData.nom) {
            setError("le champ nom est obligatoire");
            return;
        }

        if (!formData.prenom) {
            setError("le champ prenom est obligatoire");
            return;
        }

        if (!formData.telephone) {
            setError("le champ telephone est obligatoire");
            return;
        }

        if (!formData.adresse) {
            setError("le champ adresse est obligatoire");
            return;
        }

        try {
            await axios.post('http://localhost:8081/enregistrer/client', formData); // Pas besoin de définir `Content-Type`.
            console.log("Client enregistré avec succès !");
            navigate('/')
        } catch (error) {
            console.error("Erreur lors de l'enregistrement :", error);
        }
    };

    const hanldeInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="container">
            <h1>Formulaire</h1>

            <form className="row g-3 needs-validation" onSubmit={enregistrerUnClient}>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">
                        Nom
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="nom"
                        value={formData.nom}
                        onChange={hanldeInputChange}
                    />
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">
                        Prenom
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="prenom"
                        value={formData.prenom}
                        onChange={hanldeInputChange}
                    />
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustomUsername" className="form-label">
                        Adresse
                    </label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
                            @
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="inputGroupPrepend"
                            name="adresse"
                            value={formData.adresse}
                            onChange={hanldeInputChange}
                        />
                        {error && <p style={{color: 'red'}}>{error}</p>}
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">
                        Telephone                 </label>
                    <input
                        type="text"
                        className="form-control"
                        name="telephone"
                        value={formData.telephone}
                        onChange={hanldeInputChange}
                    />
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
                
                <div className="col-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="text"
                            name="adresse"
                            value={formData.adresse}
                            onChange={hanldeInputChange}
                        />
                          {error && <p style={{color: 'red'}}>{error}</p>}
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                        Enregistrer un client
                    </button>
                </div>
            </form>

        </div>
    )
}
export default Formulaire;