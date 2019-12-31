import {
  updateSavedTokenSymbols,
  selectToken,
  selectedListSymbol,
} from 'actions/token'
import store from '../store'
import axios from 'axios'

export const token = {
  updateSavedTokenSymbols: (tokenSymbols) => store.dispatch(updateSavedTokenSymbols(tokenSymbols)),
  selectToken: (tokenSymbol) => store.dispatch(selectToken(tokenSymbol)),
  getTokenSymbols: () => store.getState().token.savedTokenSymbols,
}

export const getTokenInfo = async (token, isProd = true) => {
  const url = isProd? 'https://api.iost.io/': 'https://test.api.iost.io/'
  try {
    const { data } = await axios.get(`${url}getTokenInfo/${token}/0`,{
      timeout: 10000
    })
    if(data.code && data.code != 0){
      throw data.message
    }
    return data
  } catch (err) {
    console.log(err)
  }
}

export default token

export const defaultAssets = [
  {symbol: 'iost', fullName: 'iost'},
  {symbol: 'lol', fullName: 'EMOGI'},
  {symbol: 'abct', fullName: 'iostabc token'},
]
