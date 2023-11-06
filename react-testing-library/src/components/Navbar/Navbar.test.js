import { fireEvent, render, screen } from "@testing-library/react"
import { renderWithRouter } from "../../tests/helpers/RenderWithRouter"
import Navbar from "./Navbar"
import userEvent from "@testing-library/user-event"

describe('Navbar Test', () => {
    test('main-link', () => {
        render(renderWithRouter(<Navbar/>))
        const mainLink = screen.getByTestId('main-link');
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    })
    test('about-link', () => {
        render(renderWithRouter(<Navbar/>))
        const aboutink = screen.getByTestId('about-link');
        fireEvent.click(aboutink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    })
    test('users-link', () => {
        render(renderWithRouter(<Navbar/>))
        const usersLink = screen.getByTestId('users-link');
        userEvent.click(usersLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    })
})