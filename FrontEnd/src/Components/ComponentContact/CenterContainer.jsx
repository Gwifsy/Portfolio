import IconSocial from '../IconSocial.jsx';
import { useState } from 'react';
import { ReactComponent as BgContact } from '@/assets/bg-contact-form.svg';
import * as emailjs from '@emailjs/browser';


const CenterContainer = () => {
    // Déclaration des états pour chaque champ du formulaire
    const [formData, setFormData] = useState({
        prenom: '',
        sujet: '',
        email: '',
        message: ''
    });

    // Gère les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Gère l'envoi du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_i2ngs2c'; // Ton Service ID d'EmailJS
        const templateID = 'template_wyu87qx'; // Ton Template ID
        const userID = 'nDbo_orzSJcjPm1Sv'; // Ton User ID

        // Utilise emailjs.sendForm pour envoyer les données du formulaire
        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log('Email envoyé:', result.text);
                alert('Message envoyé avec succès !');

                // Réinitialise le formulaire après envoi
                setFormData({
                    prenom: '',
                    sujet: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'email:', error);
                alert('Une erreur est survenue lors de l\'envoi du message.');
            });
    };

    return (
        <div className="contact-form">
            <IconSocial className="icon-social-contact" />
            <form className='form-contact-container' onSubmit={handleSubmit}>
                <BgContact className="bg-form" />
                <div className="form-group ">
                    <label className='label-columne input-font' htmlFor="prenom">Prénom
                        <div className="input-wrapper-white">
                            <input className='input-padding-white'
                                type="text"
                                id="prenom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </label>
                    <label className='label-columne input-font' htmlFor="sujet">Sujet
                        <div className="input-wrapper">
                            <input className='input-padding'
                                type="text"
                                id="sujet"
                                name="sujet"
                                value={formData.sujet}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </label>
                </div>


                <div className="form-group email-margin-top">
                    <label className='label-column input-font' htmlFor="email">Email
                        <div className="input-wrapper">
                            <input className='input-padding'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </label>
                </div>

                <div className="form-group message-margin-top">
                    <label className='label-column input-font' htmlFor="message">Message
                        <div className="input-wrapper-white-message">
                            <textarea className='input-padding-message'
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <button className='input-padding input-font' type="submit">Envoyer</button>
                        </div>
                    </label>

                </div>
            </form >
        </div >
    );
};

export default CenterContainer;
