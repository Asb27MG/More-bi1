import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import UseCases from './components/UseCases'
import Solutions from './components/Solutions'
import Approach from './components/Approach'
import Stack from './components/Stack'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import IaDemo from './components/IaDemo'
import WhyMoreBI from './components/WhyMoreBI'
import Faq from './components/Faq'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        {/* ① Full-viewport hero */}
        <Hero />

        {/* ② Trust signals — metrics + client sectors */}
        <TrustBar />

        {/* ③ Services bento */}
        <Services />

        {/* ④ Industries — compact horizontal strip */}
        <UseCases />

        {/* ⑤ Solutions */}
        <Solutions />

        {/* ⑥ Approach */}
        <Approach />

        {/* ⑧ Stack */}
        <Stack />

        {/* ⑨ Process timeline */}
        <Process />

        {/* ⑩ Portfolio */}
        <Portfolio />

        {/* Demo IA integrado */}
        <IaDemo />

        {/* ⑪ Why MoreBI — compact strip */}
        <WhyMoreBI />

        {/* ⑫ FAQ */}
        <Faq />

        {/* ⑬ Contact form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
