import { Route, Routes } from 'react-router-dom'
import About from '../pages/about/about'
import Social from '../pages/social/social'
import Projects from '../pages/projects/projects'
import ErrorPage from '../pages/about/about'
import KnowPage from '../pages/knowledges/knowledges'

export default function RoutesMainApp() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/social" element={<Social />} />
        <Route path="/knowledges" element={<KnowPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
