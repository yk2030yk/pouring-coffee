import styled, { CreateStyled } from '@emotion/styled'
import theme from './theme'

type ThemeInterface = typeof theme
export default styled as CreateStyled<ThemeInterface>
