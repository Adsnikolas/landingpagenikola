import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Servicos.css';

import trafegopago from './trafegopago.jpg';
import trafegoorganico from './trafegoorganico.jpg';
import socialmidia from './socialmidia.jpg';
import photoshop from './photoshop.jpg';

// Importe os componentes específicos para cada serviço
import ServiceDetailsTrafegoPago from './ServiceDetailsTrafegoPago';
import ServiceDetailsTrafegoOrganico from './ServiceDetailsTrafegoOrganico';
import ServiceDetailsSocialMidia from './ServiceDetailsSocialMidia';
import ServiceDetailsDesignerGrafico from './ServiceDetailsDesignerGrafico';

const Servicos = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);

    const settings = {
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const cards = [
        { title: 'Card 1', description: 'TRAFEGO PAGO', image: trafegopago },
        { title: 'Card 2', description: 'TRAFEGO ORGANICO', image: trafegoorganico },
        { title: 'Card 3', description: 'SOCIAL MIDIA', image: socialmidia },
        { title: 'Card 4', description: 'DESIGNER GRAFICO', image: photoshop },
    ];

    const openModal = (service) => {
        setSelectedService(service);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setSelectedService(null);
    }

    // Mapeie os serviços para os componentes correspondentes
    const serviceComponents = {
        'TRAFEGO PAGO': ServiceDetailsTrafegoPago,
        'TRAFEGO ORGANICO': ServiceDetailsTrafegoOrganico,
        'SOCIAL MIDIA': ServiceDetailsSocialMidia,
        'DESIGNER GRAFICO': ServiceDetailsDesignerGrafico,
    };

    // Defina a variável ServiceDetailsComponent com base no serviço selecionado
    const ServiceDetailsComponent = serviceComponents[selectedService?.description];

    return (
        <div className='services-cont '>
            <h1 className="title-services">
                CONHEÇA NOSSOS SERVIÇOS
            </h1>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="card-container">
                        <div className="card-c" data-aos="flip-left" style={{ background: `url(${card.image})`, backgroundSize: 'cover' }} onClick={() => openModal(card)}>
                            <div className='imagem-ils'></div>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>

            {showModal && selectedService && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>Fechar</button> {/* Botão de fechar */}
                        {ServiceDetailsComponent && (
                            // Renderize o componente correspondente ao serviço selecionado
                            <ServiceDetailsComponent service={selectedService} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Servicos;
