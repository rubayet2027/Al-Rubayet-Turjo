import HomePage from './(home)/page';
import AboutPage from './(about)/page';
import SkillsPage from './(skills)/page';
import EducationPage from './(education)/page';
import ExperiencePage from './(experience)/page';
import ProjectsPage from './projects/page';
import ContactPage from './(contact)/page';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <EducationPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
