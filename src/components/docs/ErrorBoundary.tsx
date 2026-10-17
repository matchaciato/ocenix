import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertCircle, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ErrorBoundaryProps {
  children: ReactNode
  fallbackTitle?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error in preview component:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-destructive/30 bg-destructive/5 text-destructive text-center space-y-3">
          <div className="p-2 rounded-full bg-destructive/10">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">
              {this.props.fallbackTitle || 'Failed to load component preview'}
            </h4>
            <p className="text-xs text-muted-foreground max-w-md font-mono">
              {this.state.error?.message || 'An unexpected runtime error occurred.'}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={this.resetError}
            className="text-xs gap-1.5 border-destructive/20 hover:bg-destructive/10"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reload Preview
          </Button>
        </div>
      )

    }

    return this.props.children
  }
}
