import {proxy} from 'valtio'

// Whatever you put in the proxy() function will be your global state
const state = proxy({ 
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
  })


export default state;
