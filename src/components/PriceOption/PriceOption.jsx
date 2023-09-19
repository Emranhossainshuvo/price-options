import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    // console.log(option)
    const {name, price, features} = option;  

    return (
        <div className='mt-5 flex flex-col bg-rose-300 shadow-xl shadow-gray-600 p-4 rounded-lg mx-5 hover:bg-rose-400'>
             <h2 className='text-center'>
                <span className='text-7xl font-medium'>Price: {price}</span>
                <span className='text-3xl'>/mon</span>
             </h2>
             <h4 className='text-center text-3xl'>{name}</h4>
             <div className='flex-grow'>
             {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
             }
             </div>
             <button className='mt-12 w-full bg-green-600 p-4 rounded-2xl hover:bg-green-700 hover:shadow-gray-700 shadow-xl'>Buy now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;