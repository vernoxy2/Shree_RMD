import React from 'react';
import CommitteeHead from "../../../../assets/AyurvedCollage/AboutClg/CommitteeHead.webp"
import PrimaryHeader from '../../../../Components/Ui/PrimaryHeader';
import CommitteeText from './Components/CommitteeText';
import Forms from './Components/Forms';
import CommitteeList from './Components/CommitteeList';

const Committee = () => {
  return (
    <div>
      <PrimaryHeader HeadLine={"Committee"} BgImg={CommitteeHead}/>
      <CommitteeText />
      <CommitteeList />
      <Forms />
    </div>
  );
}

export default Committee;
