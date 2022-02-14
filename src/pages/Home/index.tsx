import React from "react";
import hero from "../../media/images/handbag_hero.png";
import trunk from "../../media/images/trunk.jpg";
import wallet from "../../media/images/wallet.jpg";
import fanny_pack from "../../media/images/fanny_pack.jpg";
import "./home.css";

const Home = () => {
    return (
        <div>
            <div className=''>
                <div className='center-vertical width-800px max-width-100 margin-side-auto'>
                    <div>
                        <h1 className='font-70'>Crea tu estilo</h1>
                        <p className='width-600px'>
                            "La moda es la armadura para sobrevivir a la
                            realidad de todos los d&iacute;as"
                        </p>
                        <p className={"bold"}>- Bill Cunningham</p>
                    </div>
                    <img className='flex-right' src={hero} alt={"hero"} />
                </div>
            </div>
            <div className='contrast-txt-bg padding-updown-50px'>
                <h1 className={"center-text"}>Nueva Colecci&oacute;n</h1>
                <p className='width-600px margin-side-auto max-width-80'>
                    Diseños que reflejan tu estilo en todo momento. Conoce ahora
                    nuestros zapatos para mujer
                </p>
                <div className={"center-vertical center-horizontal"}>
                    <div className={"collections"}>
                        <img className="opacity-8" src={trunk} alt='trunk' />
                        <img className="opacity-8" src={wallet} alt='wallet' />
                        <img className="opacity-8" src={fanny_pack} alt='fanny_pack' />
                    </div>
                </div>
                <button>Comprar</button>
            </div>
        </div>
    );
};

export default Home;
