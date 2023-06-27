import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css"
import {Routes, Route} from 'react-router-dom'
import About from "./components/About";
import Signup from "./components/Signup";
import Items from "./components/Items";
import ItemInfo from "./components/ItemInfo";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ArtworkUpload from "./components/ArtworkUpload";
import CollectionAndOrders from "./components/CollectionAndOrders";
import OrderInfo from "./components/OrderInfo";
import OrderStatus from "./components/OrderStatus";

function App() {

  const [category, setCategory] = useState()
  const [artworks, setArtworks] = useState()
  const [artists, setArtists] = useState()
  const [picPosition, setPicPosition] = useState(0);
  const [categories, setCategories] = useState();
  const [itemInfo, setitemInfo] = useState()
  const [artist, setartist] = useState()

  useEffect(() => {
    //API CODE IS HERE:
    axios("https://my-backend-data-json.onrender.com/artists").then(i =>setArtists(i.data)).catch(i => console.log(i))
    axios("https://my-backend-data-json.onrender.com/artWorks").then(i => setArtworks(i.data)).catch(i => console.log(i))
  }, [])


  return (
    <div className="App min-h-screen">

      <Nav />

      <Routes>

          <Route 
           path="/" 
           element={[
             <Homepage key="home" setCategory={setCategory} category={category} picPosition={picPosition} setPicPosition={setPicPosition} categories={categories} setCategories={setCategories}/> ,
            ]} />

          <Route 
           path="/items" 
           element={[
           <Items artworks={artworks} setartist={setartist}  picPosition={picPosition} category={category} artists={artists} categories={categories} setitemInfo={setitemInfo}/>
           ]} />

          <Route 
          path="/about" 
          element={[ 
          <About/> 
          ]}/>

          <Route 
          path="/painting" 
          element={[
          <ItemInfo artist={artist}  itemInfo={itemInfo} artworks={artworks} picPosition={picPosition} setPicPosition={setPicPosition} artists={artists} setitemInfo={setitemInfo} categories={categories} setCategories={setCategories}/> 
          ]}/>

          <Route 
          path="/login" 
          element={[ 
          <Login/> 
          ]}/>

          <Route path="/signup" element={ <Signup/> }/>

          <Route path="/myprofile" element={ <Profile artists={artists} />  }/>

          <Route path="/upload_artwork" element={ <ArtworkUpload/> }/>

          <Route path="/my_collection_and_orders" element={ <CollectionAndOrders/> }/>

          <Route path="/create_your_order" element={ <OrderInfo/> }/>

          <Route path="/order_status" element={ <OrderStatus/> }/>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
