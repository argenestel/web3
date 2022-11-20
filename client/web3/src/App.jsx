import { Navbar, Loader, Transactions, Footer, Welcome } from "./components"


export default function App() {
  return (
<div className="min-h-screen">
  <div className="gradient-bg-welcome">
    <Navbar />
    <Welcome />
  </div>
  <Transactions />
  <Footer />
</div>
  );
}