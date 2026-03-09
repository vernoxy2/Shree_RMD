import React from 'react';
import PrimaryHeader from '../../../../Components/Ui/PrimaryHeader';
import ExaminationResults from './Components/ExaminationResults';
// import ExaminationResultss from './Components/ExaminationResultss';

const University_Examination = () => {
  return (
    <div className='bg-Bg'>
      <PrimaryHeader HeadLine={"University Examination"}/>
      <ExaminationResults/>
      {/* <ExaminationResultss/> */}
      
    </div>
  );
}

export default University_Examination;
