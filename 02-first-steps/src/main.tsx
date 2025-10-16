import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ItemCounter from './shopping-cart/ItemCounter'
import {FirstComponent } from "./FirstStepsApp"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstComponent />
  </StrictMode>,
)