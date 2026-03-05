import React from 'react';
import PrimaryHeader from '../../../Components/Ui/PrimaryHeader';
import HospitalAttendance from './HospitalAttendance';

const HospitalAttendancePage = () => {
  return (
    <div className='bg-bg'>
    <PrimaryHeader HeadLine={"Hospital Attendance"}/>
    <HospitalAttendance/>
      
    </div>
  );
}

export default HospitalAttendancePage;
