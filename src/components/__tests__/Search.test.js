import { fireEvent, render } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{

    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    });

})
it ("Should Searc the Res list for Burger ", async()=>{
  await act (async()=>{
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
  });
  const cardsBeforeSearch =  screen.getAllByTestId("resCard")
  expect ( cardsBeforeSearch.length).toBe(20);
 const searchBtn =  screen.getByRole("button" , {name : "Search"});
 console.log(searchBtn);

 const searchInput = screen.getByTestID("searchInput");
 fireEvent.change(searchInput,{target : {value : "burger"}});
 fireEvent.click(searchBtn);
 const cards = screen.getAllByTestId("res-card");

 expect ( cards.length).toBe(4);
});

it ("Should Filter the Top rated Restaurant in theh lst", async()=>{
    await act (async()=>{
        render(<BrowserRouter><Body/></BrowserRouter>)
        const cardsBeforeFilter =  screen.getAllByTestId("resCard")
  expect ( cardsBeforeFilter.length).toBe(8);
  const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restuarant"});
  fireEvent.click(topRatedBtn);
  const cardsAfterFilter =  screen.getAllByTestId("resCard")
  expect ( cardsAfterFilter.length).toBe(8);
    });
})