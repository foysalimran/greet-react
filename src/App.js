import { Suspense, useEffect, useState } from "react";
import { Spinner, ThemeProvider } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AllBlog from "./components/pages/all-blog";
import BlogDetail from "./components/pages/blog-detail";
import BusinessSolution from "./components/pages/business-solution";
import ItSolution from "./components/pages/it-solution";
import MarketingSolution from "./components/pages/marketing-solution";
import ProjectDetails from "./components/pages/project-details";
import headerData from "./data/header.json";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const {
    headerBusiness,
    headerIt,
    headerMarketing,
    headerDigital,
    headerApp,
    headerSoftware,
    singlePageHeader,
  } = headerData;
  return (
    <>
    <HelmetProvider><Helmet htmlAttributes={{ lang: locale, dir: locale === "ar" ? "rtl" : "ltr", }} /></HelmetProvider>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <ThemeProvider dir={locale === "ar" ? "rtl" : "ltr"}>
          <Suspense
            fallback={
              <div className="d-flex align-items-center justify-content-center vh-100">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            }
          >
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route
                  path="/"
                  element={<BusinessSolution header={headerBusiness} />}
                />
                <Route
                  path="/business-solution"
                  element={<BusinessSolution header={headerBusiness} />}
                />
                <Route
                  path="/it-solution"
                  element={<ItSolution header={headerIt} />}
                />
                <Route
                  path="/marketing-solution"
                  element={<MarketingSolution header={headerMarketing} />}
                />
                <Route
                  path="/all-blog"
                  element={<AllBlog header={singlePageHeader} />}
                />
                <Route
                  path="/blog-details"
                  element={<BlogDetail header={singlePageHeader} />}
                />
                <Route
                  path="/project-details"
                  element={<ProjectDetails header={singlePageHeader} />}
                />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </LocaleContext.Provider>
    </>
  );
}

export default App;