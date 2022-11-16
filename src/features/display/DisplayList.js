import { Col, Row } from 'reactstrap'
// import DisplayCard from './DisplayCard'
import { selectFeaturedCampsite } from '../campsites/campsitesSlice'
import { selectFeaturedPromotion } from '../promotions/promotionsSlice'
import { selectFeaturedPartner } from '../partners/partnersSlice'
import AnimatedDisplayCard from './AnimatedDisplayCard'
import { useSelector } from 'react-redux'

const DisplayList = () => {

    const items = useSelector((state) =>
        [selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartner(state)]
    );
    console.log('display items:', items)

    return (
        <Row>
            {items.map(
                (item, idx) => {
                    return (
                        // checks to see if 'item' is falsy/undefined; if so, does not render the following code
                        item && (
                            <Col md className='m-1' key={idx}>
                                <AnimatedDisplayCard item={item}>DisplayList</AnimatedDisplayCard>
                            </Col>
                        )
                    );
                })}
        </Row>
    );
};

export default DisplayList;