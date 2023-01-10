import React from "react"
import ReactDOM from "react-dom/client"
import { ModalProvider } from "styled-react-modal"

import App from "./App"
import { ModalContext } from "./contexts/ModalContext"
import { DropDownContext } from "./contexts/DropDownContext"
import { UserContextProvider } from "./contexts/UserContext"
import { PickUpDropOffContext } from "./contexts/PickUpDropOffContext"
import { CarsContextProvider } from "./contexts/CarsContext"
import { CarFavouriteContextProvider } from "./contexts/CarFavouriteContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModalContext>
      <ModalProvider>
        <PickUpDropOffContext>
          <DropDownContext>
            <UserContextProvider>
              <CarsContextProvider>
                <CarFavouriteContextProvider>
                  <App />
                </CarFavouriteContextProvider>
              </CarsContextProvider>
            </UserContextProvider>
          </DropDownContext>
        </PickUpDropOffContext>
      </ModalProvider>
    </ModalContext>
  </React.StrictMode>
)
