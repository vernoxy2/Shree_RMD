import React from 'react';
import AdmissionUpdates from './Components/AdmissionUpdates';
import PrimaryHeader from '../../../../Components/Ui/PrimaryHeader';

const Admission_Update = () => {
  return (
    <div>
      <PrimaryHeader HeadLine={"Admission Updates"}/>
      <AdmissionUpdates/>
    </div>
  );
}

export default Admission_Update;
