import {proxy} from 'valtio'

// Whatever you put in the proxy() function will be your global state
const state = proxy({ 
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './about.png',
    fullDecal: './about.png',
  })


export default state;
