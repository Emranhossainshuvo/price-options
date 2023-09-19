import PropTypes from 'prop-types';

const PriceOption = ({option}) => {
    console.log(option)
    const {name, price, features} = option;  

    return (
        <div className='mt-5 bg-violet-500 p-4 rounded-lg mx-5 hover:bg-violet-400'>
             <h2 className='text-center'>
                <span className='text-7xl font-medium'>Price: {price}</span>
                <span className='text-3xl'>/mon</span>
             </h2>
             <h4 className='text-center text-3xl'>{name}</h4>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;