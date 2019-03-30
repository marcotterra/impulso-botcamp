import styled from 'styled-components'
import background from '../../assets/images/ecossistema-background.png'

const loginWrapper = styled.main`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default loginWrapper