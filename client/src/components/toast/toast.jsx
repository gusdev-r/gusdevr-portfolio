import React from 'react'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

const StyledToastContainer = styled(ToastContainer).attrs({
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'dark',
})`
  .Toastify__toast {
    font-size: 16px;
    background-color: rgba(8, 8, 8, 0.6);
    backdrop-filter: blur(15px);
    font-weight: 700;
    color: #fff;
    border: solid 2px #272727;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`

export const ToastConfig = () => {
  return <StyledToastContainer />
}
