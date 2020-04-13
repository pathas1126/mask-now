import { useState, useEffect } from 'react'

const usePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false)
  const [resolved, setResolved] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const resolved = await promiseCreator()
        setResolved(resolved)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return [loading, resolved, error]
}

export default usePromise
