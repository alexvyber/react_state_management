import { useEffect, useState } from "react"

type FetchData<T> = {
  data: T
  error: any
  loading: boolean
}

export const useNetowrk = <T>({ url }: { url: string }): FetchData<T> => {
  let [state, setState] = useState<FetchData<T>>({
    data: null as T, // ???: find the better way to do this
    loading: false,
    error: null,
  })

  useEffect(() => {
    setState({ ...state, loading: true })

    const makeRequest = async () => {
      try {
        const res = await fetch(url)
        let data = await res.json()
        setState({ ...state, data, loading: false })
      } catch (error) {
        setState({ ...state, error, loading: false })
      }
    }

    makeRequest()
  }, [url])

  return state
}
