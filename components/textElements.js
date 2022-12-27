import NextLink from "next/link";
import { Text, Link } from "@chakra-ui/react";

const DerBogenImAugeExhibitionFooter = (
  <Text>
    2022 Der Bogen im Auge / Photos: Ivo Faber /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://www.kunst-im-tunnel.de/exhibition/der-bogen-im-auge/"
      isExternal
    >
      More details
    </Link>
  </Text>
);

const KosmetikExhibitionFooter = (
  <Text>
    2021 Kosmetik, with Denise Werth / Photos: Kai Werner Schmidt /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://nails-room.com/kosmetik/"
      isExternal
    >
      More details
    </Link>
  </Text>
);

const YoungArtistPublicationData = (
  <>
    <Text mt={7} fontWeight="bold">
      Young Artists / Hidetoshi Mitsuzaki
    </Text>
    <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
      Katalog
      <br />
      28,0 cm x 22,0 cm
      <br />
      80 Seiten
      <br />
      41 farbigen Abb.
    </Text>
    <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
      Herausgeber: Matthias Erntges
      <br />
      Verlag Wienand
      <br />
      ISBN 978-3-86832-652-9
    </Text>
    <Link
      mt={3}
      as={NextLink}
      href="https://www.wienand-verlag.de/Programm/Zeitgenoessische-Kunst/Young-Artists-Hidetoshi-Mitsuzaki.html"
      fontFamily="Roboto Slab, serif"
      fontStyle="italic"
      textDecoration="underline"
      isExternal
    >
      More details
    </Link>
  </>
);

const DerBogenImAugePublicationData = (
  <>
    <Text mt={7} fontWeight="bold">
      Der Bogen im Auge
    </Text>
    <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
      Katalog
      <br />
      28,0 cm x 22,0 cm
      <br />
      80 Seiten
      <br />
      41 farbigen Abb.
    </Text>
    <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
      Herausgeber: KIT – Kunst im Tunnel und Kunsthalle Düsseldorf gGmbH
    </Text>
    <Link
      mt={3}
      as={NextLink}
      href="https://www.kunst-im-tunnel.de/publication/der-bogen-im-auge/"
      fontFamily="Roboto Slab, serif"
      fontStyle="italic"
      textDecoration="underline"
      isExternal
    >
      More details
    </Link>
  </>
);

export { DerBogenImAugeExhibitionFooter, KosmetikExhibitionFooter, YoungArtistPublicationData, DerBogenImAugePublicationData }
