import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Importe os ícones do React Icons
import { FaWhatsapp } from 'react-icons/fa'; // Importe o ícone do WhatsApp

import './ContrateNos.css'; // Estilo CSS para o componente

const ContrateNos = () => {
    return (
        <section className='bg-contrat'>
            <div className="contrate-nos">

                <div className="whatsapp-icon2">
                    <FaWhatsapp size={50} color="#00d420" />
                </div>


                <h2 className="title">Ainda ficou com alguma dúvida?</h2>
                <p className="description">Me chama no WhatsApp, eu mesmo vou te responder, não é nenhuma assistente virtual, bot e muito menos estagiário.</p>
                <div className="links">
                    <a href="https://wa.me/556192368688?text=Ola!+Vi+sua+Landing+Page+e+gostaria+de+mais+sobre+o+Serviço+de+Tráfego+Pago" className="button">Chamar no WhatsApp</a>
                </div>

                {/* Adicione a seção de redes sociais com ícones */}
                <div className="social-links">
                    <a href="https://instagram.com/adsnikolas._?igshid=MzRlODBiNWFlZA==">
                        <FaInstagram size={30} color="#fff" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContrateNos;
