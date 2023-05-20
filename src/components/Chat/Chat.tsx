import React from 'react'
import { createPortal } from 'react-dom'

const root = document.getElementById('root') as HTMLElement
export default function Chat() {
  return createPortal(
    <div>
      <div>
        <h2>Message</h2>
        <div>
          <div>
            <p>Allow receiving messages from strangers</p>
            <button></button>
          </div>
          <button>➖</button>
        </div>
      </div>
      <div>
        <div>
          <div>search</div>
          <div>group</div>
        </div>
        <div>avatar user</div>
        <div>swapper</div>
        <div>input</div>
      </div>
    </div>,
    root
  )
}
