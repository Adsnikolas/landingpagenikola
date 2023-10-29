import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Importe os estilos CSS do AOS
import AOS from 'aos';

import './qualidades.css'



function Qualidades() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração das animações em milissegundos
            offset: 200,   // A partir de que ponto da tela as animações devem começar
        });
    }, []);

    AOS.init()
    const cards = [
        { title: 'Estratégias Personalizadas', description: 'Desenvolvemos estratégias de marketing digital sob medida para atender às necessidades exclusivas do seu negócio.' },
        { title: 'Experiência Comprovada', description: 'Contamos com uma equipe de especialistas experientes em marketing digital, com um histórico comprovado de sucesso.' },
        { title: 'Transparência', description: 'Oferecemos monitoramento constante e otimização das campanhas para garantir resultados consistentes.' },
        { title: 'Flexibilidade e Adaptabilidade', description: 'Mantemos nossos clientes informados em cada etapa do processo, fornecendo relatórios detalhados e métricas de desempenho.' },
        { title: 'Ética e Integridade', description: 'Somos capazes de ajustar estratégias rapidamente com base em mudanças no mercado ou nas metas do cliente.' },
        { title: 'Acompanhamento Contínuo', description: 'Oferecemos monitoramento constante e otimização das campanhas para garantir resultados consistentes.' },
        // Adicione mais objetos para mais cards
    ];

    return (
        <section className='qualidades'>

            <h1 className=" qlt-title"  >
                QUALIDADES DE NOSSOS SERVIÇOS
            </h1>

            {cards.map((card, index) => (
                <div key={index} className="card-qualit" data-aos="fade-up">
                    <div className="" >
                        <h1>{card.title}</h1>
                        <p>{card.description}</p>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Qualidades;
