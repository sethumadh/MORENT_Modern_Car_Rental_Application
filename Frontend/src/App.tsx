import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components"
import { ThemeProvider } from 'styled-components';
import { ScrollToTop } from './components';
import { GlobalStyles } from './globalStyles';
import { AddCar, CarDetails, Category, Home, Profile, Error, SearchFilter } from './pages';
import { theme } from './types/theme-type';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<SearchFilter />} />
              <Route path="/add-car" element={<AddCar />} />
              <Route path="/car-details" element={<CarDetails />} />
              <Route path="/category" element={<Category />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App;