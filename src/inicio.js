import React from 'react';
import './Inicio.css'; // Importe o arquivo CSS

function Inicio() {
    return (
        <section>
            <div className='inicio'>
                <div className="ctaDiv">
                    <h1><span style={{ color: '#d4ffcf' }}>A Fórmula do</span> Sucesso Online</h1>
                    <p>O segredo do sucesso online está ao seu alcance! Deixe nosso time de especialistas em Marketing Digital guiá-lo para o topo</p>


                    <a style={{ textDecoration: 'none', color: '#1d1d2d' }} href="https://wa.me/556192368688?text=Ola!+Vi+sua+Landing+Page+e+gostaria+de+saber+mais+sobre+os+Serviços">
                        <button >
                            Contrate-nos
                        </button>
                    </a>
                </div>
            </div>

            <div className="ctaDiv-Mobile">
                <h1><span style={{ color: '#d4ffcf' }}>A Fórmula do</span> Sucesso Online</h1>

                <p>O segredo do sucesso online está ao seu alcance! Deixe nosso time de especialistas em Marketing Digital guiá-lo para o topo</p>
                <a style={{ textDecoration: 'none', color: '#1d1d2d' }} href="https://wa.me/556192368688?text=Ola!+Vi+sua+Landing+Page+e+gostaria+de+saber+mais+sobre+os+Serviços">
                    <button >
                        Contrate-nos
                    </button>
                </a>
            </div>
        </section>

    );
}

export default Inicio;
