import React from "react";
import Finder from "../Finder";
import { Container } from "./styles";

type FinderProps = {
  action: (pageToken?: string) => void;
  handleKeyWord: (e: string) => void;
  prev?: string;
  next: string;
};

export default function Header({
  action,
  handleKeyWord,
  prev = "",
  next,
}: FinderProps) {
  return (
    <Container>
      <div>
        <span>Logo</span>
      </div>
      <Finder action={action} handleKeyWord={handleKeyWord} />
      <div className="page-controls">
        <button onClick={() => action(prev)}>Prev</button>|
        <button onClick={() => action(next)}>Next</button>
      </div>
    </Container>
  );
}
