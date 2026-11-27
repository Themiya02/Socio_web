import TopBanner from "../../components/layout/TopBanner";
import AuthNavbar from "../../components/layout/AuthNavbar";
import Container from "../../components/common/Container";
import ContactHero from "../../components/contact/ContactHero";
import ExperienceLounges from "../../components/contact/ExperienceLounges";
import ContactChannels from "../../components/contact/ContactChannels";
import DropANoteForm from "../../components/contact/DropANoteForm";
import FaqAccordion from "../../components/contact/FaqAccordion";
import ExploreMoreCards from "../../components/contact/ExploreMoreCards";
import Footer from "../../components/layout/Footer";

export default function ContactPage() {
  return (
    <div id="top" className="min-h-screen bg-slate-50/40 text-slate-900 flex flex-col">
      <TopBanner />
      <AuthNavbar />

      <main className="flex-1">
        <ContactHero />
        <ExperienceLounges />

        <section className="mt-8 sm:mt-10">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5">
                <ContactChannels />
              </div>
              <div className="lg:col-span-7">
                <DropANoteForm />
              </div>
            </div>
          </Container>
        </section>

        <FaqAccordion />
        <ExploreMoreCards />
      </main>

      <Footer />
    </div>
  );
}