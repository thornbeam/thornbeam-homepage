import Article from "./layouts/article";
import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  Image,
  Link,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import useUser from "../lib/useUser";

import ContentTitle from "../components/contentTitle";
import ContentText from "../components/contentText";
import LinkItem from "../components/linkItem";
import Footer from "../components/footer";

const Profile = () => {
  const { user } = useUser({ redirectTo: "/login" });

  if (!user || user.isLoggedIn === false) {
    return <Article>Loading...</Article>;
  }

  return (
    <Article>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Article>
  );
};

export default Profile;
