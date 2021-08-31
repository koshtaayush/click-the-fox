import React from 'react'
import { shallow } from 'enzyme'

import GameHeading from './../index'

describe('GameHeading', () => {
    it('Should match the snapshot', () => {

        const component = shallow(
            <GameHeading />
        )

        expect(component).toMatchSnapshot()
    })

    it('Should render the proper name of component', () => {

        const component = shallow(
            <GameHeading />
        )

        expect(component.text()).toEqual('Click the Fox! Game')
    })
})
