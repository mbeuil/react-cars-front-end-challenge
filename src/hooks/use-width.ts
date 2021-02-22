import * as React from 'react'

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

const useWitdh = () => {
  const [width, setWidth] = React.useState(0)

  React.useLayoutEffect(() => {
    let timeoutId: NodeJS.Timeout

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }

    setWidth(getWidth())

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return {width}
}

export default useWitdh
