import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <main className="overflow-hidden w-[80%] mx-auto">
      <section className="bg-white py-16 my-6">
        <div className="container mx-auto px-4">
          <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl p-4">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-500 mx-auto text-sm md:text-lg lg:text-lg">
            At Artevian, your privacy and satisfaction are our top priorities.
            This Privacy Policy outlines how we collect, use, and protect your
            information when you interact with our website and services. We are
            committed to transparency, responsible data handling, and delivering
            high-quality work with integrity.
          </p>
        </div>
        <div className="container mx-auto mt-8 ">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Information We Collect
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            We collect personal information you voluntarily provide, including:
          </p>
          <ul className="list-disc list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Project details and requirements</li>
            <li>Payment information (if applicable)</li>
            <li>Mailing Address</li>
          </ul>
          <p className="text-gray-600 font-medium text-sm md:text-lg lg:text-lg mt-4">
            This information may be collected during:
          </p>
          <ul className="list-disc list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li>Order placement</li>
            <li>Newsletter subscription</li>
            <li>Account registration</li>
            <li>Contact form submission</li>
          </ul>
          <p className="text-gray-600 font-medium text-sm md:text-lg lg:text-lg mt-4">
            We may also collect technical information such as IP address,
            browser type, device information,
            <br /> and website usage data through cookies and analytics tools.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            We use your information to:
          </p>
          <ul className="list-disc list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li>Process orders and deliver services</li>
            <li>Communicate regarding your project status</li>
            <li>Respond to inquiries or feedback</li>
            <li>Send order confirmations and account updates</li>
            <li>
              Share newsletters and promotional content (only if you opt-in)
            </li>
            <li>Improve our services and website functionality</li>
          </ul>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4 text-wrap">
            We use cookies to recognize your browser, improve your experience,
            and store items in your cart. You can control cookie settings in
            your browser. Some of our partners or third-party services may also
            use cookies, which are not controlled by Artevian.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Third-Party Services
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            We do not sell or rent your personal information. However, we may
            share it with trusted service providers for:
          </p>
          <ul className="list-disc list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li>Payment processing</li>
            <li>Live chat support</li>
            <li>Email marketing</li>
            <li>Website analytics</li>
          </ul>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            These providers are contractually obligated to use your information
            only to perform necessary services and maintain confidentiality.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Security of Your Data
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            We use <strong>SSL encryption</strong> and follow industry best
            practices to protect your personal data during transmission and
            storage. While no system is entirely immune to risk, we take every
            reasonable step to ensure data security.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Account Access & Management
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            You may log into your registered account on our website to:
          </p>
          <ul className="list-disc list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li> View past orders</li>
            <li>Update your personal information</li>
            <li>Manage communication preferences</li>
          </ul>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            To delete or deactivate your account, please contact us directly at{" "}
            <Link
              href="mailto:info@artevian.com"
              className="text-blue-400 font-semibold underline"
            >
              info@artevian.com
            </Link>
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Data Retention
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            We retain your personal data as long as needed to fulfill the
            purpose for which it was collected or as required by law. You may
            request data deletion, and we will respond in accordance with legal
            obligations.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Children’s Privacy
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            Our services are not directed toward individuals under the age of
            13. We do not knowingly collect data from children.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Links to Other Websites
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            Our site may contain external links. Artevian is not responsible for
            the privacy practices or content of third-party websites. We
            encourage you to review their privacy policies before submitting any
            information.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Your Rights & Choices
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li> Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent at any time</li>
            <li>Opt out of promotional emails</li>
          </ul>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            Contact us at{" "}
            <Link
              href="mailto:info@artevian.com"
              className="text-blue-400 font-semibold underline"
            >
              info@artevian.com
            </Link>{" "}
            to exercise your rights.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Refund & Revision Policy
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            You may log into your registered account on our website to:
          </p>
          <ul className="list-decimal list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li className="text-gray-600 text-sm md:text-lg lg:text-lg mt-2">
              {" "}
              <strong>No Refund After Revisions:</strong> Once any revision or
              modification has been initiated or implemented in your project,
              <strong> no refund</strong> will be applicable for that specific
              project.
            </li>
            <li className="text-gray-600 text-sm md:text-lg lg:text-lg mt-2">
              <strong>No Refund for Preference or Change of Mind:</strong>{" "}
              Refunds are{" "}
              <strong>
                {" "}
                not issued based on personal dislike of the final product or a
                change of mind.
              </strong>{" "}
              If you are dissatisfied, you must
              <strong>provide a clear explanation</strong> of your concerns. Our{" "}
              <strong>Resolution Department</strong> will assess the matter and
              respond with a final decision, along with a specific resolution
              timeline.
            </li>
            <li className="text-gray-600 text-sm md:text-lg lg:text-lg mt-2">
              <strong>Compliance Review Before Go-Live:</strong> Upon completion
              of your <strong> logo, graphic, or website project</strong>, and
              before the project goes live,
              <strong> Artevian will provide a compliance report.</strong> This
              document includes all technical, branding, and legal checklist
              items to ensure your project is optimized and ready for launch.
            </li>
          </ul>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Policy Changes
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page and indicated with an updated effective
            date. For significant changes, we will provide advance notice via
            email or on our homepage.
          </p>
        </div>
        <div className="container mx-auto mt-8">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Legal Disclosure
          </h2>
          <p className="text-gray-600 text-sm md:text-lg lg:text-lg mt-4">
            Comply with legal obligations Enforce our agreements Protect the
            rights, safety, or property of Artevian and its users
          </p>
          <ul className="list-disc list-inside text-gray-500 text-sm md:text-lg lg:text-lg mt-4 ml-5">
            <li>Comply with legal obligations</li>
            <li>Enforce our agreements</li>
            <li>
              Protect the rights, safety, or property of Artevian and its users
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default page;
