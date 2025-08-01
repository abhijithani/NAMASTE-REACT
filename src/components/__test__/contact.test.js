import Contact from "../Contactus"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';

describe("contact us page test case", () => {

    test("should load contact us component", () => {
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

});

// test("should load button inside contact component", () => {
//     render(<Contact/>);

//     const button = screen.getByText("sumbit");

//     //Assertion
//     expect(button).toBeInTheDocument();

// })

test("should load button inside contact component", () => {
    render(<Contact/>);

    const button = screen.getByPlaceholderText("name");

    //Assertion
    expect(button).toBeInTheDocument();

})

test("should load 2 input boxes on the contact component ", () => {
    render(<Contact/>);

    //Querying
    const inputBox = screen.getAllByRole("textbox");

    console.log(inputBox);
    
    //Assertion
    expect(inputBox.length).toBe(2);

})

});



