import React from 'react';
import BigCart from './BigCart/BigCart';
import { BigCartNews } from '../../../PropsData';

const NewsCarts = () => {
    return (
        <div className=''>
            <div className="">
                <div className="">
                    {BigCartNews.map(product => (
                                <BigCart
                                key={product.id}
                                image={product.img}
                                btn={product.btn}
                                btn_title={product.btn_title}
                                title={product.title}
                                desc={product.desc}                        
                                />
                            ))}
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}

export default NewsCarts;
