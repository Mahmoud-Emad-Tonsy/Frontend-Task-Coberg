import Banner from '../components/Banner';
import Land from '../components/Land';
import Services from '../components/Services';
import Blog from '../components/Blog';

const Section = () => {

  return (
    <div className="section-container">
      <div className='rectangle-bg'>
        <Banner />
        <Land />
        <Services />
      </div>

      <Blog />
    </div>
  );
}

export default Section