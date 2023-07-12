import PropTypes from 'prop-types';
import './itemCard.css';
const getServiceLogo = (service) => {
    switch (service) {
        case 'GDrive':
            return '/googledrivelogo.png';
        case 'GDocs':
            return '/image-77@2x.png';
        case 'slack':
            return '/image-641@2x.png';
        case 'GSheets':
            return '/image-701@2x.png';
        default:
            return '';
    }
};

const ItemCard = ({ index = 0, result = {} }) => {
    const handleCardClick = () => {
        window.open(result.url, '_blank', 'noopener noreferrer');
    };

    return (
        <div className='card' onClick={handleCardClick}>
            <div className="flex-row" style={{
                display: 'flex', gap: "10px"
            }}>
                <div className="flex-item">
                    <img
                        src={getServiceLogo(result.service)}
                        alt="Logo"
                    />
                </div>
                <div className="flex-item">
                    <h4 className='title'>{result.title}</h4>
                    <div className='content'>{result.content}</div>
                </div>
                
            </div>
            {/* Link */}
            <a href={result.url} target="_blank" rel="noopener noreferrer" className="hidden-link">
                {/* {result.url} */}
            </a>
            
        </div>
    );
};



ItemCard.propTypes = {
    index: PropTypes.number,
    result: PropTypes.shape({
        service: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
};

export default ItemCard;
