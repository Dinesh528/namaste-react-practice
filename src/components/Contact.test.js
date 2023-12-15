import Contact from "./Contact";
import { render,screen } from "@testing-library/react";
import  "@testing-library/jest-dom";

describe("Test Contact page",()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>);
    
        const heading  = screen.getByRole('heading');
    
        //Assertion 
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load contact text",()=>{
        render(<Contact/>);
        const heading  = screen.getByText('Contact');
    
        //Assertion 
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load contact Button",()=>{
        render(<Contact/>);
        
        const button = screen.getByRole('button');
        //Assertion 
        expect(button).toBeInTheDocument();
    })
    
    it("Should look for input name ",()=>{
    
        render(<Contact/>);
    
        const input = screen.getByLabelText("Name");
    
        expect(input).toBeInTheDocument()
    })
    
    it("Should load all input box",()=>{
        render(<Contact/>);
    
        const allInput = screen.getAllByRole("textbox")
    
        expect(allInput.length).toBe(2);
    })
})