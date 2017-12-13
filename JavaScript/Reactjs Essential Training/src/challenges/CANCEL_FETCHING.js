import C from '../constants'
import expect from 'expect'
import { fetching } from '../store/reducers'

const action = {
    type: C.CANCEL_FETCHING
}

const state = true
const expectedState = false

const actualState = fetching(state, action)

expect(actualState).toEqual(expectedState)


export default ("Challenge B: CANCEL_FETCHING PASSED!!!");