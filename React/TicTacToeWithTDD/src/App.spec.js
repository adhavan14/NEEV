import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Board from './Board';

describe('Board', () => {
    it('renders without crashing', () => {
        shallow(<Board />);
    });

    it ('displlay the board as empty', () => {
        const board = shallow(<Board />)
        const squares = board.find('.squares');
        squares.forEach((square) => {
            expect(square.prop('value')).toBe(null);
        })
    });

    it('displays the game initial status correctly', () => {
        const board = shallow(<Board />);
        const status = board.find('.status');
        expect(status.text()).toBe('Next player: X');
    });


    it('updates the game status after a square is clicked', () => {
        const wrapper = mount(<Board />);
        const squares = wrapper.find('Square');
        const status = wrapper.find('.status');

        squares.at(0).simulate('click');
        expect(status.text()).toBe('Next player: O');

        squares.at(1).simulate('click');
        expect(status.text()).toBe('Next player: X');
    });
});

describe('Behaviour of the app', () => {

    it('check to does not allow the already clicked square', () => {
        const board = mount(<Board />);
        const squares = board.find('Square');
        const status = board.find('.status');

        squares.at(0).simulate('click');
        expect(status.text()).toBe("Next player: O");

        squares.at(0).simulate('click');
        expect(status.text()).toBe("Next player: O");
    });

    it('calculate the winner of the game', () => {

        const board = mount(<Board />);
        const squares = board.find("Square");
        const status = board.find('.status');

        squares.at(0).simulate('click');
        squares.at(3).simulate('click');
        squares.at(1).simulate('click');
        squares.at(4).simulate('click');
        squares.at(2).simulate('click');

        expect(status.text()).toBe("Winner is X");
    })

    it('check does not able to click the square after won', () => {
        const board = mount(<Board />);
        const squares = board.find("Square");
        const status = board.find('.status');

        squares.at(0).simulate('click');
        squares.at(3).simulate('click');
        squares.at(1).simulate('click');
        squares.at(4).simulate('click');
        squares.at(2).simulate('click');

        expect(status.text()).toBe("Winner is X");

        squares.at(8).simulate('click');
        expect(squares.at(8).prop('value')).toBe(null);
    })
});
