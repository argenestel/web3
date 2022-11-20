import { Navbar, Loader, Transactions, Footer, Welcome } from "./components"


export default function App() {
  return (
<div>
  <div>
    <Navbar />
    <Welcome />
  </div>
  <Transactions />
  <Footer />
</div>
  );
}