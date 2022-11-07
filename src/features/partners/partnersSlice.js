import { PARTNERS } from '../../app/shared/PARTNERS'

export const selectAllPartners = () => {
    return PARTNERS;
};

export const selectPartnerById = (id) => {
    return PARTNERS.find((partner) => partner.id === parseInt(id));
}

export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
}

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };