import { useEffect, useState } from "react";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { DarkTheme, Theme } from "./theme/Theme";

import Button from "./components/Button";
import Landing from "./sections/Landing";

import { BsFillSunFill } from "react-icons/bs";
import { MdNightlight } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const body = document.body;
    if (body !== null) {
      body.style.background =
        theme === "light" ? "rgb(244, 246, 247)" : "rgb(26, 31, 36)";
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? Theme : DarkTheme}>
      <GlobalStyle />
      <SApp>
        <Button
          type="bubble"
          onClick={themeToggler}
          style={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          {theme === "light" ? <MdNightlight /> : <BsFillSunFill />}
        </Button>

        <Landing />
      </SApp>
    </ThemeProvider>
  );
}

export default App;

const SApp = styled.div`
  max-width: min(900px, 80vw);
  margin: 6rem auto 2rem auto;
`;
