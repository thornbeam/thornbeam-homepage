import Article from "./layouts/article";
import { Container, Text } from "@chakra-ui/react";
import ContentTitle from "../components/contentTitle";

const ParagraphTitle = ({ children }) => {
  return <Text fontWeight="bold">{children}</Text>;
};

export default function Impressum() {
  return (
    <Article>
      <ContentTitle>Impressum</ContentTitle>
      <Container maxW="container.sm" fontFamily="Roboto Slab, serif">
        Legal notice according to paragraph 5 TMG
        <br />
        <br />
        Hidetoshi Mitsuzaki
        <br />
        Am Trippelsberg 139
        <br />
        40589 Duesseldorf
        <br />
        thornbeam@posteo.eu
        <br />
        <br />
        <br />
        <ParagraphTitle>Image copyright © Hidetoshi Mitsuzaki</ParagraphTitle>
        <br />
        Legal notice: no content of this website may be reproduced, downloaded
        and used in any form without prior written permission by the artist. The
        use of images from this website without explicit consent by the artist
        is prohibited. 
        <br />
        All content of this website are copyright by Hidetoshi Mitsuzaki under
        German Copyright Law and intellectual property right and is provided as
        information only. Any commercial usage and transfer of the contact
        information for commercial recruitment and any kind of data abuse is
        prohibited.
      </Container>
      <ContentTitle>Disclaimer</ContentTitle>
      <Container maxW="container.sm" fontFamily="Roboto Slab, serif">
        <ParagraphTitle>Liability for content</ParagraphTitle>
        <br />
        As a service provider we are responsible according to § 7 Abs.1 TMG for
        own contents on these sides according to the general laws. According to
        §§ 8 to 10 TMG, however, we as a service provider are not obligated to
        monitor transmitted or stored third-party information or to investigate
        circumstances that indicate an illegal activity.
        <br />
        Obligations to remove or block the use of information under general law
        remain unaffected. A liability in this regard, however, is only possible
        from the date of knowledge of a specific infringement. Upon notification
        of appropriate violations, we will remove this content immediately.
        <br />
        <br />
        <br />
        <ParagraphTitle>Liability for links</ParagraphTitle>
        <br />
        Our offer contains links to external websites of third parties on whose
        contents we have no influence. Therefore, we can not assume any
        liability for these external contents. The respective provider or
        operator of the pages is always responsible for the contents of the
        linked pages. The linked pages were checked for possible legal
        violations at the time of linking. Illegal content was not recognizable
        at the time of linking.
        <br />
        However, a permanent content control of the linked pages is not
        reasonable without concrete evidence of an infringement. Upon
        notification of violations, we will remove such links immediately.
        <br />
        <br />
        <br />
        <ParagraphTitle>Copyright</ParagraphTitle>
        <br />
        The content and works on these pages created by the site operators are
        subject to German copyright law. The reproduction, processing,
        distribution and any kind of exploitation outside the limits of
        copyright require the written consent of the respective author or
        creator. Downloads and copies of this site are for private,
        non-commercial use only.
        <br />
        As far as the contents on this side were not created by the operator,
        the copyrights of third parties are considered. In particular contents
        of third parties are marked as such. If you should still be aware of a
        copyright infringement, we ask for a note. Upon notification of
        violations, we will remove such content immediately.
        <br />
        <br />
        <br />
        <ParagraphTitle>Data protection</ParagraphTitle>
        <br />
        The use of our website is usually possible without providing personal
        information. As far as on our sides personal data (for example name,
        address or eMail addresses) are raised, this takes place, as far as
        possible, always on a voluntary basis. These data will not be disclosed
        to third parties without your explicit consent.
        <br />
        Please note that data transmission over the Internet (for example, when
        communicating via e-mail) may have security vulnerabilities. A complete
        protection of the data from access by third parties is not possible.
        <br />
        The use of contact data published in the context of the legal notice
        obligation by third parties for sending unsolicited advertising and
        information materials is hereby expressly excluded. The operators of the
        pages expressly reserve the right to take legal action in the event of
        the unsolicited sending of advertising information, such as spam
        e-mails.
      </Container>
    </Article>
  );
}
