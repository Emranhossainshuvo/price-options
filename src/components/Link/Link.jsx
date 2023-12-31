import PropTypes  from "prop-types";


const Link = ({route}) => {
    const {path, name} = route
    return (
        <button className="mr-10">
                    <a href={path}>{name}</a>
                </button>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;