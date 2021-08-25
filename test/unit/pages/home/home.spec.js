import React from 'react'
import { render } from '@testing-library/react'
import Home from '@/pages/home/index'

global.fetch = require("node-fetch");

describe('Home', () => {
    it('home page should be rendered', () => {
        const wrapper = render(<Home />)
        expect(wrapper).toBeTruthy()
    })
})