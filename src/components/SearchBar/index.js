import React, { useState, useEffect, useRef } from "react";
//Styles
import { Wrapper, Content } from "./SearchBar.styles";
//Image
import searchIcon from "../../images/search-icon.svg";

export const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true)

  useEffect(() => {
    if(initial.current) {
      initial.current = false
      return
    }

    const timer = setTimeout(() => setSearchTerm(state), 500)

    return () => clearTimeout(timer)
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon"></img>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="Search Movie"
        />
      </Content>
    </Wrapper>
  );
};
