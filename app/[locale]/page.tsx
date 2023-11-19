import data from '@/data/Home/data.json'
import Link from 'next/link'

import '@/public/styles/globals.sass'

import { unstable_setRequestLocale } from 'next-intl/server'

import { useTranslations } from 'next-intl'
import HomeListItems from '@/components/HomeListItems/HomeListItems'

interface IndexPageProps {
  params: {
    locale: string;
  };
}

export default function IndexPage({ params: { locale } }:IndexPageProps) {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Index')

  return (
    <>
      <h1>{t('title')}</h1>
      <HomeListItems data={data}/>
    </>
  )
}