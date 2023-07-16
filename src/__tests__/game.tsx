import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../store/index'
import GameArea from '@/components/Game/GameArea';
 
describe('GameArea', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <GameArea />
      </Provider>
    )
  })

  it('renders a "Score" heading', () => {
    const score = screen.getByRole('heading', {
      name: /Score/i,
    })
 
    expect(score).toBeInTheDocument()
  })

  it('renders the initialized score', () => {
    const score = screen.getByTestId('current-score').textContent;
 
    expect(score).toEqual("0");
  })

  it('renders 12 moles', async () => {
    const moles = await screen.findAllByTestId('mole');

    expect(moles.length).toEqual(12);
  })
})