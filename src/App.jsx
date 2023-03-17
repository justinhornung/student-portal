import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div class="container text-left">
      <style>@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');</style>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
