import React from "react";

const Diagnostics = () => {
  return (
    <div className="py-24 container">
      <div className="space-y-4">
        <div className="flex justify-between">
          <h1>Diagnostics</h1>
          <h2 className="text-right text-secondary">Advanced Laboratory & Ayurvedic <br />
Assessment Services</h2>
        </div>
        <p className="text-center text-xl">
          The Diagnostics Department at Shree RMD Ayurved College & Hospital
          offers comprehensive pathological laboratory services, health check-up
          schemes, X-Ray and ultrasonography facilities, and classical Prakruti
          Analysis. Equipped with modern diagnostic infrastructure and expert
          professionals, the center ensures accurate investigations in
          Haematology, Serology, and Biochemistry, supporting preventive,
          personalized, and holistic Ayurvedic healthcare.
        </p>
        <hr className=" max-w-xs border-primary border-2 rounded-full mx-auto" />
      </div>
    </div>
  );
};

export default Diagnostics;
