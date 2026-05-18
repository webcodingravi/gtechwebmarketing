import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Work from './pages/Work'
import WorkDetail from "./pages/WorkDetail";
import About from './pages/About'
import Contact from './pages/Contact'
import OfferingDetail from './pages/OfferingDetail'
import ScrollToTop from "./components/ScrollToTop";
import NotFound from './pages/NotFound'
import Login from './pages/auth/Login'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './components/AdminLayout'
import Project from './pages/admin/projects/Project'
import Service from './pages/admin/services/Service'
import Leads from './pages/admin/Leads'
import Team from './pages/admin/Team'
import Setting from './pages/admin/Setting'
import ProjectCategory from './pages/admin/projects/ProjectCategory'
import ServiceCategory from './pages/admin/services/ServiceCategory'


const App=() => {
  useEffect(() => {
    document.title="G Tech Web Marketing : India's #1 Digital Marketing Agency";
  }, [])
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* PUBLIC SITE */}

          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/services/:slug" element={<OfferingDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

            {/* NOT FOUND */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* AUTH */}
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Project />} />
            <Route path="project/categories" element={<ProjectCategory />} />
            <Route path="services" element={<Service />} />
            <Route path="service/categories" element={<ServiceCategory />} />
            <Route path="leads" element={<Leads />} />
            <Route path="team" element={<Team />} />
            <Route path="settings" element={<Setting />} />

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App