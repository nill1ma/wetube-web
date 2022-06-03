import { icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardList,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Container, Icon, MenuItem } from "./styles";

export default function FloatMenu() {
  const [menu, setMenu] = useState<Menu[]>([
    { label: "Home", active: true, icon: faHome, path:'/' },
    { label: "Faforites", active: false, icon: faStar, path:'favorites' },
    { label: "Playlists", active: false, icon: faClipboardList, path:'playlists' },
  ]);

  return (
    <Container>
      {menu.map(({label, active, icon, path}: Menu) => {
        return (
          <MenuItem to={path} key={label}>
            <Icon icon={icon} />
            <span>{label}</span>
          </MenuItem>
        );
      })}
    </Container>
  );
}

type Menu = {
  label: string;
  active: boolean;
  icon: IconDefinition;
  path:string;
};
