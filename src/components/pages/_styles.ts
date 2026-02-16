import styled from "styled-components";

export const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: blue;
  }

  & > a.active {
    color: #1c1c1f;
  }

  & > a:hover {
    color: #8080ec;
  }

`

export const S = {
  NavWrapper,
}