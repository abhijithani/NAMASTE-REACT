import ResturantCard from "../ResturantCard"
import { render ,screen } from "@testing-library/react"
import { MOCK_DATA } from "../mocks/resCardMock"
import "@testing-library/jest-dom"

it("shoule render the restaurant card compaonent with props Data", () => {
    render(<ResturantCard resData={MOCK_DATA}/>)
    
     const name = screen.getByText("Rice Express By Shero")
     expect(name).toBeInTheDocument();
})