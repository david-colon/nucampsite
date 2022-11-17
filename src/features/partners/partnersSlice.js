import { PARTNERS } from '../../app/shared/PARTNERS'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    partnersArray: PARTNERS
};

const partnersSlice = createSlice(
    {
        name: 'partners',
        initialState
    }
);

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
};

// export const selectPartnerById = (state) => {
//     (id) => {
//         return state.partners.partnersArray.find((partner) => partner.id === parseInt(id));
//     }
// }

export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured);
}

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };