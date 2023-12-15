import { render,screen } from "@testing-library/react";
import CardComponent from "./CardComponent";
import MOCK_DATA from "../../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withPromotedLabel } from "./CardComponent";

jest.mock('../../utills/constants', () => ({
    CDN_URL: 'https://example.com/',
  }));

const MockCardComponent = jest.fn((props) => <div>{props.resData.name}</div>);

beforeEach(() => {
    MockCardComponent.mockReset();
  });


it("should render res card component with promoted label",()=>{
    const EnhancedCardComponent = withPromotedLabel(MockCardComponent);
    const mockData = {
        resData: {
          cloudinaryImageId: 'image123',
          name: 'Restaurant Name',
          avgRating: 4.5,
          cuisines: ['Cuisine1', 'Cuisine2'],
          costForTwo: '$$$',
          areaName: 'Area Name',
        },
      };
    render(<EnhancedCardComponent {...mockData} />);

    const getLabelText = screen.getByText("Vegetarian");

    expect(getLabelText).toBeInTheDocument();
})

it("should render res card component with Props Data ",()=>{

    render(<CardComponent resData={MOCK_DATA}/>)

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})
