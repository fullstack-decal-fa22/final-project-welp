
import axios from "axios";
import React, { useState, useEffect } from "react";
import FoodMenu from "./Components/FoodMenu";
import Navbar from "./Components/Navbar";
import CommentsSection from "./Components/CommentsSection";
import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function Index() {


  return (
    <ChakraProvider>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/about">

        </Route>
        <Route path="/">
          <FoodMenu/>
          <CommentsSection/>
          <div className="border rounded border-gray-500 bg-slate-700 p-4 text-white">
            <h1>Express</h1>
            <p className="text-lg py-2">
              <a className="text-pink-300" href="https://expressjs.com/">
                Express
              </a>{" "}
              is a Node.js web app framework. To create new routes, add files to api/routes. Feel free to use testAPI.js (which is where "Working properly" is being pulled from) as a reference
            </p>
          
            <div className="flex gap-2 text-center justify-center">
              <p className="text-sm font-bold">Express Status:</p>
            <p className="text-sm">{expressCheck}</p>
            
            </div>
          </div>

        </Route>
      </Switch>
    </div>
    </ChakraProvider>
  );
}

export default App;
