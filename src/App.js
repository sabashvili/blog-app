import "./App.css";
import React, { createContext } from "react";
import CategoriesSection from "./components/CategoriesSection";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import BlogsSection from "./components/BlogsSection";
import LoginModal from "./components/Modals/LoginModal";
import ModalProvider from "./components/Providers/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <header>
        <Header />
        <SectionHeader />
      </header>
      <main>
        <CategoriesSection />
        <BlogsSection />
        <LoginModal />
      </main>
    </ModalProvider>
  );
}

export const UserContext = createContext();
export default App;
