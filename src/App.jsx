import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Categories from './components/Categories.jsx'
import Estimator from './components/Estimator.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Estimator />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
