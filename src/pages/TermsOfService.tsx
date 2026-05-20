import TextPage, { type TextPageSection, type SidebarLink } from '../components/TextPage/TextPage'

const RELATED_PAGES: SidebarLink[] = [
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'History of Frostys', href: '/history' },
  { label: 'Contact Us', href: '/contact' },
]

const sections: TextPageSection[] = [
  {
    id: 'agreement',
    heading: 'Terms and Conditions',
    content: (
      <>
        <p>
          <strong>Agreement between User and https://frostyfaustings.com/</strong>
        </p>
        <p>
          Welcome to https://frostyfaustings.com/. The website (the "Site") is comprised of various web
          pages operated by <strong>Frosty Faustings LLC</strong> ("Frosty Faustings").
          https://frostyfaustings.com/ is offered to you conditioned on your acceptance without
          modification of the terms, conditions, and notices contained herein (the "Terms"). Your use
          of https://frostyfaustings.com/ constitutes your agreement to all such Terms. Please read
          these terms carefully, and keep a copy of them for your reference.
        </p>
        <p>
          The purpose of our website is to provide information and updates to the attendees, staff,
          viewers, sponsors, vendors, and any other person interested in Frosty Faustings XVIII which
          will take place on January 29 – February 1, 2026 in Lombard, IL.
        </p>
      </>
    ),
  },
  {
    id: 'privacy',
    heading: 'Privacy',
    content: (
      <p>
        Your use of https://frostyfaustings.com/ is subject to Frosty Faustings's{' '}
        <a href="/privacy-policy">Privacy Policy</a>. Please review our Privacy Policy, which also
        governs the Site and informs users of our data collection practices.
      </p>
    ),
  },
  {
    id: 'electronic-communications',
    heading: 'Electronic Communications',
    content: (
      <p>
        Visiting https://frostyfaustings.com/ or sending emails to Frosty Faustings constitutes
        electronic communications. You consent to receive electronic communications and you agree that
        all agreements, notices, disclosures and other communications that we provide to you
        electronically, via email and on the Site, satisfy any legal requirement that such
        communications be in writing.
      </p>
    ),
  },
  {
    id: 'children',
    heading: 'Children Under Thirteen',
    content: (
      <p>
        Frosty Faustings does not knowingly collect, either online or offline, personal information
        from persons under the age of thirteen. If you are under 18, you may use
        https://frostyfaustings.com/ only with permission of a parent or guardian.
      </p>
    ),
  },
  {
    id: 'cancellation',
    heading: 'Cancellation / Refund Policy',
    content: (
      <>
        <p>
          Frosty Faustings will cancel and refund your registration based on the following dates:
        </p>
        <div className="policy-table">
          <div className="policy-table__row policy-table__row--header">
            <div className="policy-table__cell">Period</div>
            <div className="policy-table__cell">Refund Terms</div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">October &amp; November</div>
            <div className="policy-table__cell">
              Badge Entry Fee is refundable, <strong>minus a $15 non-refundable handling fee</strong>.
              Game Competition fees are 100% refundable.
            </div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">December</div>
            <div className="policy-table__cell">
              Badge Entry Fee is refundable, <strong>minus a $25 non-refundable handling fee</strong>.
              Game Competition fees are still 100% refundable.
            </div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">January 1st – 12th</div>
            <div className="policy-table__cell">
              Badge Entry Fee is <strong>not refundable after December 31st</strong>. Game Competition
              fees are still 100% refundable.
            </div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">January 13th and on</div>
            <div className="policy-table__cell">
              <strong>Zero refunds of any kind</strong> will be granted after January 12th.
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'third-party-links',
    heading: 'Links to Third Party Sites / Third Party Services',
    content: (
      <>
        <p>
          https://frostyfaustings.com/ may contain links to other websites ("Linked Sites"). The
          Linked Sites are not under the control of Frosty Faustings and Frosty Faustings is not
          responsible for the contents of any Linked Site, including without limitation any link
          contained in a Linked Site, or any changes or updates to a Linked Site. Frosty Faustings is
          providing these links to you only as a convenience, and the inclusion of any link does not
          imply endorsement by Frosty Faustings of the site or any association with its operators.
        </p>
        <p>
          Certain services made available via https://frostyfaustings.com/ are delivered by third
          party sites and organizations. By using any product, service or functionality originating
          from the https://frostyfaustings.com/ domain, you hereby acknowledge and consent that Frosty
          Faustings may share such information and data with any third party with whom Frosty Faustings
          has a contractual relationship to provide the requested product, service or functionality on
          behalf of https://frostyfaustings.com/ users and customers.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    heading: 'No Unlawful or Prohibited Use / Intellectual Property',
    content: (
      <>
        <p>
          You are granted a non-exclusive, non-transferable, revocable license to access and use
          https://frostyfaustings.com/ strictly in accordance with these terms of use. As a condition
          of your use of the Site, you warrant to Frosty Faustings that you will not use the Site for
          any purpose that is unlawful or prohibited by these Terms.
        </p>
        <p>
          All content included as part of the Service, such as text, graphics, logos, images, as well
          as the compilation thereof, and any software used on the Site, is the property of Frosty
          Faustings or its suppliers and protected by copyright and other laws that protect intellectual
          property and proprietary rights.
        </p>
        <p>
          You will not modify, publish, transmit, reverse engineer, participate in the transfer or
          sale, create derivative works, or in any way exploit any of the content, in whole or in part,
          found on the Site. Frosty Faustings content is not for resale.
        </p>
      </>
    ),
  },
  {
    id: 'international',
    heading: 'International Users',
    content: (
      <p>
        The Service is controlled, operated and administered by Frosty Faustings from our offices
        within the USA. If you access the Service from a location outside the USA, you are responsible
        for compliance with all local laws. You agree that you will not use the Frosty Faustings
        Content accessed through https://frostyfaustings.com/ in any country or in any manner
        prohibited by any applicable laws, restrictions or regulations.
      </p>
    ),
  },
  {
    id: 'indemnification',
    heading: 'Indemnification',
    content: (
      <p>
        You agree to indemnify, defend and hold harmless Frosty Faustings, its officers, directors,
        employees, agents and third parties, for any losses, costs, liabilities and expenses
        (including reasonable attorney's fees) relating to or arising out of your use of or inability
        to use the Site or services, any user postings made by you, your violation of any terms of
        this Agreement or your violation of any rights of a third party, or your violation of any
        applicable laws, rules or regulations.
      </p>
    ),
  },
  {
    id: 'class-action',
    heading: 'Class Action Waiver',
    content: (
      <p>
        Any arbitration or litigation under these Terms and Conditions will take place on an individual
        basis; class arbitrations, class litigation, and class/representative/collective actions are
        not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN
        EACH'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS,
        COLLECTIVE AND/OR REPRESENTATIVE PROCEEDING.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Liability Disclaimer',
    content: (
      <>
        <p>
          THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE
          MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE
          INFORMATION HEREIN. FROSTY FAUSTINGS LLC AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR
          CHANGES IN THE SITE AT ANY TIME.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS,
          SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND.
          FROSTY FAUSTINGS LLC AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH
          REGARD TO THIS INFORMATION, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    heading: 'Termination / Access Restriction',
    content: (
      <>
        <p>
          Frosty Faustings reserves the right, in its sole discretion, to terminate your access to the
          Site and the related services or any portion thereof at any time, without notice. To the
          maximum extent permitted by law, this agreement is governed by the laws of the{' '}
          <strong>State of Illinois</strong> and you hereby consent to the exclusive jurisdiction and
          venue of courts in Illinois in all disputes arising out of or relating to the use of the
          Site.
        </p>
        <p>
          Unless otherwise specified herein, this agreement constitutes the entire agreement between
          the user and Frosty Faustings with respect to the Site and it supersedes all prior or
          contemporaneous communications and proposals, whether electronic, oral or written, between
          the user and Frosty Faustings with respect to the Site.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to Terms',
    content: (
      <p>
        Frosty Faustings reserves the right, in its sole discretion, to change the Terms under which
        https://frostyfaustings.com/ is offered. The most current version of the Terms will supersede
        all previous versions. Frosty Faustings encourages you to periodically review the Terms to
        stay informed of our updates.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact Us',
    content: (
      <>
        <p>Frosty Faustings welcomes your questions or comments regarding the Terms:</p>
        <p>
          <strong>Frosty Faustings LLC</strong>
          <br />
          Roselle, Illinois 60048
          <br />
          Email: <a href="mailto:f.faustings@gmail.com">f.faustings@gmail.com</a>
          <br />
          Phone: <a href="tel:8473736464">(847) 373-6464</a>
        </p>
      </>
    ),
  },
]

export default function TermsOfServicePage() {
  return (
    <TextPage
      title="Terms of Service"
      effectiveDate="October 08, 2024"
      lastUpdated="June 14, 2025"
      sections={sections}
      relatedPages={RELATED_PAGES}
      contactBlock={
        <>
          <strong>Frosty Faustings LLC</strong>
          Roselle, Illinois 60048
          <br />
          <a href="mailto:f.faustings@gmail.com">f.faustings@gmail.com</a>
          <br />
          <a href="tel:8473736464">(847) 373-6464</a>
        </>
      }
    />
  )
}
