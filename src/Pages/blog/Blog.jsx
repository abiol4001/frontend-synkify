import { useEffect } from 'react'
import Aos from 'aos'

const Blog = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <div className='uppercase text-center m-32' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" style={{ fontWeight: '700', letterSpacing: '15px' }}>Blog page coming soon....</div>
    )
}

export default Blog