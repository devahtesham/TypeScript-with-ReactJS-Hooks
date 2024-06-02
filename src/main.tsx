import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CounterContextProvider from './components/context/CounterContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
)
