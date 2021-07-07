import { useSelector } from 'react-redux';
import { UniversaLLandingPage } from './UniversalLending';

export function CreateExperience() {
    const dataCreateExperience = useSelector(
        (state) => state.landingsDataStore.dataCreateExperience
    );
    return <UniversaLLandingPage dataLanding={dataCreateExperience} />;
}
