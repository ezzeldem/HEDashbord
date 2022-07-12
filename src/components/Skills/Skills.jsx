import React from "react";
import styled from "styled-components";

const SkillsStyle = styled.div`
  padding: 4px 10px;
  border: 1px solid var(--min);
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  color: var(--min);
  border-radius: 5px;
  margin: 4px;
  text-transform: capitalize;
`;

export default function Skills({ text }) {
  return <SkillsStyle>{text}</SkillsStyle>;
}
