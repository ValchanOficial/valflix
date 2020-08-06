import React from 'react';

import Menu from "../Menu";
import BannerMain from '../BannerMain';
import Carrousel from '../Carousel';
import Footer from '../Footer';

import { categorias } from '../../data/dados_iniciais.json';


const App = () => {
  return (
    <div style={{ background: '#414141'}}>
      <Menu/>

      <BannerMain
        videoTitle={categorias[0].videos[0].titulo}
        url={categorias[0].videos[0].url}
        videoDescription={"O que é Frontend?"}
      />

      {categorias && categorias.map(categoria => (
        <Carrousel
          ignoreFirstVideo
          category={categoria}
        />
      ))}

      <Footer/>

    </div>
  );
}

export default App;
