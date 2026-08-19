import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "MGenius Academy's Terms and Conditions governing use of our website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero title="Terms and Conditions" description="Updated: August 14, 2026" />

      <section className="py-16">
        <Container>
          <div className="prose prose-neutral mx-auto max-w-3xl">
            <p>
              Welcome to MGenius Academy (&ldquo;Company,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              These Terms of Service (&ldquo;Terms&rdquo;) describe the
              rules and conditions governing your use of our website located
              at mgeniusacademy.com (the &ldquo;Site&rdquo;) and any
              services, tools, or communications offered by MGenius Academy.
            </p>
            <p>
              By visiting, accessing, or using the Site or our services, you
              agree to comply with and be legally bound by these Terms. If
              you do not agree to these Terms, you should stop using the
              Site immediately.
            </p>

            <h2>1. Eligibility</h2>
            <p>
              The Site and our services are intended for individuals who
              are 18 years of age or older. By accessing or using the Site,
              you represent that you are at least 18 years old and have the
              legal authority to enter into binding agreements.
            </p>

            <h2>2. Services Provided</h2>
            <p>
              MGenius Academy offers marketing and business growth services
              designed for child care centers and preschool organizations.
              These services may include, but are not limited to:
            </p>
            <ul>
              <li>Website design, development, and optimization</li>
              <li>Digital advertising management, including Google Ads and social media advertising</li>
              <li>Lead generation services</li>
              <li>Marketing strategy and consulting</li>
              <li>Recruitment and staffing support</li>
              <li>Content development and social media marketing</li>
            </ul>
            <p>
              We reserve the right to change, suspend, or discontinue any
              portion of our services at our discretion and without prior
              notice.
            </p>

            <h2>3. SMS Communications</h2>
            <p>
              If you provide your phone number and consent through our
              forms or other opt-in methods, you agree to receive SMS
              communications from MGenius Academy.
            </p>
            <p>These text messages may include:</p>
            <ul>
              <li>Responses to inquiries or consultation requests</li>
              <li>Appointment confirmations or reminders</li>
              <li>Information regarding services we provide</li>
              <li>Marketing or promotional updates related to MGenius Academy</li>
            </ul>
            <p>
              Message frequency may vary. Standard message and data rates
              may apply based on your mobile carrier.
            </p>
            <p>You may unsubscribe from SMS communications at any time by replying STOP to opt out.</p>
            <p>
              For help or support, reply HELP or contact us at{" "}
              <a href="mailto:info@mgeniusacademy.com">info@mgeniusacademy.com</a>.
            </p>
            <p>Mobile carriers are not responsible for messages that are delayed or not delivered.</p>
            <p>
              Phone numbers collected for SMS messaging will not be sold,
              rented, or shared with third parties or affiliates for
              marketing purposes.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>
              You agree to use the Site and services only for lawful
              purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul>
              <li>Attempt to access systems, servers, or data without authorization</li>
              <li>Interfere with or disrupt the operation of the Site</li>
              <li>Provide inaccurate or misleading information</li>
              <li>Use the Site or services in connection with unlawful or fraudulent activities</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>All materials available on the Site, including but not limited to:</p>
            <ul>
              <li>Text and written content</li>
              <li>Graphics and visual elements</li>
              <li>Logos and branding</li>
              <li>Marketing materials</li>
              <li>Software, code, and design components</li>
            </ul>
            <p>
              are owned by MGenius Academy or its licensors and are
              protected by applicable copyright, trademark, and
              intellectual property laws. You may not copy, reproduce,
              distribute, modify, or otherwise use any content from the
              Site without prior written authorization from MGenius
              Academy.
            </p>

            <h2>6. Third-Party Platforms and Services</h2>
            <p>
              The Site may include integrations with or links to
              third-party services, including but not limited to:
            </p>
            <ul>
              <li>Google Ads</li>
              <li>Meta platforms (Facebook and Instagram)</li>
              <li>Analytics services</li>
              <li>Customer relationship management (CRM) tools</li>
              <li>Advertising networks</li>
            </ul>
            <p>
              We do not control these third-party services and are not
              responsible for their privacy policies, practices, or
              actions.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              The Site and services are provided on an &ldquo;as is&rdquo;
              and &ldquo;as available&rdquo; basis. We do not guarantee:
            </p>
            <ul>
              <li>The accuracy or completeness of information on the Site</li>
              <li>Continuous or uninterrupted availability of services</li>
              <li>Specific results from marketing or consulting services</li>
              <li>That the Site will operate without errors or interruptions</li>
            </ul>
            <p>
              To the fullest extent permitted by law, MGenius Academy
              disclaims all warranties, whether express or implied.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, MGenius
              Academy will not be liable for any indirect, incidental,
              consequential, or special damages arising from or related to:
            </p>
            <ul>
              <li>Use of or inability to use the Site</li>
              <li>Marketing performance or outcomes</li>
              <li>Interruptions in service</li>
              <li>Loss of data or information</li>
            </ul>
            <p>Your use of the Site and services is at your own risk.</p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless MGenius
              Academy, along with its employees, contractors, partners, and
              affiliates, from any claims, damages, losses, liabilities, or
              expenses resulting from:
            </p>
            <ul>
              <li>Your use of the Site or services</li>
              <li>Your violation of these Terms</li>
              <li>Any unlawful or improper activity associated with your use of the Site</li>
            </ul>

            <h2>10. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to
              the Site or our services at any time if we determine that you
              have violated these Terms or engaged in unlawful behavior.
            </p>

            <h2>11. Updates to These Terms</h2>
            <p>
              These Terms may be updated periodically. Any modifications
              will be posted on this page and will include a revised Last
              Updated date. Your continued use of the Site after changes
              are posted constitutes acceptance of the updated Terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by and interpreted in accordance
              with the laws of the United States and applicable state laws,
              without regard to conflict of law rules.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have questions regarding these Terms of Service,
              please contact us:
            </p>
            <p>
              MGenius Academy
              <br />
              Email: <a href="mailto:info@mgeniusacademy.com">info@mgeniusacademy.com</a>
              <br />
              Website: mgeniusacademy.com
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
