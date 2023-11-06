import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../router/AppRouter'

export const renderWithRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter>
            <AppRouter/>
            {component}
        </MemoryRouter>
    )
}
