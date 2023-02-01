import { useEffect } from 'react'
import Aos from 'aos'

const About = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='uppercase text-center m-32 text-2xl' data-aos="fade-up"
      data-aos-anchor-placement="top-bottom" style={{ fontWeight: '700', letterSpacing: '15px' }}>About page coming soon....</div>
  )
}

export default About