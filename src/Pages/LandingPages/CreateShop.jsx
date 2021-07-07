import { useSelector } from 'react-redux';
import { UniversaLLandingPage } from './UniversalLending';

export function CreateShop() {
    const dataCreateShop = useSelector(
        (state) => state.landingsDataStore.dataCreateShop
    );
    return <UniversaLLandingPage dataLanding={dataCreateShop} />;
}
