import './Application.css'

function Application() {
  return (
  <>
    <div id='wrapper' className='flex-wrapper'>
      <div id='top-content' className='flex-item-default flex-content'>
        <header id='header' className='flex-item-default flex-header'>
          <div id='header-title' className='flex-item-default flex-header'>
            <h1 className='flex-item-default'>👋 Hi, I&apos;m Allan Boswell.</h1>
          </div>
        </header>
        <main id='main' className='flex-item-default'>
          <ul>
            <li>(2023) Graduated from Mississippi College</li>
            <li>(2016) Graduated from Holmes Community College</li>
            <li>(2013) Graduated from Northwest Rankin High School</li>
          </ul>
        </main>
        <footer id='footer' className='flex-item-default'></footer>
      </div>
      <div id='btm-content' className='flex-item-default flex-content'></div>
    </div>
  </>
)
}

export default Application
