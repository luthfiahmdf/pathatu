import { Navbar } from './components/navbar'
import { FeatureSection, LocationSection, MainSection } from '@/section'
import { DonationSection } from './section/donation-section'
import { Footer } from './components/footer'


function App() {

  return (
    <>
      <div className='flex min-h-screen flex-col'>
        <Navbar />
        <main className='flex-1'>
          <MainSection />
          <FeatureSection />
          <DonationSection />
          <LocationSection />
          <Footer />
        </main>
      </div>

    </>
  )
}

export default App
