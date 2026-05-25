export const dandy = {
  slug: 'dandy-valentine',
  name: 'Dandy Valentine',
  kana: 'バレンタイン・ダンディ',
  romaji: 'Barentain Dandi',
  series: 'Pink Guy',
  category: 'Characters',
  overview: `
    <strong>Dandy Valentine</strong> (バレンタイン・ダンディ <em>Barentain Dandi</em>) is the protagonist of the <em>Pink Guy</em> series. He frequently becomes involved in situations he does not fully understand.
  `,
  sections: [
    {
      id: 'appearance',
      title: 'Appearance',
      content: `
        <p>
          Dandy Valentine is a young man with light skin, a lean build, pale blond hair, and dull grey-blue eyes that often appear half-open.
          A small adhesive bandage sits across the bridge of his nose, and one of his upper front teeth is missing, leaving a slight gap when he smiles or speaks.
          He usually wears a faded pastel pink hoodie with the hood pulled up, along with torn dark blue jeans and worn sneakers.
          After coming into contact with an arcane phenomenon, he develops a long wolf tail, claw-like fingernails, large wolf ears, and small fangs.
          He later begins wearing a pastel pink blazer over a white dress shirt and black tie, paired with black trousers and black dress shoes.
        </p>
      `,
    },
    {
      id: 'personality',
      title: 'Personality',
      content: `
        <p>
          Dandy Valentine is foul-mouthed, impulsive, and emotionally direct, often speaking or acting without thinking ahead.
          After spending several years homeless, he focuses mainly on immediate comfort and simple pleasures, which causes him to come across as immature, selfish, or overly interested in women and relationships.
          He frequently talks about wanting an ordinary life and pursuing the <em>American Dream</em>, especially having a stable job, attending college, owning a home, getting married, and raising a family.
          He also becomes attached to people quickly and shows strong loyalty toward those he grows close to.
          Frustration with his situation often leads to reckless decisions.
        </p>
      `,
    },
    {
      id: 'powers',
      title: 'Powers',
      content: `
        <p>
          Dandy Valentine possesses arcane phenomena tied to adaptation and instinct.
          His primary power develops through exposure to and understanding of other arcane phenomena, allowing him to interpret imperfect variations used by those he encounters.
          He also has a set of bestial subpowers, which only appear after suffering fatal injuries.
          Unlike most characters, his survival is closely tied to his own will to continue living.
        </p>
        <h3 id="archetypal-drift">Archetypal Drift</h3>
        <p>
          <strong>Archetypal Drift</strong> allows him to interpret imperfect variations of other arcane phenomena through prolonged exposure and personal understanding.
          These interpretations are shaped by his own perception of the phenomenon and may develop differently from their original forms.
          He is only capable of interpreting a single phenomenon from another individual, and the process itself is unreliable even when performed intentionally.
        </p>
        <h3 id="subpowers">Subpowers</h3>
        <p>
          Like other arcane phenomena, he exhibits the common abilities normally associated with them.
          He also has a unique set of abilities tied to his bestial transformation, which only appear after suffering fatal injuries in his human state.
        </p>
        <h4>Bestial Convergence</h4>
        <p>
          <strong>Bestial Convergence</strong> is a passive ability that causes him to gradually develop permanent bestial traits.
          These changes become more pronounced over time and are accompanied by shifts in behavior, instinctive response, and physical structure.
        </p>
        <h4>Bestial Weaponization</h4>
        <p>
          <strong>Bestial Weaponization</strong> is an active ability that allows him to utilize his transformed physical traits as weapons.
          Features such as his fangs, nails, and tail can be used offensively or defensively, often in ways that resemble instinctive animal behavior.
        </p>
      `
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
      alt: 'Dandy Valentine standing with his hands in the pocket of a pastel pink hoodie.',
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
            value: 'バレンタイン・ダンディ',
          },
          {
            label: 'Romaji',
            value: 'Barentain Dandi',
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
            value: 'Hybrid',
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
            label: 'Dislikes',
            value: 'Cats',
          },
          {
            label: 'Education',
            value: `
              <span>Midwood High School</span>
              <span class="education-context">(dropped out)</span>
            `,
            className: 'education',
          },
          {
            label: 'Habits',
            value: 'Daydreaming',
          },
          {
            label: 'Hobbies',
            value: 'Sleeping',
          },
          {
            label: 'Likes',
            value: 'Food, Women',
          },
          {
            label: 'Personality',
            value: 'ESFP',
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
        heading: 'Phenomena Information',
        rows: [
          {
            label: 'Arcana',
            spoiler: true,
            buttonText: 'Reveal Arcana',
            revealedValue: 'The Fool',
          },
          {
            label: 'Power',
            value: 'Archetypal Drift',
          },
          {
            label: 'Subpower',
            value: 'Bestial',
          },
          {
            label: 'Weapon',
            value: '—',
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
              <span class="affiliation-context">Operations Specialist</span>
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
            alt: 'A character reference sheet of Dandy Valentine wearing a pastel pink hoodie, torn jeans, and carrying a baseball bat.',
            fullImage: '/images/dandy-concept-(human)-1280.webp',
            caption: 'Concept Art 1',
          },
          {
            src: '/images/dandy-concept-(hybrid)-800.webp',
            srcset: `
              /images/dandy-concept-(hybrid)-800.webp 800w,
              /images/dandy-concept-(hybrid)-1280.webp 1280w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'A character reference sheet of Dandy Valentine in his hybrid form, wearing a pastel pink blazer with wolf ears, a tail, and sharp fangs.',
            fullImage: '/images/dandy-concept-(hybrid)-1280.webp',
            caption: 'Concept Art 2',
          },
          {
            src: '/images/dandy-concept-sheet-(human)-800.webp',
            srcset: `
              /images/dandy-concept-sheet-(human)-800.webp 800w,
              /images/dandy-concept-sheet-(human)-1280.webp 1280w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'A character reference sheet of Dandy Valentine wearing a pastel pink hoodie, torn jeans, and carrying a baseball bat including three facial expressions shown on the side such as neutral, excited, and smiling.',
            fullImage: '/images/dandy-concept-sheet-(human)-1280.webp',
            caption: 'Character Sheet 1',
          },
          {
            src: '/images/dandy-concept-sheet-(hybrid)-800.webp',
            srcset: `
              /images/dandy-concept-sheet-(hybrid)-800.webp 800w,
              /images/dandy-concept-sheet-(hybrid)-1280.webp 1280w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'A character reference sheet of Dandy Valentine in his hybrid form, wearing a pastel pink blazer with wolf ears, a tail, and sharp fangs including three facial expressions shown on the side such as neutral, serious, and smiling.',
            fullImage: '/images/dandy-concept-sheet-(hybrid)-1280.webp',
            caption: 'Character Sheet 2',
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
            alt: 'Dandy Valentine standing with his hands in the pocket of a pastel pink hoodie.',
            fullImage: '/images/dandy-infobox-(human)-1200.webp',
            caption: 'Cover Art 1',
          },
          {
            src: '/images/dandy-infobox-(hybrid)-800.webp',
            srcset: `
              /images/dandy-infobox-(hybrid)-800.webp 800w,
              /images/dandy-infobox-(hybrid)-1200.webp 1200w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'Dandy Valentine in his hybrid form, standing in a narrow city alley while wearing a pastel pink suit jacket, black tie, and dark trousers.',
            fullImage: '/images/dandy-infobox-(hybrid)-1200.webp',
            caption: 'Cover Art 2',
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
    <strong>London</strong> (ロンドン <em>Rondon</em>) is a major character from the <em>Pink Guy</em> series. She is the Administrator in the Bureau of Arcane Affairs, an international organization responsible for overseeing arcane phenomena.
  `,
  sections: [
    {
      id: 'appearance',
      title: 'Appearance',
      content: `
        <p>
          London is a woman with light skin and a slender build.
          She has straight pastel-brown hair cut into a shoulder-length bob with even bangs that rest just above her eyes.
          Her pale eyes contain concentric rings within the irises, and she is usually seen with a neutral expression and upright posture.
          She wears a black business suit consisting of a fitted blazer and a high-waisted knee-length skirt over a white blouse tied at the collar, along with plain black flats.
        </p>
      `,
    },
    {
      id: 'personality',
      title: 'Personality',
      content: `
        <p>
          London is reserved and difficult to read, rarely showing strong emotion even in dangerous or high-pressure situations.
          She speaks in a soft and direct manner and usually appears confident in her decisions.
          Although polite and approachable, she keeps emotional distance from the people around her and rarely reveals what she is thinking or feeling.
          She seldom raises her voice or changes her expression during conversations and usually prefers persuasion over direct force or intimidation.
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
      alt: 'London standing in front of a city skyline while wearing a white blouse and dark skirt.',
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
            value: 'Unknown',
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
            value: 'Hybrid',
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
            label: 'Dislikes',
            value: 'Tea',
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
            label: 'Hobbies',
            value: 'French Tarot, Reading',
          },
          {
            label: 'Likes',
            value: 'Coffee, Classic Rock',
          },
          {
            label: 'Personality',
            value: 'INTJ',
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
        heading: 'Phenomena Information',
        rows: [
          {
            label: 'Arcana',
            spoiler: true,
            buttonText: 'Reveal Arcana',
            revealedValue: 'The World',
          },
          {
            label: 'Power',
            value: 'Absolute Authority',
          },
          {
            label: 'Subpower',
            value: 'Secondhand Smoke',
          },
          {
            label: 'Weapon',
            value: '—',
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
            alt: 'A character reference sheet of London wearing a black business suit with a shoulder-length bob haircut.',
            fullImage: '/images/london-concept-1280.webp',
            caption: 'Concept Art 1',
          },
          {
            src: '/images/london-concept-sheet-800.webp',
            srcset: `
              /images/london-concept-sheet-800.webp 800w,
              /images/london-concept-sheet-1280.webp 1280w
            `,
            sizes: '(min-width: 1200px) 400px, 90vw',
            alt: 'A character reference sheet of London wearing a black business suit with a shoulder-length bob haircut including three facial expressions shown on the side such as neutral, smiling, and tilted.',
            fullImage: '/images/london-concept-sheet-1280.webp',
            caption: 'Character Sheet 1',
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
            alt: 'London standing in front of a city skyline while wearing a white blouse and dark skirt.',
            fullImage: '/images/london-infobox-1200.webp',
            caption: 'Cover Art 1',
          },
        ],
      },
    ],
  },
};
