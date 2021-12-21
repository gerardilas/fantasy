import React from "react";

const RenderProducts = (props: { products: Array<string> }) => {
    const { products } = props;
    return (
        <div>
            {products.map((product, i) => {
                return (
                    <div key={i}>
                        <p>{product}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default RenderProducts;
