import React from 'react';
import UseCart from '../../Hooks/UseCart';
import Row from './Row';
import { Helmet } from 'react-helmet-async';

const MySelectedClass = () => {
    
    const [cart] = UseCart();
    console.log(cart);
    
    return (
        <div>
            <Helmet>
        <title>
            My Cart || SpeakUp
        </title>
    </Helmet>
            <h2 className="text-center font-semibold text-4xl">MY SELECTED CLASSES</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((row,index)=> <Row key={row._id} row={row} index={index}></Row>)
                        } 
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;