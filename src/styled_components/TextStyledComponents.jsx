import styled from "styled-components"

export const SubTitle = styled.h2`
    color:orange;
    font-size:1.5em;
`
export const Menu = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin: 0;
    padding: 10px 0;
    align-items: center;
`

export const MenuNav = styled.nav`
    background-color:${(props) => (props.themeColor === "light" ? "white" : "#1a1a1a")};
    color:${props => (props.themeColor === "light" ? "#1a1a1a" : "white")};
`