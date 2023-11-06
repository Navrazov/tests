import userEvent from "@testing-library/user-event";
import {screen, render, fireEvent} from "@testing-library/react";
import App from "./App"
import { MemoryRouter } from "react-router-dom";

describe('TEST APP', () => {
    test('Router test', () => {
        render(
           <MemoryRouter>
               <App />
           </MemoryRouter> 
        );
        const aboutLink = screen.getByTestId('about-link');
        const mainLink = screen.getByTestId('main-link');
        fireEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        fireEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
    test('Router test2', () => {
        render(
           <MemoryRouter initialEntries={['/asss']}>
               <App />
           </MemoryRouter> 
        );
        expect(screen.getByTestId('not-found page')).toBeInTheDocument();
    })
})