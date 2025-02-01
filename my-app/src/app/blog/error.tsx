"use client" // Should be cliengt component only
import Error from 'next/error'
import { useRouter } from 'next/navigation';
import React, {startTransition} from 'react'

interface ErrorProps {
    error: Error,
    reset: () => void
}

const ErrorBoundary = (props: ErrorProps) => {
    const router = useRouter();

    const handleError = () => {
        startTransition(() => {
            // Aloow reacxt to make any state updates in here 
            
            router.refresh();
        props.reset()
        })
    }
  return (
    <div>
      Something went wrong
      <button onClick={handleError}>Try again</button>
    </div>
  )
}

export default ErrorBoundary
