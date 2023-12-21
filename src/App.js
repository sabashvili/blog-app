import "./App.css";
import React, { createContext } from "react";
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

export const UserContext = createContext();
export default App;
