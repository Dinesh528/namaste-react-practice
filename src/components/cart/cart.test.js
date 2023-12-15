import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-test-renderer";
import ResMenuPage from "../ResMenuPage";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../mocks/mockResMenuData.json"
import { Provider } from "react-redux";
import appStore from "../../appStore/appStore";
import "@testing-library/jest-dom"
import HeaderComponent from "../navigation/Header";
import Cart from "../cart/Cart"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>Promise.resolve(MOCK_DATA)
    })
})

it("Should Render Res menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <HeaderComponent/>
        <ResMenuPage />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText((content) => {
    const regex = /Recommended \(20\)/i;
    return regex.test(content);
  });

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(20);
});


it("Should show items in cart ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent/>
          <ResMenuPage />
          </Provider>
        </BrowserRouter>
      )
    );
    const accordionHeader = screen.getByText((content) => {
        const regex = /Recommended \(20\)/i;
        return regex.test(content);
      });
    
      fireEvent.click(accordionHeader);
  
    const cartItems = screen.getByTestId("cartItems");
  
    expect(cartItems.length).toBe(0);
     
  });

  it("Should add items to cart on add button ", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent/>
          <ResMenuPage />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText((content) => {
        const regex = /Recommended \(20\)/i;
        return regex.test(content);
      });
    
      fireEvent.click(accordionHeader);
  
    const addBtns = screen.getAllByRole('button',{name:"+ Add"})
    fireEvent.click(addBtns[0])

    const cartItems = screen.getByTestId("cartItems");
    expect(cartItems.length).toBe(1)
    
  });
  
  it("Should add items in cart page", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
        <Provider store={appStore}>
          <HeaderComponent/>
          <ResMenuPage />
          <Cart/>
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText((content) => {
        const regex = /Recommended \(20\)/i;
        return regex.test(content);
      });
    
      fireEvent.click(accordionHeader);
  
    const addBtns = screen.getAllByRole('button',{name:"+ Add"})
    fireEvent.click(addBtns[0])

    const cartItems = screen.getByTestId("cartItems");
    expect(cartItems.length).toBe(1)
    

    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    fireEvent.click(screen.getByRole('button',{name:'Clear Cart'}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("Please add some reciepes")).toBeInTheDocument();
  });
  