import { useEffect, useState, useRef } from 'react'

export const useHeaderVisibility = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleControllHeader = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      const scrollDifference = scrollPosition - prevScrollPos

      if (scrollDifference > 0 && scrollPosition > 5.5 * 16) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      setPrevScrollPos(scrollPosition)
    }

    window.removeEventListener('scroll', handleControllHeader)
    return () => {
      window.addEventListener('scroll', handleControllHeader)
    }
  }, [prevScrollPos])

  return showHeader
}
