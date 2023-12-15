import BodyComponent from "./BodyComponent";
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { act } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event';


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render all the cards",async()=>{
    await act(async()=> render(
        <MemoryRouter>
            <BodyComponent/>
        </MemoryRouter>
    
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);
})

it("should render the Body Component with Search", async() => {

    //use act function to render component with asynchronous search
    await act(async()=> render(
        <MemoryRouter>
            <BodyComponent/>
        </MemoryRouter>
    
    ));

    

    const searchBtn = screen.getByRole('button',{name:/Search/i})

    const searchInput = screen.getByTestId('searchInput');

    //for MUI search input we need to add a package called userEvent from testing library
    userEvent.type(searchInput,'burger')
    
    //for normal input search
    //fireEvent.change(searchInput,{ target: {value:"burger"}});

    fireEvent.click(searchBtn);

    expect(searchBtn).toBeInTheDocument();

    //screen should load 4 cards

    const cards = screen.getAllByTestId('resCard');

    expect(cards.length).toBe(20)
  
});

it("Should filter Top Rated Restaruants",async()=>{
    await act(async()=> render(
        <MemoryRouter>
            <BodyComponent/>
        </MemoryRouter>
    
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const topRatedBtn = screen.getByRole('button',{name:/Top Rated Restaurants/i});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(13)
})

