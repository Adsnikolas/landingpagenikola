import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; // Importe a biblioteca Typed.js
import foto from './foto02.png'; // Importe a imagem
import './SobreMim.css';
import { useInView } from 'react-intersection-observer'; // Importe o hook useInView

const SobreMim = () => {
    const typedTextRef = useRef(null); // Ref para o elemento de texto
    const [ref, inView] = useInView({
        triggerOnce: true, // Detectar apenas uma vez
    });

    useEffect(() => {
        if (inView && typedTextRef.current) { // Verifique se o elemento e inView são verdadeiros
            // Texto completo, incluindo quebras de linha
            const text = `
                Especialista em Marketing Digital comprometido com o sucesso dos negócios. Como profissional de Marketing Digital, mergulhei na arte de criar estratégias eficazes, conquistar resultados e construir conexões duradouras com clientes.
                Minha jornada não se resume apenas a números e campanhas, mas a construir parcerias sólidas e entregar soluções de alto impacto.
<br></br>
                Afinal, minha paixão vai além de dominar as técnicas; envolve conectar pessoas.
                Minha missão é clara: guiar empresas rumo ao sucesso online.
                <br></br>

                Compartilho insights, estratégias e experiência para abrir portas para o crescimento do seu negócio.
                Estou comprometido em ajudar você a alcançar seus objetivos no mundo do marketing digital.
            `;

            // Configurações do Typed.js
            const options = {
                strings: [text],
                typeSpeed: 15, // Velocidade de digitação (em milissegundos por caractere)
                backSpeed: 0,  // Velocidade de exclusão (0 para não apagar)
                startDelay: 1000, // Atraso inicial antes da digitação (em milissegundos)
                showCursor: true, // Exibir ou não o cursor de digitação
                cursorChar: "|", // Caractere do cursor de digitação
            };

            // Inicialize o Typed.js no elemento de texto
            const typed = new Typed(typedTextRef.current, options);

            // Lembre-se de destruir o Typed.js quando o componente for desmontado para evitar vazamentos de memória
            return () => {
                typed.destroy();
            };
        }
    }, [inView]);

    return (
        <div className="sobremim" ref={ref}>
            <div className="sobremim-foto" data-aos="zoom-in-up">
                <img src={foto} alt="Sua Foto" />
            </div>
            <div className="sobremim-informacoes">
                <h1>Quem é Nikolas?</h1>
                <p>
                    <span className="typed-text" ref={typedTextRef}></span> {/* Elemento onde o texto digitado será exibido */}
                </p>
            </div>
        </div>
    );
};

export default SobreMim;
