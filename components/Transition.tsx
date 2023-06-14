import { Transition } from '@headlessui/react'
import { useState } from 'react'

function MyComponent() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <>
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition show={isShowing} as="a" href="/my-url" className="font-bold">
        I will appear and disappear.
      </Transition>
      /* The `show` prop controls all nested `Transition.Child` components. */
    <Transition show={isShowing}>
      {/* Background overlay */}
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* ... */}
      </Transition.Child>

      {/* Sliding sidebar */}
      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {/* ... */}
      </Transition.Child>
    </Transition>
    </>
  )
}