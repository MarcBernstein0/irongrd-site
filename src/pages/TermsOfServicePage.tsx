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
          <strong>Lorem ipsum dolor sit amet</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </>
    ),
  },
  {
    id: 'privacy',
    heading: 'Privacy',
    content: (
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit. See our{' '}
        <a href="/privacy-policy">Privacy Policy</a> for full details on data collection practices.
      </p>
    ),
  },
  {
    id: 'electronic-communications',
    heading: 'Electronic Communications',
    content: (
      <p>
        Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
        consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
      </p>
    ),
  },
  {
    id: 'children',
    heading: 'Children Under Thirteen',
    content: (
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi id est
        laborum et dolorum fuga.
      </p>
    ),
  },
  {
    id: 'cancellation',
    heading: 'Cancellation / Refund Policy',
    content: (
      <>
        <p>
          Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
          quod maxime placeat facere possimus omnis voluptas assumenda est:
        </p>
        <div className="policy-table">
          <div className="policy-table__row policy-table__row--header">
            <div className="policy-table__cell">Period</div>
            <div className="policy-table__cell">Refund Terms</div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">Lorem &amp; Ipsum</div>
            <div className="policy-table__cell">
              Temporibus autem quibusdam et aut officiis debitis,{' '}
              <strong>minus a $15 non-refundable handling fee</strong>. Rerum necessitatibus saepe
              eveniet ut et voluptates repudiandae sint.
            </div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">Dolor Sit</div>
            <div className="policy-table__cell">
              Itaque earum rerum hic tenetur a sapiente delectus,{' '}
              <strong>minus a $25 non-refundable handling fee</strong>. Ut aut reiciendis voluptatibus
              maiores alias consequatur.
            </div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">Amet 1st – 12th</div>
            <div className="policy-table__cell">
              Quis nostrum exercitationem ullam corporis{' '}
              <strong>not refundable after this date</strong>. Competition fees remain 100% refundable.
            </div>
          </div>
          <div className="policy-table__row">
            <div className="policy-table__cell">Amet 13th and on</div>
            <div className="policy-table__cell">
              <strong>Zero refunds of any kind</strong> will be granted after this date.
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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
          aut odit aut fugit.
        </p>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit
          laboriosam.
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
          Nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos.
        </p>
        <p>
          Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi id est laborum et dolorum fuga.
        </p>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore cum soluta
          nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
          possimus omnis voluptas assumenda est omnis dolor repellendus.
        </p>
      </>
    ),
  },
  {
    id: 'international',
    heading: 'International Users',
    content: (
      <p>
        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
        et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
        sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis
        doloribus asperiores repellat.
      </p>
    ),
  },
  {
    id: 'indemnification',
    heading: 'Indemnification',
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat
        non proident.
      </p>
    ),
  },
  {
    id: 'class-action',
    heading: 'Class Action Waiver',
    content: (
      <p>
        Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
        iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: 'Liability Disclaimer',
    content: (
      <>
        <p>
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT
          LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM QUIS NOSTRUD EXERCITATION ULLAMCO
          LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
        </p>
        <p>
          DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT
          NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT SUNT IN CULPA QUI OFFICIA
          DESERUNT MOLLIT ANIM ID EST LABORUM ET DOLORUM FUGA ET HARUM QUIDEM RERUM.
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
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit
          sed quia non numquam eius modi tempora incidunt. This agreement is governed by the laws of
          the <strong>State of Lorem</strong> and you hereby consent to the exclusive jurisdiction and
          venue of courts in Lorem in all disputes arising out of or relating to the use of the Site.
        </p>
        <p>
          Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam quis nostrum
          exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur
          quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    heading: 'Changes to Terms',
    content: (
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
        cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi id est
        laborum et dolorum fuga.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: 'Contact Us',
    content: (
      <>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor:</p>
        <p>
          <strong>Lorem Ipsum LLC</strong>
          <br />
          Dolor Sit, Amet 00000
          <br />
          Email: <a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a>
          <br />
          Phone: <a href="tel:0000000000">(000) 000-0000</a>
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
          <strong>Lorem Ipsum LLC</strong>
          Dolor Sit, Amet 00000
          <br />
          <a href="mailto:lorem@ipsum.com">lorem@ipsum.com</a>
          <br />
          <a href="tel:0000000000">(000) 000-0000</a>
        </>
      }
    />
  )
}
