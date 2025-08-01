import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utlis/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("it should header component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
    // const loginButton  = screen.getByRole("button" ,{name :"Login" })
    // const loginButton = screen.getByText("Login")
    //  const CartItems  = screen.getByText("Cart (0 items)")
    const CartItems  = screen.getByText(/Cart/)
    // /cart/regex 
    expect (CartItems).toBeInTheDocument();
});

it("it should change Login Button to Logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
   const loginButton  = screen.getByRole("button" ,{name :"Login" })
   fireEvent.click(loginButton);
   const logoutButton  = screen.getByRole("button" ,{name :"Logout" })
     expect (logoutButton).toBeInTheDocument();
});
