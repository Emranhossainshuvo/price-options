import PropTypes from 'prop-types'; 

import { FcCheckmark } from 'react-icons/fc';

const Feature = ({feature}) => {
    return (
        <div className='mt-2'> 
            <p className='text-2xl flex items-center'> <FcCheckmark className='ms-2 mr-2 text-slate-950'></FcCheckmark> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes. string
}

export default Feature;