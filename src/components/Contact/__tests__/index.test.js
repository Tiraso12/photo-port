// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);


describe('Contact components', () => {
    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })
});

describe('matches the text', () => {
    it('matches h1 from contact form', () => {
        const { getByTestId } = render(<ContactForm/>);

        expect(getByTestId('contact')).toHaveTextContent('Contact me');
        expect(getByTestId('btn')).toHaveTextContent('Submit');
    })
})
