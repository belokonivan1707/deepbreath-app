import { useSelector } from 'react-redux';
import { UniversaLLandingPage } from './UniversalLending';

export function GetHired() {
    const dataGetHired = useSelector(
        (state) => state.landingsDataStore.dataGetHired
    );
    return <UniversaLLandingPage dataLanding={dataGetHired} />;
}
