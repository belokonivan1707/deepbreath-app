import {
    DATA_FOR_MAKERS,
    DATA_GET_HIRED,
    DATA_CREATE_EXPERIENCE,
    DATA_CREATE_SHOP,
} from './data';

const INITIAL_STATE = {
    dataForMakers: DATA_FOR_MAKERS,
    dataGetHired: DATA_GET_HIRED,
    dataCreateExperience: DATA_CREATE_EXPERIENCE,
    dataCreateShop: DATA_CREATE_SHOP,
};

const DataLandingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default DataLandingsReducer;
