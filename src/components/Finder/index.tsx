import React from "react";
import { Button, Container, Input } from "./styles";

type FinderProps = {
  action: () => void;
  handleKeyWord: (e:string) => void;
};

export default function Finder({ action, handleKeyWord }: FinderProps) {
  return (
    <Container>
      <Input onChange={(e)=> handleKeyWord(e.target.value)} type="text" />
      <Button onClick={() => action()}>Go</Button>
    </Container>
  );
}
