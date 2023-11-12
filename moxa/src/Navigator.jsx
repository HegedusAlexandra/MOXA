import React from 'react'
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Contact from './components/Contact';
import Products from './components/Products';
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import { Helmet } from 'react-helmet';


export default function Navigator() {
 const location = useLocation();
  return (
      <AnimatePresence>
        <Helmet>
        <title>Evolucode - Website Development Company Eastern Europe</title>
        <meta name="description" content="Evolucode - Your Partner in Web Development" />
        <meta name="keywords" content="website development, web design, custom software, Evolucode" />
        <meta name="author" content="Evolucode" />
        <meta property="og:title" content="Evolucode - Website Development Company" />
        <meta property="og:description" content="Evolucode - Your Partner in Web Development" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evolucode.com" />
        <meta property="og:image" content="url_to_your_logo_image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Evolucode - Website Development Company" />
        <meta name="twitter:description" content="Evolucode - Your Partner in Web Development" />
        <meta name="twitter:image" content="url_to_your_logo_image" />
      </Helmet>
        <Switch  location={location} key={location.pathname} >
          <Route path="/" exact>
            <App />
          </Route>         
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>               
        </Switch>
      </AnimatePresence>
  
  )
}
