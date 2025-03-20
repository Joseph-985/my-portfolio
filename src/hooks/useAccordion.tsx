import AccordionContent from "../components/AccordionContent";
import type { CollapseProps } from "antd";

export const useAccordion = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "ZVerify",
      children: (
        <AccordionContent
          content="zVerify is a versatile OTP verification solution designed to provide businesses with secure, multi-channel authentication services. It features a comprehensive API for generating, verifying, and revoking OTPs, ensuring robust user security across SMS, voice calls, WhatsApp, RCS, and email. Additionally, zVerify offers an Admin Dashboard that enables businesses to monitor transactions, track OTP delivery, and analyze usage metrics in real-time."
          image="/zVerify_dashboard-1.png"
        />
      ),
      showArrow: false,
    },
    {
      key: "2",
      label: "Baya",
      children: (
        <AccordionContent
          content="Baya is an all-in-one estate management solution tailored for modern residential communities. It simplifies the management of estate dues, enables utility vending, facilitates visitor booking, and includes an SOS emergency feature for enhanced security. The solution is divided into three main components"
          image="/baya-3.png"
        />
      ),
      showArrow: false,
    },
    {
      key: "3",
      label: "Nottie",
      children: (
        <AccordionContent
          content="Nottie.net is an advanced transaction alert solution designed for financial institutions to provide real-time notifications and enhance customer engagement. It offers seamless integration with banking systems to generate transaction alerts and deliver them to customers through multiple channels, including SMS, email, WhatsApp, and other social media platforms.
The solution includes an Analytic Dashboard that allows financial institutions to monitor alert delivery, track customer responses, and ensure optimal performance of the alert services. With Nottie.net, banks can maintain transparency, improve customer satisfaction, and ensure compliance with regulatory requirements for transaction notifications."
          image="/nottie-3.png"
        />
      ),
      showArrow: false,
    },
    {
      key: "4",
      label: "ManiR",
      children: (
        <AccordionContent
          content="ManiR is a management system, designed to manage and track transport manifests for efficient logistic operations."
          image="/minaR.png"
        />
      ),
      showArrow: false,
    },
    {
      key: "5",
      label: "Thrift and Loan",
      children: (
        <AccordionContent
          content="ManiR is a management system, designed to manage and track transport manifests for efficient logistic operations."
          image="/T&L.png"
        />
      ),
      showArrow: false,
    },
    {
      key: "6",
      label: "Vibrianet",
      children: (
        <AccordionContent
          content="Designed to securly deliver OTPs and payment alert to you exactly when you need it."
          image="/vibrianet.png"
        />
      ),
      showArrow: false,
    },
    {
      key: "7",
      label: "Peace Family",
      children: (
        <AccordionContent
          content="A website for a music group(Peace Family)."
          image="/peace-family.png"
        />
      ),
      showArrow: false,
    },
  ];

  return { items };
};
