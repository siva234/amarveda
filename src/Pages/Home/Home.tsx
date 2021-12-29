import React from 'react'
import { FormattedMessage } from 'react-intl'
import LangSelector from '../../Components/LangSelector/LangSelector'
import MainNavBar from '../../Components/MainNavBar/MainNavBar'

function Home() {
    return (
        <div>
            <h1>
                <FormattedMessage id="app.title" defaultMessage="AmarVeda" />
            </h1>
        </div>
    )
}

export default Home

