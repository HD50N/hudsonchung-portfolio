const ACHIEVEMENTS = [
  '2x New York State Champion',
  'All-American Swimmer',
  'HGHS Varsity Swim Team Captain',
  'ConEdison Scholar Athlete Award',
  'Summer Junior Nationals Qualifier',
  'USA Eastern Zone Select Camp',
]

const ARTICLES = [
  {
    source: 'LoHud',
    title: 'Horace Greeley junior wins two Section 1 individual championships',
    date: 'Feb 2022',
    link: 'https://www.lohud.com/story/sports/high-school/swimming/2022/02/09/swimming-greeley-junior-hudson-chung-won-four-section-1-titles/6682148001/',
    cta: 'Read',
  },
  {
    source: 'LoHud',
    title: "Con Edison Athlete of the Week: Horace Greeley's Hudson Chung",
    date: 'Mar 2022',
    link: 'https://www.lohud.com/story/sports/high-school/swimming/2022/03/11/con-edison-athlete-week-horace-greeley-swimmer-hudson-chung/9447208002/',
    cta: 'Read',
  },
  {
    source: 'Facebook',
    title: 'Con Edison Scholar Athlete Week Video Feature',
    date: 'Mar 2022',
    link: 'https://www.facebook.com/watch/?v=793296652043338',
    cta: 'Watch',
  },
  {
    source: 'The Inside Press',
    title: 'Greeley Boys Swim and Dive Team Coverage',
    date: '2022–2023',
    link: 'https://www.theinsidepress.com/tag/greeley-boys-swim-and-dive-team/',
    cta: 'Read',
  },
  {
    source: 'LoHud',
    title: 'Boys swimming: Horace Greeley successfully defends state championship',
    date: 'Mar 2023',
    link: 'https://www.lohud.com/story/sports/high-school/swimming/2023/03/04/section-1-swimming-horace-greeley-defends-ny-state-title/69956155007/',
    cta: 'Read',
  },
  {
    source: 'SwimSwam',
    title: 'Horace Greeley Boys Defend New York High School State Title in Dominant Fashion',
    date: 'Mar 2023',
    link: 'https://swimswam.com/horace-greeley-boys-defend-new-york-high-school-state-title-in-dominant-fashion/',
    cta: 'Read',
  },
]

export default function Swimming() {
  return (
    <section id="swimming">
      <div className="container">
        <div className="section-eyebrow reveal">04 — Swimming</div>
        <h2 className="section-title reveal reveal-d1">
          In the<br />Water
        </h2>

        <div className="swim-layout">
          <div className="reveal">
            <div className="achievements-list">
              {ACHIEVEMENTS.map(a => (
                <div key={a} className="achievement-row">
                  <div className="achievement-dot" />
                  <span className="achievement-text">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2">
            <div className="swim-times-wrap">
              <div className="swim-times-label">Top Times — SwimCloud</div>
              <iframe
                src="https://www.swimcloud.com/swimmer/1149977/iframe/?splashes_type=fastest"
                title="SwimCloud top times"
              />
            </div>
          </div>
        </div>

        <a
          href="https://photos.app.goo.gl/aBSXKn1rcxX9HQgw5"
          target="_blank"
          rel="noopener noreferrer"
          className="swim-videos-link reveal"
        >
          Watch Videos <span>↗</span>
        </a>

        <div className="section-eyebrow reveal" style={{ marginBottom: '24px' }}>
          Press Coverage
        </div>

        <div className="press-grid">
          {ARTICLES.map(({ source, title, date, link, cta }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="press-card reveal"
            >
              <div className="press-source">{source}</div>
              <div className="press-title">{title}</div>
              <div className="press-meta">
                <span className="press-date">{date}</span>
                <span className="press-cta">{cta} ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
