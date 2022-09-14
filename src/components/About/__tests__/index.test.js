import React from "react";
// functions from React testing library
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
// file we will be testing 
import About from "..";

afterEach(cleanup);

describe('About component', () => {
    // First test
    it('renders', () => {
        render(<About />);
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})