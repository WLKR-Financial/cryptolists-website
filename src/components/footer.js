import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  border-top: 1px solid #1f1f1f;
`

const Nav = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  width: fit-content;

  > * {
    margin-left: 1rem;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <span>A Walker Project</span>
      <Nav>
        <a href="https://docs.walkrfinancial.com">Docs</a>
        <a href="https://github.com/WLKR-Financial">GitHub</a>
        <a href="https://t.me/walkerfinancial">Telegram</a>
        <a href="https://app.wlkr.financial">App</a>
      </Nav>
    </StyledFooter>
  )
}
