import { Header } from "./components/header/header";
import { Home } from "./components/home/main";
import { NewProducts } from "./components/products/main";
import { NewsLetter } from "./components/newsletter/main";
import { Footer } from "./components/footer/main";
import { Modal } from "./components/modal/modal";

import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Header />
      <Home showModal={showModal} toggleModal={toggleModal} />
      {showModal && <Modal />}
      {!showModal && (
        <>
          <NewProducts />
          <NewsLetter />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
