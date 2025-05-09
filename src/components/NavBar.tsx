import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
