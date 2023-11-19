import Container from '../Container/Container'

import s from './Footer.module.sass'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.container}>Footer</div>
      </Container>
    </footer>
  )
}
