import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CategoryProvider from "./contexts/CategoryProvider.jsx";
import AuthorProvider from "./contexts/AuthorProvider.jsx";
import CharacterProvider from "./contexts/CharacterProvider.jsx";
import ActorProvider from "./contexts/ActorProvider.jsx";
import PlanProvider from "./contexts/PlanProvider.jsx";
import MovieTypeProvider from "./contexts/MovieTypeProvider.jsx";
import MovieProvider from "./contexts/MovieProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <AuthorProvider>
          <CharacterProvider>
            <ActorProvider>
              <PlanProvider>
                <MovieTypeProvider>
                  <MovieProvider>
                    <App />
                  </MovieProvider>
                </MovieTypeProvider>
              </PlanProvider>
            </ActorProvider>
          </CharacterProvider>
        </AuthorProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
);
