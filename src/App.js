import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from "./components/Layout";


const theme = createTheme({
  palette: {
    primary: {
      main: '#000066' 
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

export default function App() {
  return (
  <ThemeProvider theme={theme}>
    <Router> 
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </ThemeProvider>
  )
}