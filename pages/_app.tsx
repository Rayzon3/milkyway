import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState} from 'react'
import AppContext from '../AppContext'
import lo from '../languageObject'

function MyApp({ Component, pageProps }: AppProps) {
  const [languageSelected, setLanguageSelected] = useState("en");
  const languageObject = lo;
  
  return(
    <AppContext.Provider
    value={{
      state:{
        languages:languageObject[languageSelected],
        languageSelected:languageSelected,
      },
      setLanguageSelected: setLanguageSelected
    }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  ) 
}

export default MyApp
