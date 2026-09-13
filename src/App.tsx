import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import TheIssue from "./pages/TheIssue";
import MyPortfolio from "./pages/MyPortfolio";
import GlobalInequalities from "./pages/GlobalInequalities";
import GenerativeAILab from "./pages/GenerativeAILab";
import GovernanceGuidelines from "./pages/GovernanceGuidelines";
import Reflection from "./pages/Reflection";
import References from "./pages/References";

function App() {
  return (
    <div className="min-h-screen font-body bg-warm-white text-charcoal">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <TheIssue />
        <MyPortfolio />
        <GlobalInequalities />
        <GenerativeAILab />
        <GovernanceGuidelines />
        <Reflection />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;
