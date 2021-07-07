import { useSelector } from 'react-redux';
import { UniversaLLandingPage } from './UniversalLending';

export function ForMakers() {
    const dataForMakers = useSelector(
        (state) => state.landingsDataStore.dataForMakers
    );
    return (<UniversaLLandingPage dataLanding={dataForMakers} isDropdown/>)
}
