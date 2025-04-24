import { Container, Title, Text, List, Divider } from "@mantine/core";

export default function CopyrightPolicy() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="md" style={{ fontWeight: 700, textAlign: "center" }}>
        GIMAGE LLC COPYRIGHT POLICY
      </Title>
      <Text mb="lg" style={{ fontStyle: "italic", textAlign: "center" }}>
        Version 1.0 - Last Revised on: April 13, 2025
      </Text>
      <Divider size="sm" mb="lg" />

      <Title order={2} mb="sm">
        Reporting Claims of Copyright Infringement
      </Title>
      <Text mb="md">
        We take claims of copyright infringement seriously. We will respond to notices of alleged
        copyright infringement that comply with applicable law. If you believe any materials
        accessible on or through our services (<strong>“Services”</strong>), including www.gimageco.com (the <strong>“Website”</strong>) and the Gimage Mobile Application (the <strong>“App”</strong>), infringe your copyright, you may
        request removal of those materials (or access to them) from the Website by submitting
        written notification to our copyright agent (designated below).
      </Text>
      <Text mb="md">
        In accordance with the Online Copyright Infringement Liability Limitation Act of the Digital
        Millennium Copyright Act (17 U.S.C. § 512) (<strong>“DMCA”</strong>), the written notice (the <strong>“DMCA Notice”</strong>)
        must include substantially the following:
      </Text>

      <List withPadding mb="md">
        <List.Item>Your physical or electronic signature.</List.Item>
        <List.Item>
          Identification of the copyrighted work you believe to have been infringed or, if the
          claim involves multiple works on the Website, a representative list of such works.
        </List.Item>
        <List.Item>
          Identification of the material you believe to be infringing in a sufficiently precise
          manner to allow us to locate that material.
        </List.Item>
        <List.Item>
          Adequate information by which we can contact you (including your name, postal address,
          telephone number, and, if available, email address).
        </List.Item>
        <List.Item>
          A statement that you have a good faith belief that use of the copyrighted material is not
          authorized by the copyright owner, its agent, or the law.
        </List.Item>
        <List.Item>
          A statement that the information in the written notice is accurate.
        </List.Item>
        <List.Item>
          A statement, under penalty of perjury, that you are authorized to act on behalf of the
          copyright owner.
        </List.Item>
      </List>

      <Text mb="md">
        Our designated copyright agent to receive DMCA Notices is:
      </Text>
      <Text mb="md">
        <strong>Matthew Paull</strong>
        <br />
        Gimage, LLC
        <br />
        <a href="mailto:team@gimageco.com">team@gimageco.com</a>
      </Text>

      <Text mb="md">
        If you fail to comply with all of the requirements of Section 512(c)(3) of the DMCA, your
        DMCA Notice may not be effective.
      </Text>
      <Text mb="md">
        Please be aware that if you knowingly materially misrepresent that material or activity on
        the Website is infringing your copyright, you may be held liable for damages (including
        costs and attorneys&apos; fees) under Section 512(f) of the DMCA.
      </Text>

      <Title order={2} mb="sm">
        Repeat Infringers
      </Title>
      <Text>
        It is our policy in appropriate circumstances to disable and/or terminate the accounts of
        users who are repeat infringers.
      </Text>
    </Container>
  );
}