import React from "react";

const Stores = () => {
    return (
        <div>
            <h1 className='center-text'>Nuestras tiendas</h1>
            <div className={"width-600px max-width-100 margin-side-auto"}>
                <h1 className={"font-25"}>Sede principal</h1>
                <h2>Teléfono</h2>
                <p>(057) 601 555 6789</p>
                <h2>Dirección</h2>
                <p>Cra 44 # 34 - 35, Barranquilla - Atlántico</p>
                <iframe
                    title='main-store'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7833.480321850494!2d-74.77837815660081!3d10.98297491408584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4329dda87e351%3A0xfab8353e16cb2a80!2sCra.%2044%20%23%2334-35%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1sen!2sco!4v1636130000983!5m2!1sen!2sco'
                    className={"width-100"}
                    height='450'
                    style={{ border: "0" }}
                    allowFullScreen={true}
                    loading='lazy'></iframe>
            </div>
        </div>
    );
};

export default Stores;
