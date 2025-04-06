import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {Hero, WhatWeDo, StudentStoriesSection, FinalCTA} from './components/ui'

import { AboutUs, ProgramsSection, DonatePage, VolunteerPage, MemoriesPage ,SportsGallery, ScienceGallery, PoetriesGallery, AchievementsGallery, KhusiyanGallery, FriendshipGallery, ContactUs} from './components/pages'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <WhatWeDo />
            <StudentStoriesSection />
            <FinalCTA />
          </>
        )
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "programs",
        element: <ProgramsSection />
      },
      {
        path: "donate",
        element: <DonatePage />
      },
      {
        path: "volunteer",
        element: <VolunteerPage />
      },
      {
        path: "memories",
        children: [
          { index: true, element: <MemoriesPage /> },
          { path: "sports", element: <SportsGallery /> },
          { path: "science", element: <ScienceGallery /> },
          { path: "poetries", element: <PoetriesGallery /> },
          { path: "achievements", element: <AchievementsGallery /> },
          { path: "khusiyan", element: <KhusiyanGallery /> },
          { path: "friendship", element: <FriendshipGallery/> },
        ]
      },
      {
        path: "contact",
        element: <ContactUs />  
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
