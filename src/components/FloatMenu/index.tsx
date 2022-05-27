import { icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faClipboardList,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Container, Icon } from "./styles";

export default function FloatMenu() {
  const [menu, setMenu] = useState<Menu[]>([
    { label: "Home", active: true, icon: faHome },
    { label: "Faforites", active: false, icon: faStar },
    { label: "Playlists", active: false, icon: faClipboardList },
  ]);

  return (
    <Container>
      {menu.map((item: Menu) => {
        return (
          <div>
            <Icon icon={item.icon} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </Container>
  );
}

type Menu = {
  label: string;
  active: boolean;
  icon: IconDefinition;
};
