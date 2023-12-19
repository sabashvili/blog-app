import "./App.css";
import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";

function App() {
  return (
    <header>
      <Header />
      <SectionHeader />
      <CategoriesSection />
    </header>
  );
}

export default App;
