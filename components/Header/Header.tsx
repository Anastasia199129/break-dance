'use client'

import links from '@/data/header.json'
import Link from 'next/link'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

import s from './Header.module.sass'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

import { useTheme } from 'next-themes'
import ThemeSwitcher from '@/app/ThemeSwitcher'
import Container from '../Container/Container'

export default function Header() {
  const t = useTranslations('header')

  const { theme } = useTheme()

  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <div className={s.absolute}>
            <LanguageSwitcher />
          </div>
          <div className={s.absoluteThemeSwitcher}>
            <ThemeSwitcher />
          </div>
          <ul className={`${s.list} ${theme === 'dark' ? s.dark : s.light}`}>
            {links.map(({ id, name, link }) => (
              <li key={id}>
                <Link className={s.link} href={link}>
                  {t(name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  )
}
