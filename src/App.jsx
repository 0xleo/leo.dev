import twitterLogo from './assets/twitterX.svg'
import linkedinLogo from './assets/linkedin.svg'
import perfilPhoto from './assets/perfil.png'
import githubLogo from '/Github.svg' 
import './App.css'

function App() {

  return (
    <>
        <img src={perfilPhoto} className="perfilPhoto" alt="Photo perfil" />
          <h1>leo.dev</h1>
          <h2>Developer & designer</h2>
      <div>
        <a href="https://github.com/0xleo" target="_blank" rel="noreferrer">
          <img src={githubLogo} className="logo github" alt="Vite logo" />
        </a>
        <a href="https://twitter.com/0xleo_dev" target="_blank" rel="noreferrer">
          <img src={twitterLogo} className="logo twitter" alt="React logo" />
        </a>
        <a href="https://www.linkedin.com/in/leonardo-jim%C3%A9nez-411996194/" target="_blank" rel="noreferrer">
          <img src={linkedinLogo} className="logo linkedin" alt="Linkedin logo" />
        </a>
      </div>
    </>
  )
}

export default App
