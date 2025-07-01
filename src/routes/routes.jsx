import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing } from "../feature/lading/lading";
import { Login } from "../feature/lading/pages/auth/login";
import { About } from "../feature/lading/pages/about/about";
import { History } from "../feature/lading/pages/history/history";
import { Layout } from "../feature/dashboard/layout";
import { Home } from "../feature/dashboard/pages/home/home";
import { Users } from "../feature/dashboard/pages/users/users";
import { Services } from "../feature/dashboard/pages/services/services";
import { Companies } from "../feature/dashboard/pages/companies/companies";
import { FormUsers } from "../feature/dashboard/pages/users/components/FormUsers";

const RoutesModule = () => {
  return (
    <>
    <Routes>
        <Route  path="/" element={<Landing/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />

        {/* Dashboard Routes */}
        <Route path="/app" element={<Layout />} >
             <Route path="home" element={<Home/>}/>
             <Route path="services" element={<Services/>}/>
             <Route path="users" element={<Users/>}/>
             <Route path="users/FormUsers" element={<FormUsers/>}/>
             <Route path="companies" element={<Companies/>}/>
        </Route>
  
    </Routes>
    </>
  );
}

export default RoutesModule;