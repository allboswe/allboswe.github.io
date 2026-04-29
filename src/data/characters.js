export const london = {
  slug: 'london',
  name: 'London',
  kana: 'ロンドン',
  romaji: 'Rondon',
  series: 'Pink Guy',
  category: 'Characters',
  overview: `
    <strong>London</strong> (ロンドン <em>Rondon</em>) serves as an Administrator in the Bureau of Arcane Affairs, a global organization responsible for overseeing arcane phenomena.
  `,
  sections: [
    {
      id: 'appearance',
      title: 'Appearance',
      content: `
        <p>
          London is a woman with light, neutral-toned skin and an average build.
          She has straight, shoulder-length pastel brown hair, cut in a blunt bob with even bangs that rest just above her eyebrows.
          Her eyes are a pale, desaturated brown, with small unfilled pupils encircled by a single thin ring.
        </p>
        <br />
        <p>
          She wears a black two-piece business suit consisting of a fitted blazer with notch lapels and a high-waisted, knee-length pencil skirt.
          Underneath, she wears a white blouse with long sleeves and buttoned cuffs.
          The blouse features a ribbon tie at the collar, secured with a small round fastener, with the ends falling down the front.
          She pairs this with plain black closed-toe flats and does not wear any visible accessories.
        </p>
      `,
    },
    {
      id: 'personality',
      title: 'Personality',
      content: `
        <p>
          London is composed and rarely shows outward reactions.
          It can be difficult to tell what she is thinking, as she tends to observe more than she speaks, and when she does, she is usually brief and direct.
          Her behavior comes across as distant, though she does not act that way intentionally.
        </p>
        <br />
        <p>
          In formal settings, she is highly capable and maintains a steady, professional demeanor.
          She handles negotiations and discussions without hesitation, even in high-pressure situations.
          She regularly meets with officials and world leaders through her work in the Bureau of Arcane Affairs and is known for remaining calm regardless of the circumstances.
        </p>
        <br />
        <p>
          Otherwise, she can be socially inept.
          She may misread tone or respond in ways that seem blunt or out of place.
        </p>
      `,
    },
  ],
  infobox: {
    image: {
      src: '/images/london-infobox-1200.webp',
      srcset: `
        /images/london-infobox-800.webp 800w,
        /images/london-infobox-1200.webp 1200w
      `,
      sizes: '(min-width: 1200px) 320px, 90vw',
      alt: 'London',
    },
    groups: [
      {
        heading: 'Name',
        rows: [
          {
            label: 'Alias',
            value: '—',
          },
          {
            label: 'Kana',
            value: 'ロンドン',
          },
          {
            label: 'Romaji',
            value: 'Rondon',
          },
        ],
      },
      {
        heading: 'Biological Information',
        rows: [
          {
            label: 'Age',
            value: `
              <span>Unknown</span>
              <span class="age-context">(appears late 20s)</span>
            `,
            className: 'age',
          },
          {
            label: 'Birthday',
            value: 'April 23',
          },
          {
            label: 'Birthplace',
            value: 'United Kingdom',
          },
          {
            label: 'Blood Type',
            value: 'AB+',
          },
          {
            label: 'Gender',
            value: 'Female',
          },
          {
            label: 'Height',
            value: `168 cm (5'6")`,
          },
          {
            label: 'Species',
            value: 'Human',
          },
          {
            label: 'Weight',
            value: '59 kg (130 lb)',
          },
        ],
      },
      {
        heading: 'Personal Information',
        rows: [
          {
            label: 'Arcana',
            spoiler: true,
            buttonText: 'Reveal Arcana',
            revealedValue: 'The World',
          },
          {
            label: 'Dislikes',
            value: 'Cliffhangers',
          },
          {
            label: 'Education',
            value: `
              <span>University of Oxford</span>
              <span class="education-context">PPE, DPhil in Politics</span>
            `,
            className: 'education',
          },
          {
            label: 'Habits',
            value: 'Smoking',
          },
          {
            label: 'Likes',
            value: 'Classic Rock, Coffee',
          },
          {
            label: 'Relatives',
            value: '—',
          },
          {
            label: 'Status',
            spoiler: true,
            buttonText: 'Reveal Status',
            revealedValue: 'Alive',
          },
        ],
      },
      {
        heading: 'Professional Information',
        rows: [
          {
            label: 'Affiliation',
            value: `
              <span>Bureau of Arcane Affairs</span>
              <span class="affiliation-context">Administrator</span>
            `,
            className: 'affiliation',
          },
          {
            label: 'Jurisdiction',
            value: 'Global',
          },
        ],
      },
      {
        heading: 'First Appearance',
        rows: [
          {
            label: 'Web Novel',
            value: 'TBA',
          },
        ],
      },
    ],
  },
  gallery: {
    category: 'Web Novel',
    tabs: [
      {
        id: 'concept-art',
        label: 'Concept Art',
        images: [
          {
            src: '/images/london-concept-800.webp',
            srcset: `
              /images/london-concept-800.webp 800w,
              /images/london-concept-1280.webp 1280w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'London Concept Art',
            fullImage: '/images/london-concept-1280.webp',
            caption: 'London Concept Art',
          },
        ],
      },
      {
        id: 'cover-art',
        label: 'Cover Art',
        images: [
          {
            src: '/images/london-infobox-800.webp',
            srcset: `
              /images/london-infobox-800.webp 800w,
              /images/london-infobox-1200.webp 1200w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'London Cover Art',
            fullImage: '/images/london-infobox-1200.webp',
            caption: 'London Cover Art',
          },
        ],
      },
    ],
  },
};
