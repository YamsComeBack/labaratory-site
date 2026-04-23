import { useState, useEffect } from 'react'

export const useHoverTyping = (
  fullText: string,
  startDelay = 250,
  charDelay = 20,
) => {
  const [hovered, setHovered] = useState(false)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    if (!hovered) {
      setTypedText('')
      return
    }
    const to = setTimeout(() => {
      let i = 0
      const iv = setInterval(() => {
        i += 1
        setTypedText(fullText.slice(0, i))
        if (i >= fullText.length) clearInterval(iv)
      }, charDelay)
    }, startDelay)
    return () => clearTimeout(to)
  }, [hovered, fullText, startDelay, charDelay])

  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)

  return { typedText, hovered, handleMouseEnter, handleMouseLeave }
}
