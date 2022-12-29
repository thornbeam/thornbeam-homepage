import NextLink from "next/link";
import { Text, Link } from "@chakra-ui/react";

const DerBogenImAugeExhibitionFooter = (
  <Text textAlign="right">
    2022 Der Bogen im Auge /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://www.kunst-im-tunnel.de/exhibition/der-bogen-im-auge/"
      isExternal
    >
      More details
    </Link>
    <br />
    Photos: Ivo Faber
  </Text>
);

const KosmetikExhibitionFooter = (
  <Text textAlign="right">
    2021 Kosmetik, with Denise Werth /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://nails-room.com/kosmetik/"
      isExternal
    >
      More details
    </Link>
    <br />
    Photos: Kai Werner Schmidt
  </Text>
);

const YoungArtistPublicationData = (
  <>
    <Text mt={7} fontWeight="bold">
      Young Artists / Hidetoshi Mitsuzaki
    </Text>
    <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
      Catalogue
      <br />
      28,0 cm x 22,0 cm
      <br />
      80 pages
      <br />
      41 plates
    </Text>
    <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
      Editor: Matthias Erntges
      <br />
      Publisher: Wienand Verlag GmbH
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
      Catalogue
      <br />
      26,0 cm x 20,0 cm
      <br />
    </Text>
    <Text mt={3} fontFamily="Roboto Slab, serif" fontStyle="italic">
      Publisher: KIT – Kunst im Tunnel und Kunsthalle Düsseldorf gGmbH
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

const NewRosesFooter = (
  <Text textAlign="right">
    2020 New Roses, Bjoern Knapp /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://www.knappbjoern.de/"
      isExternal
    >
      To Homepage of artist
    </Link>
    <br />
    Photos: Hidetoshi Mitsuzaki
  </Text>
);

const UnionSpielFooter = (
  <Text textAlign="right">
    2021 Union/SPIEL
    <br />
    Photos: Hidetoshi Mitsuzaki
  </Text>
);

const NailsFooter = (
  <Text textAlign="right">
    Nails projectroom e.V., Birkenstraße 61 40233 Düsseldorf /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://nails-room.com/"
      isExternal
    >
      To homepage of Nails projectroom
    </Link>
    <br />
    Photos: Hidetoshi Mitsuzaki
  </Text>
);

const BffOrEverFooter = (
  <Text textAlign="right">
    2020 BFF OR EVER, Sabrina Podemski & Steffen Jopp /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="https://nails-room.com/bfforever"
      isExternal
    >
      To website of exhibition
    </Link>
    <br />
    Photos: Hidetoshi Mitsuzaki
  </Text>
);

const MarpatFooter = (
  <Text textAlign="right">
    2020 Marpat /{" "}
    <Link
      as={NextLink}
      textDecoration="underline"
      href="http://klassescheibitz.de/ausstellungen/"
      isExternal
    >
      To website of exhibition
    </Link>
    <br />
    Photos: Hidetoshi Mitsuzaki
  </Text>
);

export {
  DerBogenImAugeExhibitionFooter,
  KosmetikExhibitionFooter,
  YoungArtistPublicationData,
  DerBogenImAugePublicationData,
  NewRosesFooter,
  NailsFooter,
  BffOrEverFooter,
  MarpatFooter,
  UnionSpielFooter,
};
