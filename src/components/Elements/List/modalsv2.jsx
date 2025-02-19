import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import ImageURL from "../Image";

const ModalsV2 = (props)=>{
    const {nama,children} = props;
    const [isShowing, setIsShowing] = useState(false)

  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  useEffect(() => {
    let html = document.querySelector("html")

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden"

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

        const modal = document.querySelector("#modal") // select the modal by it's id

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0] // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements)

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1] // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false)
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9

          if (!isTabPressed) {
            return
          }

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus() 
              e.preventDefault()
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus()
              e.preventDefault()
            }
          }
        })

        firstFocusableElement.focus()
      } else {
        html.style.overflowY = "visible"
      }
    }
  }, [isShowing])

    
  
  return (
    <>
      <button
        onClick={() => setIsShowing(true)}
        className="inline-flex items-center justify-center h-10 gap-2 
        px-5 text-sm font-medium tracking-wide text-white 
        transition duration-300 rounded whitespace-nowrap 
        bg-gray-500 hover:bg-gray-600 focus:bg-gray-700 
        focus-visible:outline-none disabled:cursor-not-allowed 
        disabled:border-gray-300 disabled:bg-gray-300 
        disabled:shadow-none"
      >
        <span>Show</span>
      </button>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed  top-0 left-0 z-50 flex items-center 
              justify-center w-screen h-screen 
              bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="header-3a content-3a"
              aria-modal="true"
              tabindex="-1"
              role="dialog"
            >
              <div
                ref={wrapperRef}
                className="flex max-h-[90vh] w-11/12 max-w-xl 
                flex-col gap-6 overflow-hidden rounded 
                bg-white p-6 text-slate-500 shadow-xl 
                shadow-slate-700/10"
                id="modal"
                role="document"
              >
                <header id="header-3a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-xl font-medium text-slate-700">
                    {nama}
                  </h3>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex items-center justify-center 
                    h-10 gap-2 px-5 text-sm font-medium tracking-wide
                     transition duration-300 rounded-full 
                     justify-self-center whitespace-nowrap 
                     text-gray-500 hover:bg-gray-100 hover:text-gray-600 
                     focus:bg-gray-200 focus:text-gray-700 
                     focus-visible:outline-none disabled:cursor-not-allowed 
                     disabled:text-gray-300 disabled:shadow-none
                      disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                <div id="content-3a" className="flex-1 overflow-auto">
                    {children}
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  )
}
export default ModalsV2;