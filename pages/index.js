import TopGames from '../components/Homepage/TopGames'
import Jumbotron from '../components/Homepage/Jumbotron'
import Partner from '../components/Homepage/Partner'
import CTA from '../components/Homepage/CTA'
import Testimoni from '../components/Homepage/Testimoni'

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <Partner />
      <TopGames />
      <Testimoni />
      <CTA />
    </div>
  )
}
