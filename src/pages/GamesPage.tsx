import TextPage, { type TextPageSection, type SidebarLink } from '../components/TextPage/TextPage'

const RELATED_PAGES: SidebarLink[] = [
  { label: 'Games & Payouts', href: '/games' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Register', href: '/register' },
  { label: 'Venue', href: '/venue' },
  { label: 'Hotels', href: '/hotels' },
]

const PLACEHOLDER = 'https://placehold.co/400x140/0d1f2d/5bb8e8?text=Game+Banner'

const sections: TextPageSection[] = [
  {
    id: 'rules',
    heading: 'Tournament Rules for Competitors',
    content: (
      <>
        <p><strong>Format</strong></p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</li>
          <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
          <li>Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
          <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</li>
        </ul>
        <p><strong>Checking In</strong></p>
        <ul>
          <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
          <li>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt.</li>
        </ul>
        <p><strong>Competition</strong></p>
        <ul>
          <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</li>
          <li>Et quas molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum.</li>
          <li>Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas.</li>
          <li>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'official-tournaments',
    heading: 'Official 2026 Tournaments',
    content: null,
  },
  {
    id: 'lorem-ipsum-strive',
    heading: 'Lorem Ipsum Strive',
    image: {
      src: PLACEHOLDER,
      alt: 'Lorem Ipsum Strive',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PS5 console / PS4 software · LOREM WORLD TOUR, PLATINUM QUALIFIER</strong></p>
        <ul>
          <li>Best 2/3 Rounds</li>
          <li>Best 3/5 Games per Set (entire tournament)</li>
          <li>Random stage select (players may opt for an agreed stage)</li>
          <li>Full Lorem World Tour rules will be enforced</li>
        </ul>
      </>
    ),
  },
  {
    id: 'dolor-sit-fighter',
    heading: 'Dolor Sit Fighter',
    image: {
      src: PLACEHOLDER,
      alt: 'Dolor Sit Fighter',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PlayStation 4 Pro</strong></p>
        <ul>
          <li>Best 2/3 Rounds, 2/3 Games per Set</li>
          <li>3/5 Games for WF, LF &amp; Grand Finals</li>
          <li>Eclipse color choices (color 23) cannot be used</li>
          <li>Random stage select (players may opt for an agreed stage)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'amet-cross-tag',
    heading: 'Amet Cross Tag Battle',
    image: {
      src: PLACEHOLDER,
      alt: 'Amet Cross Tag Battle',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PC</strong></p>
        <ul>
          <li>Shadow, Gold and EX characters are banned</li>
          <li>Banned stages: Lorem ipsum boss stage</li>
        </ul>
      </>
    ),
  },
  {
    id: 'consectetur-6',
    heading: 'Consectetur 6',
    image: {
      src: PLACEHOLDER,
      alt: 'Consectetur 6',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PlayStation 5</strong></p>
        <ul>
          <li>Best 2/3 Rounds, 2/3 Games per Set</li>
          <li>3/5 Games for all of top 8</li>
          <li>Random stage select (players may agree on stage)</li>
          <li>99s timer, motion blur OFF, input delay reduction ON</li>
          <li>In case of Double K.O., both players replay the tied match with same characters and stage</li>
        </ul>
      </>
    ),
  },
  {
    id: 'adipiscing-mixed-mode',
    heading: 'Adipiscing Mixed Mode',
    image: {
      src: PLACEHOLDER,
      alt: 'Adipiscing Mixed Mode',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PlayStation 5 · 2026 COMPETITIVE SERIES MAJOR</strong></p>
        <p><strong>$50,000 TOP 24 PRIZE POOL PLUS $3,000 DUO BOUNTY</strong></p>
        <ul>
          <li>Free to Enter</li>
          <li>Rules are listed <a href="#">HERE</a></li>
          <li>Prize pool payout structure can be found <a href="#">HERE</a></li>
        </ul>
      </>
    ),
  },
  {
    id: 'eiusmod-8',
    heading: 'Eiusmod Tempor 8',
    image: {
      src: PLACEHOLDER,
      alt: 'Eiusmod Tempor 8',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PlayStation 5</strong></p>
        <ul>
          <li>3/5 Rounds, 2/3 Matches, 60s timer</li>
          <li>3/5 Games for WF, LF &amp; Grand Finals</li>
          <li>Character Customizations: Off</li>
          <li>Stage must be randomly selected for every game</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incididunt-climax',
    heading: 'Incididunt Climax',
    image: {
      src: PLACEHOLDER,
      alt: 'Incididunt Climax',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PS5 console / PS4 software · LOREM WORLD TOUR, PLATINUM QUALIFIER</strong></p>
        <ul>
          <li>Best 2/3 Rounds, 2/3 Games per Set</li>
          <li>3/5 Games for WF, LF &amp; Grand Finals</li>
          <li>Random stage select (players may opt for an agreed stage)</li>
          <li>Full Lorem World Tour rules will be enforced</li>
          <li>V-Sync turned on</li>
        </ul>
      </>
    ),
  },
  {
    id: 'labore-granblue',
    heading: 'Labore et Dolore Versus',
    image: {
      src: PLACEHOLDER,
      alt: 'Labore et Dolore Versus',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PS5 console / PS4 software · LOREM WORLD TOUR, PLATINUM QUALIFIER</strong></p>
        <ul>
          <li>Best 2/3 Rounds, 2/3 Games per Set. 3/5 Games for all matches in Top 8</li>
          <li>Character blind pick allowed. Losing player may change characters</li>
          <li>Stage select is random. Players may agree on a stage</li>
          <li>Lunalu is banned</li>
          <li>Full Lorem World Tour rules will be enforced</li>
        </ul>
      </>
    ),
  },
  {
    id: 'magna-fury',
    heading: 'Magna Fatal Fury',
    image: {
      src: PLACEHOLDER,
      alt: 'Magna Fatal Fury',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PlayStation 5 · SWC 2026 MASTER 1 QUALIFIER</strong></p>
        <ul>
          <li>V-Sync: OFF, Motion Blur: ON</li>
          <li>Best 2/3 Rounds, 2/3 Games per Set. 3/5 Games for WF, LF &amp; Grand Finals</li>
          <li>Winner keeps character, Loser may switch. Double K.O. = replay last match</li>
          <li>Random stage select. Dream Lorem Park and Freight Express stages are banned</li>
          <li>Infinite combos and game-breaking glitches are banned</li>
        </ul>
      </>
    ),
  },
  {
    id: 'aliqua-kof',
    heading: 'Aliqua XV',
    image: {
      src: PLACEHOLDER,
      alt: 'Aliqua XV',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PS5 console / PS4 software · SWC 2026 MASTER 3 QUALIFIER</strong></p>
        <ul>
          <li>2/3 Games per Set</li>
          <li>3/5 Games for WF, LF &amp; Grand Finals</li>
          <li>Winner keeps team but can change order</li>
          <li>Loser of prior game may switch characters and order</li>
          <li>Random stage select (players may opt for an agreed stage)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'mystery-veniam',
    heading: 'Mystery Veniam Tournament',
    image: {
      src: PLACEHOLDER,
      alt: 'Mystery Veniam Tournament',
      position: 'left',
    },
    content: (
      <>
        <p><strong>Various Consoles</strong></p>
        <ul>
          <li>Must use provided controllers</li>
          <li>Round &amp; Set numbers will vary</li>
          <li>Different game in every bracket round</li>
          <li>Every pool will utilize different games</li>
          <li><a href="#"><strong>DETAILED MYSTERY RULES</strong></a></li>
        </ul>
      </>
    ),
  },
  {
    id: 'rivals-nostrud',
    heading: 'Rivals of Nostrud 2',
    image: {
      src: PLACEHOLDER,
      alt: 'Rivals of Nostrud 2',
      position: 'left',
    },
    content: (
      <>
        <p><strong>PC · LOREM AETHER 2 CHAMPIONSHIP SERIES FINAL STOP</strong></p>
        <p><strong>$2,000 TOP 8 POT BONUS</strong></p>
        <ul>
          <li>Tournament will be run on the latest patch</li>
          <li><a href="#"><strong>SEE FULL DETAILED RULES HERE</strong></a></li>
        </ul>
      </>
    ),
  },
  {
    id: 'community-tournaments',
    heading: 'Community Tournaments',
    image: {
      src: PLACEHOLDER,
      alt: 'Community Tournaments',
      position: 'left',
    },
    content: (
      <>
        <p>
          <strong>Register for FFXVIII Community Tournaments <a href="#">HERE</a>.</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Apply <a href="#"><strong>HERE</strong></a> today to run your
          own community tournament at FFXVIII 2026.
        </p>
      </>
    ),
  },
  {
    id: 'payout-structure',
    heading: 'Payout Structure',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Any tournament with a prize pool totaling $1,000 or more will pay out Top 8
          automatically, regardless of the number of entries.
        </p>
        <p><strong>Tournaments with 1–64 competitors will pay out to the Top 3:</strong></p>
        <ul>
          <li>1st place: 60%</li>
          <li>2nd place: 25%</li>
          <li>3rd place: 15%</li>
        </ul>
        <p><strong>Tournaments with 65+ competitors will pay out to the Top 8:</strong></p>
        <ul>
          <li>1st place: 50%</li>
          <li>2nd place: 20%</li>
          <li>3rd place: 13%</li>
          <li>4th place: 7%</li>
          <li>5th + 5th place: 3%</li>
          <li>7th + 7th place: 2%</li>
        </ul>
      </>
    ),
  },
]

export default function GamesPage() {
  return (
    <TextPage
      title="Games & Payouts"
      subtitle="Official 2026 Tournament Rules and Payout Structure"
      sections={sections}
      relatedPages={RELATED_PAGES}
    />
  )
}
