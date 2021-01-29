import { useEffect } from 'react'
import type { FC } from 'react'
import { navigate } from '@reach/router'

const Page404: FC = () => {
  useEffect(() => {
    navigate('/instore')
  }, [])

  return null
}

export default Page404
