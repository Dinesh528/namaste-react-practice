import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../appStore/appStore';
import HeaderComponent from './Header';
import "@testing-library/jest-dom"

describe('HeaderComponent', () => {
//   it('renders Header component with logo', () => {
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <HeaderComponent />
//         </Provider>
//       </BrowserRouter>
//     );

//     // Check if the logo is present
//     const logoElement = screen.getByAltText('food logo');
//     expect(logoElement).toBeInTheDocument();

   
//   });


  // For example, you can test user interactions
//   it('toggles the mobile drawer when menu button is clicked', () => {
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <HeaderComponent />
//         </Provider>
//       </BrowserRouter>
//     );

//     // Initially, mobile drawer should be closed
//     const drawerElement = screen.queryByText('Home');
//     expect(drawerElement).toBeNull();

//     // Click the menu button to open the drawer
//     const menuButton = screen.getByLabelText('open drawer');
//     userEvent.click(menuButton);

//     // Mobile drawer should be open now
//     const homeLink = screen.getByText('Home');
//     expect(homeLink).toBeInTheDocument();

//     // Click the menu button again to close the drawer
//     userEvent.click(menuButton);

//     // Mobile drawer should be closed again
//     const closedDrawerElement = screen.queryByText('Home');
//     expect(closedDrawerElement).toBeNull();
//   });

  it('should change login to logout on button click', () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button',{name: /login/i});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole('button',{name: /LogOut/i});

    expect(logoutButton).toBeInTheDocument();

   
  });
});
