import React from 'react';
import ActivityReports from './Components/ActivityReports';
import PrimaryHeader from '../../../../Components/Ui/PrimaryHeader';

const Activities = () => {
  return (
    <div>
        <PrimaryHeader HeadLine={"Activities"}/>
        <ActivityReports />
      
    </div>
  );
}

export default Activities;
