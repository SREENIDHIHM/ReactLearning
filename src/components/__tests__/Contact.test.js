import { render , screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US page",(  )=>{
    test("should load contact us components",()=>{

        render(<Contact/>);
    
       const heading =  screen.getByRole("heading");
    // Assertions
    expect(heading).toBeInTheDocument();
    
    });
    test("should load contact us components",()=>{
    
        render(<Contact/>);
    
       const button =  screen.getByRole("button");
    // Assertions
    expect(button).toBeInTheDocument();
    
    });
    test("should load contact us components",()=>{
    
        render(<Contact/>);
    
       const inputBoxes =  screen.getAllByRole("textbox");
    // Assertions
    expect(inputBoxes.length).toBe(2);
    
    });

})

