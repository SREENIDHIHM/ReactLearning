import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter} from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

it ("Should load Header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>

    );
    const loginButton = screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeINTheDocument();
});

it ("Should load Header component with cartItem",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>

    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeINTheDocument();
});

it ("Should change Lohin Button to onclick load Header component with logOut button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            </Provider>
        </BrowserRouter>

    );
    
    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"})
    expect(logoutButton).toBeINTheDocument();
});