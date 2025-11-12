import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BrandsSection from '../components/BrandsSection';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | Kundkund Stationers</title>
        <meta name="description" content="Read Kundkund Stationers' Privacy Policy to understand how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p className="mb-4">
            Kundkund Stationers ("us", "we", or "our") operates the https://www.kundkundstationers.com website (the "Service").
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Information Collection And Use</h2>
          <p className="mb-4">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h3 className="text-lg font-medium mt-4 mb-2">Types of Data Collected</h3>
          <h4 className="font-medium mt-3 mb-1">Personal Data</h4>
          <p className="mb-4">
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h4 className="font-medium mt-3 mb-1">Usage Data</h4>
          <p className="mb-4">
            We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          <h4 className="font-medium mt-3 mb-1">Tracking & Cookies Data</h4>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
            Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Use of Data</h2>
          <p className="mb-4">Kundkund Stationers uses the collected data for various purposes:</p>
          <ul className="list-disc pl-5 mb-4">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Transfer Of Data</h2>
          <p className="mb-4">
            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
          </p>
          <p className="mb-4">
            Kundkund Stationers will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Disclosure Of Data</h2>
          <h3 className="text-lg font-medium mt-4 mb-2">Legal Requirements</h3>
          <p className="mb-4">
            Kundkund Stationers may disclose your Personal Data in the good faith belief that such action is necessary to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>To comply with a legal obligation</li>
            <li>To protect and defend the rights or property of Kundkund Stationers</li>
            <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
            <li>To protect the personal safety of users of the Service or the public</li>
            <li>To protect against legal liability</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Security Of Data</h2>
          <p className="mb-4">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Service Providers</h2>
          <p className="mb-4">
            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Links To Other Sites</h2>
          <p className="mb-4">
            Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Children's Privacy</h2>
          <p className="mb-4">
            Our Service does not address anyone under the age of 18 ("Children").
            We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Changes To This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>By email: Stationerskundkund@gmail.com</li>
            <li>By visiting the <Link to="/ContactUs" className="text-blue-600 hover:underline">contact page</Link> on our website</li>
            <li>By phone: +91 9650668139,+91 9818818668</li>
          </ul>
        </div>
      </div>
        <BrandsSection></BrandsSection>
    </div>
  
  );
};

export default PrivacyPolicy;