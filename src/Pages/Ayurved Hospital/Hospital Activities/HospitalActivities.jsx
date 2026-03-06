import React from 'react';
import PrimaryHeader from '../../../Components/Ui/PrimaryHeader';
import HospitalActivitiesPage from './HospitalActivitiesPage';

const HospitalActivities = () => {
  return (
    <div className='bg-Bg'>
      <PrimaryHeader HeadLine={"Hospital Activities"} />
      <HospitalActivitiesPage />
    </div>
  );
}

export default HospitalActivities;
