import React from 'react'
import i18n from '../locales'

export const Home = () => (
    <div>
        <h1>{i18n.t('Hello, world!')}</h1>
        <p>
            Hello! This is a work in progress. Take a look at the &ldquo;Create
            custom table template&rdquo; page for recent updates.
        </p>
    </div>
)
