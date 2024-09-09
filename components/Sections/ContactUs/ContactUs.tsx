import { Section } from "../Section";
import { ContactModal } from "../../ContactModal/ContactModal";

export function ContactUs() {
  return (
    <Section
      bg="black.9"
      title="Contact Us"
      innerProps={{
        flex: 1,
      }}
    >
      <ContactModal style={{ alignSelf: "center" }} w="100%"></ContactModal>
    </Section>
  );
}
