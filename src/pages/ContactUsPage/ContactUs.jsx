// import ContactUsHero from './ContactUsHero';
import ContactUsForm from './ContactUsForm';
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import "./Contact.css";

function ContactUs() {
  return (
    <>
      <PageWrapper>
        <div className="">
            {/* <ContactUsHero/> */}
            <ContactUsForm/>
        </div>
      </PageWrapper>
    </>
  )
}

export default ContactUs