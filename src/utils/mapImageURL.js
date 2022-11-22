import { baseUrl } from '../app/shared/baseUrl'

const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};

export default mapImageURL;