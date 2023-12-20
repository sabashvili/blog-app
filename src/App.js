import "./App.css";
import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import BlogsSection from "./components/BlogsSection";

function App() {
  return (
    <>
      <header>
        <Header />
        <SectionHeader />
      </header>
      <main>
        <CategoriesSection />
        <BlogsSection />
      </main>
    </>
  );
}

export default App;
