import React from "react";
import Comma50 from "../../../assets/Comma50.svg";

const AboutTrsut = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
      <div></div>
      <div className="space-y-6">
        <h1 className="flex gap-3">About GiriviharTrust <span><img src={Comma50} alt="" /></span></h1>
        <p className="tracking-wide">
          <strong className="text-primary">Shree Prabhav-Hem-Kamdhenu Girivihar Trust – Palitana</strong> is a renowned
          non-profit charitable organization dedicated to the noble mission of
          “Service to Mankind and Animals.” Established in 1999 and registered
          under the Bombay Public Trust Act, 1950 (Registration No. E/1798), the
          Trust is headquartered at Girivihar, Taleti Road, Palitana, Gujarat.
        </p>
        <p className="tracking-wide">
          Inspired by the spiritual vision of Param Pujya Acharyadev Shreemad
          Vijay Hem Prabh Suriswarji Maharaj Saheb and guided by Param Pujya
          Acharyadev Shri Vijay Vignan Prabh Surishwarji Maharaj Saheb, the
          Trust works tirelessly to promote compassion, healthcare, education,
          and humanitarian service rooted in Jain values.
        </p>
        <p className="tracking-wide">
          Over the years, Girivihar Trust has developed several impactful
          initiatives focused on Ayurvedic education, holistic healthcare, cow
          protection, and community welfare. Through its institutions such as
          Shree RMD Ayurved College & Hospital, Shree RMD Super Specialty
          Ayurveda Hospital, Gaushala, and Annakshetra, the Trust serves society
          by providing authentic Ayurvedic treatment, medical education,
          cow-based medicinal research, and affordable meals for the community.
        </p>
        <p className="tracking-wide">
          With a strong commitment to ethical healthcare, spiritual values, and
          social responsibility, Girivihar Trust continues to uplift lives by
          combining ancient Ayurvedic wisdom, compassionate service, and modern
          healthcare support for the welfare of people and animals alike.
        </p>
      </div>
    </div>
  );
};

export default AboutTrsut;
