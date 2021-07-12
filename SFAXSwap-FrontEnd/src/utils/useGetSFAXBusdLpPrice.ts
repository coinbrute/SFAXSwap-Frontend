import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetSFAXBusdLpPrice = () => {
  const cakeAddress = '0xa4b72b56495a947e16a0e1c2186b7b9b3ff78acd'
  const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  const inputCurrency = useCurrency(cakeAddress)
  const outputCurrency = useCurrency(busdAddress)
  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetSFAXBusdLpPrice
