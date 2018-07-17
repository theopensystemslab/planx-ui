import React from "react"

const IconSearch = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path d="M40.4 38l-6.8-6.8c4.2-5.3 3.9-13.1-1-18-5.3-5.3-13.8-5.3-19.1 0-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 3.9 9.5 3.9 2.7 0 5.3-.8 7.6-2.4l6.9 6.9 2.9-2.7zm-24.1-8.6c-3.7-3.7-3.7-9.7 0-13.4 1.9-1.9 4.3-2.8 6.7-2.8s4.9.9 6.7 2.8c3.7 3.7 3.7 9.7 0 13.4-3.6 3.7-9.7 3.7-13.4 0z" fill="currentColor"/>
      <path fill="none" d="M0 0h50v50H0z"/>
    </svg>
  )
}

const IconPlus = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <path fill="currentColor" d="M40 23H27V10h-4v13H10v4h13v13h4V27h13z"/>
      <path fill="none" d="M0 0h50v50H0z"/>
    </svg>
  )
}

export {
    IconSearch, IconPlus
}
