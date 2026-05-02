export const dandy = {
  slug: 'dandy-valentine',
  name: 'Dandy Valentine',
  kana: 'ダンディ・バレンタイン',
  romaji: 'Dandi Barentain',
  series: 'Pink Guy',
  category: 'Characters',
  overview: `
    <strong>Dandy Valentine</strong> (ダンディ・バレンタイン <em>Dandi Barentain</em>) is the central protagonist of the <em>Pink Guy</em> series. He often finds himself caught up in situations he doesn't fully understand.
  `,
  sections: [
    {
      id: 'appearance',
      title: 'Appearance',
      content: `
        <p>
          Dandy Valentine is a young man with light skin and a lean frame.
          He has pale blonde hair, cut short and uneven, with strands falling loosely over his brow.
          His eyes are a dull grey-blue and often sit half-open.
          A small adhesive bandage rests across the bridge of his nose.
          When he smiles, one of his upper front teeth is missing.
        </p>
        <br />
        <p>
          He wears a faded pink hoodie with a kangaroo pocket and drawstrings at the collar, usually with the hood up.
          The cuffs bunch slightly at his wrists, and it hangs loosely on his frame.
          He pairs this with dark denim jeans with multiple tears along the thighs and knees, along with low-cut sneakers that are visibly scuffed.
        </p>
      `,
    },
    {
      id: 'personality',
      title: 'Personality',
      content: `
        <p>
          Dandy Valentine has a laid-back, reactive disposition.
          He responds to situations as they happen rather than working toward a clear goal, and rarely thinks beyond what is directly in front of him.
          His thinking is simple and direct, often following whatever draws his attention in the moment.
        </p>
        <br />
        <p>
          His reactions are minimal, even in situations that would unsettle others.
          Instead of questioning what he does not understand, he accepts it and moves on, adjusting as needed.
          This can make him seem indifferent, though he remains attentive and quick to respond when something catches his interest.
        </p>
        <br />
        <p>
          He places strong importance on the <em>American Dream</em> and associates it with relationships, particularly with women.
          In these situations, he can become fixated and tends to take interactions at face value, sometimes misreading them.
        </p>
        <br />
        <p>
          His behavior can come across as unusual.
          He gives little thought to how his actions are perceived and handles situations in whatever way makes sense to him at the time, even when it seems out of place.
          He also adjusts quickly to new environments and becomes familiar with people and surroundings without much hesitation.
        </p>
      `,
    },
  ],
  infobox: {
    image: {
      src: '/images/dandy-infobox-(human)-1200.webp',
      srcset: `
        /images/dandy-infobox-(human)-800.webp 800w,
        /images/dandy-infobox-(human)-1200.webp 1200w
      `,
      sizes: '(min-width: 1200px) 320px, 90vw',
      alt: 'Dandy',
    },
    groups: [
      {
        heading: 'Name',
        rows: [
          {
            label: 'Alias',
            value: 'Pink Guy',
          },
          {
            label: 'Kana',
            value: 'ダンディ・バレンタイン',
          },
          {
            label: 'Romaji',
            value: 'Dandi Barentain',
          },
        ],
      },
      {
        heading: 'Biological Information',
        rows: [
          {
            label: 'Age',
            value: '21',
          },
          {
            label: 'Birthday',
            value: 'February 14',
          },
          {
            label: 'Birthplace',
            value: 'New York, United States',
          },
          {
            label: 'Blood Type',
            value: 'B+',
          },
          {
            label: 'Gender',
            value: 'Male',
          },
          {
            label: 'Height',
            value: `180 cm (5'11")`,
          },
          {
            label: 'Species',
            value: `
              <span>Hybrid</span>
              <span class="species-context">(formerly human)</span>
            `,
            className: 'species',
          },
          {
            label: 'Weight',
            value: '73 kg (160 lb)',
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
            revealedValue: 'The Fool',
          },
          {
            label: 'Dislikes',
            value: 'Rejection',
          },
          {
            label: 'Education',
            value: `
              <span>James Madison High School</span>
              <span class="education-context">(dropped out)</span>
            `,
            className: 'education',
          },
          {
            label: 'Habits',
            value: 'Clinging',
          },
          {
            label: 'Likes',
            value: 'Fast Food, Women',
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
              <span class="affiliation-context">Field Operations</span>
            `,
            className: 'affiliation',
          },
          {
            label: 'Jurisdiction',
            value: 'United States',
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
            src: '/images/dandy-concept-(human)-800.webp',
            srcset: `
              /images/dandy-concept-(human)-800.webp 800w,
              /images/dandy-concept-(human)-1280.webp 1280w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'Dandy Valentine\'s Human Concept Art',
            fullImage: '/images/dandy-concept-(human)-1280.webp',
            caption: 'Dandy Valentine\'s Human Concept Art',
          },
          {
            src: 'https://placehold.co/800x481',
            srcset: `
              https://placehold.co/800x481 800w,
              https://placehold.co/1280x769 1280w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'Dandy Valentine\'s Hybrid Concept Art',
            fullImage: 'https://placehold.co/1280x769',
            caption: 'Dandy Valentine\'s Hybrid Concept Art',
          },
        ],
      },
      {
        id: 'cover-art',
        label: 'Cover Art',
        images: [
          {
            src: '/images/dandy-infobox-(human)-800.webp',
            srcset: `
              /images/dandy-infobox-(human)-800.webp 800w,
              /images/dandy-infobox-(human)-1200.webp 1200w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'Dandy Valentine\'s Human Cover Art',
            fullImage: '/images/dandy-infobox-(human)-1200.webp',
            caption: 'Dandy Valentine\'s Human Cover Art',
          },
          {
            src: 'https://placehold.co/800x1000',
            srcset: `
              https://placehold.co/800x1000 800w,
              https://placehold.co/1200x1500 1200w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'Dandy Valentine\'s Hybrid Cover Art',
            fullImage: 'https://placehold.co/1200x1500',
            caption: 'Dandy Valentine\'s Hybrid Cover Art',
          },
        ],
      },
    ],
  },
};

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
            alt: 'London\'s Concept Art',
            fullImage: '/images/london-concept-1280.webp',
            caption: 'London\'s Concept Art',
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
            alt: 'London\'s Cover Art',
            fullImage: '/images/london-infobox-1200.webp',
            caption: 'London\'s Cover Art',
          },
        ],
      },
    ],
  },
};
