import Projects from '../projects';
import Contact from '../contact';
import About from '../about';
import { AllContainer } from './allStyles';

const All = () => {
  return (
    <AllContainer>
      <About />
      <Projects />
      <Contact />
    </AllContainer>
  )
}

export default All