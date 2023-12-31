import { useEffect, useState } from 'react';
import CouresCart from '../../../Components/CouresCart/CouresCart';

const Coures = () => {
    const [coures, setCoures] = useState([]);

    useEffect(() => {
        fetch('https://speakup-ivory.vercel.app/coures')
            .then(res => res.json())
            .then(data => setCoures(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold'>We Provide Extra Ordinary Coures</h2>
            <div className='grid md:grid-cols-3 space-y-7'>
                {
                    coures.map(object => <CouresCart object={object} key={object._id} ></CouresCart>)
                }
            </div>
        </div>
    );
};

export default Coures;