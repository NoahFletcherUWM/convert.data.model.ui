import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageContainer from "./common/components/PageContainer";
import routes from "./routes/routes";
import Header from "./common/shared/header";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#f48fb1",
      },
      background: {
        default: "#212121",
        paper: "#393939",
      },
    },
  });
  const appRoutes = () => {
    return routes.map((route, index) => {
      return (
        <Route path={route.path} key={index} element={<route.component />} />
      );
    });
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageContainer>
          <Header />
          <Routes>{appRoutes()}</Routes>
        </PageContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
