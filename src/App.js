import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavbarA from "./components/NavbarA";
import Header from "./components/Header";
import Btn from "./components/Btn";
import Cards from "./components/Cards";
import { items } from "./Data";
import { Link, Routes, Route } from "react-router-dom";
import Achats from "./Achats";
import PanierBtn from "./PanierBtn";
import Article from "./Article";
import Acheter from "./components/Acheter";

const App = () => {
  const [myItem, setMyItem] = useState(items);
  const [panierNum, setPanierNum] = useState(0);
  const allCat = ["all", ...new Set(items.map((item) => item.title))]; // Utilisation correcte de Set
  const [nbrArt, setNbrArt] = useState(0);
  const [newData, setNewData] = useState([]);
  const [showCard, setShowCard] = useState([]);
  const [cost, setCost] = useState(0);
  const [achatTable, setAchatTable] = useState([]);
  const [panierP, setPanierP] = useState();
  /***************************************************************** */

  const tot = (prix) => {
    setCost(cost + prix);
  };
  const totMoin = (prix) => {
    setCost(cost - prix);
  };
  const ajoutArt = (id) => {
    setNbrArt(nbrArt + 1);
    const newLigne = myItem.find((item) => item.id === id);
    setNewData([...newData, { ...newLigne }]);
  };

  const infoCard = (id) => {
    const showCardId = myItem.find((item) => item.id === id);
    setShowCard([{ ...showCardId, id: Date.now() }]);
  };

  const deleting = (id) => {
    setNbrArt(nbrArt - 1);
    const deletedItem = newData.filter((item) => item.id !== id);
    setNewData([...deletedItem]);
  };

  /*********************************************************************** */

  const achatTab = (id) => {
    const newAchat = newData.filter((item) => item.id === id);
    setAchatTable([...achatTable, { ...newAchat, id: Date.now() }]);
  };

  // ***********************************************************************

  //filtrer par button :
  const filtering = (cat) => {
    if (cat === "all") {
      setMyItem(items);
    } else {
      const newArray = items.filter((item) => item.title.includes(cat));
      setMyItem(newArray);
    }
  };

  //filtrer par recherche :
  const filteringS = (mot) => {
    if (mot !== "") {
      const newArray = items.filter((item) => item.title.includes(mot));
      setMyItem(newArray);
    } else {
      setMyItem(items);
    }
  };

  //*************|panier|****************************************/
  const panierIncrim = (id) => {
    setPanierNum(panierNum + 1);
  };

  // --------------------------PANIER + - *******************************
  const panierPlus = (prix, id) => {
    setNbrArt(newData.length + 1);
    setCost(cost + prix);
    const newLigne = myItem.find((item) => item.id === id);
    setNewData([...newData, { ...newLigne, id: Date.now() }]);
  };
  const panierMoin = (prix, id) => {
    setNbrArt(newData.length - 1);
    setCost(cost - prix);

    const deletedItem = newData.find((item) => item.id === id);

    let index = newData.indexOf(deletedItem);

    if (index !== -1) {
      newData.splice(index, 1);
    }
    if (newData.length == 0) {
      setNbrArt(0);
      setCost(0);
      setNewData([]);
    }
  };

  return (
    <div className="color-body font">
      <Link to="/achats">
        <PanierBtn nbrArt={nbrArt} cost={cost} />
      </Link>

      <Container>
        <NavbarA filteringS={filteringS} />
        <Header />

        <Btn filtering={filtering} allCat={allCat} />
      </Container>

      <Routes>
        <Route
          path="/achats"
          element={
            <Achats
              nbrArt={nbrArt}
              panierMoin={panierMoin}
              panierPlus={panierPlus}
              panierP={panierP}
              achatTable={achatTable}
              achatTab={achatTab}
              newData={newData}
              deleting={deleting}
              nbrArt={nbrArt}
              cost={cost}
              totMoin={totMoin}
              showCard={showCard}
            />
          }
        />
        <Route
          path="/"
          exact
          element={
            <Cards
              myItem={myItem}
              panierIncrim={panierIncrim}
              ajoutArt={ajoutArt}
              tot={tot}
              infoCard={infoCard}
            />
          }
        />
        <Route
          path="/article"
          element={
            <Article
              showCard={showCard}
              tot={tot}
              ajoutArt={ajoutArt}
              newData={newData}
            />
          }
        />
        <Route path="/acheter" element={<Acheter newData={newData} />} />
      </Routes>

      {/* **************************************************************** */}
      <hr />
      <hr />
    </div>
  );
};

export default App;
