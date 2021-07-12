import { useEffect } from 'react'
import useGetSFAXBusdLpPrice from 'utils/useGetSFAXBusdLpPrice'

const useGetDocumentTitlePrice = () => {
  const sfaxPriceBusd = useGetSFAXBusdLpPrice()

  const sfaxPriceBusdString =
    Number.isNaN(sfaxPriceBusd) || sfaxPriceBusd === 0 || !sfaxPriceBusd
      ? ''
      : ` - $${sfaxPriceBusd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `SAFEMOONmax Swap${sfaxPriceBusdString}`
  }, [sfaxPriceBusdString])
}
export default useGetDocumentTitlePrice
