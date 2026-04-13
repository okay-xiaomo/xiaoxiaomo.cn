import { useState, useEffect } from 'react'

import { type FancyboxOptions, Fancybox } from '@fancyapps/ui/dist/fancybox/'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

export const useFancybox = (options: Partial<FancyboxOptions> = {}) => {
  const [root, setRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (root) {
      Fancybox.bind(root, '[data-fancybox]', options)
      return () => Fancybox.unbind(root)
    }
  }, [root, options])

  return [setRoot]
}

/**
 * 使用案例
 * 
 * function App() {
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });

  return (
    <div ref={fancyboxRef}>
      <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
        <img src="https://lipsum.app/id/60/200x150" alt="Sample image #1" />
      </a>
      <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
        <img src="https://lipsum.app/id/61/200x150" alt="Sample image #2" />
      </a>
      <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
        <img src="https://lipsum.app/id/62/200x150" alt="Sample image #3" />
      </a>
    </div>
  );
}
 */
