import React, { ErrorInfo } from 'react'

type Props = {}
type State = {
  error: Error | null
  errorInfo: ErrorInfo | null
}

/**
 * コンポーネント内で起きたエラーをキャッチする
 */
export class WithErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error: Error | null, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    })
  }

  render(): React.ReactNode {
    return this.props.children
  }
}
