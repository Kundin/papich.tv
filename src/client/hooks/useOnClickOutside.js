import { useEffect } from 'react'

export function useOnClickOutside(refs, handler) {
  if (!refs.length) {
    refs = [refs]
  }

  useEffect(
    () => {
      let listener = (event) => {
        let need = true

        // Do nothing if clicking ref's element or descendent elements
        refs.forEach((ref) => {
          if (!ref.current || ref.current.contains(event.target)) {
            need = false
          }
        })

        need && handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    }, // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [refs, handler],
  )
}
