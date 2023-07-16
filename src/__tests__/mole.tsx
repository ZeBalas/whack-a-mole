import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { store } from '../store'
import Mole from '@/components/Game/Mole';
import { startGame } from '@/store/actions';
import { act } from 'react-dom/test-utils';
 
describe('Mole', () => {
  it('renders a hole image', () => {
    render(
        <Provider store={store}>
          <Mole />
        </Provider>
    )

    const mole = screen.getByRole('img')
 
    expect(mole).toHaveAttribute("alt", "hole")
  })

  it('should pop up at least once', async () => {
    render(
        <Provider store={store}>
            {new Array(6).fill(1).map((_mole, index) => <Mole key={index} />)}
        </Provider>
    )

    act(() => {
        store.dispatch(startGame());
    })

    const mole = await new Promise((res, rej) => {
        const interval = setInterval(async () => {
            try {
                const mole = await screen.findByAltText('mole');
                if (mole) {
                    res(mole);
                    clearInterval(interval);
                }
            } catch (error) {
                
            }
        }, 2000);
    })


    await waitFor(() => {
         expect(mole).toHaveAttribute("alt", "mole")
    });
  }, 60000)

  it('hide mole on click', async () => {
    render(
        <Provider store={store}>
            {new Array(6).fill(1).map((_mole, index) => <Mole key={index} />)}
        </Provider>
    )

    act(() => {
        store.dispatch(startGame())
    })

    const mole = await new Promise((res, rej) => {
        const interval = setInterval(async () => {
            try {
                const mole = await screen.findByAltText('mole');
                if (mole) {
                    fireEvent.click(mole);
                    res(mole);
                    clearInterval(interval);
                }
            } catch (error) {
                
            }
        }, 2000);
    })
 
    await waitFor(() => {
        expect(mole).toHaveAttribute("alt", "hole")
    });
  }, 60000)
})