import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserCard from './user-card.component';

const mockUser = {
    name: {
        first: 'Lenka',
        last: 'Webers'
    },
    dob: {
        date: new Date(),
        age: 63
    }
}
describe('UserCard component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = render(<BrowserRouter><UserCard user={mockUser} /></BrowserRouter>);
    })
    it('should render UserCard component', () => {
        expect(wrapper).toMatchSnapshot();
        expect(mockUser).toMatchSnapshot({
            dob: {
                date: expect.any(Date)
            }
        });
    });

})