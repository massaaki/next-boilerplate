import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo-next.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />

      <S.Title>Next Boilerplate</S.Title>
      <S.Description>
        Typescript - Eslint/Prettier - Husky - Lint Staged - Jest
      </S.Description>

      <S.Illustraiton src="/img/hero-illustration.svg" />
    </S.Wrapper>
  )
}

export default Main
