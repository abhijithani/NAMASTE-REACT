import { render } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/reslistMock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should render the body component with search button ", async () => {
    await act(async() =>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>

) );
const searchbtn = screen.getByRole("button" , {name: "search"});
console.log(searchbtn);
expect(searchbtn).toBeInTheDocument();
});