import React from 'react'
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import EnrollNowForm from './EnrolNowForm';
import EnrollNowHero from './EnrolNowHero';
const EnrolNow = () => {
    return (
        <div>
            <PageWrapper>
                <EnrollNowHero />
                <EnrollNowForm />
            </PageWrapper>
        </div>
    )
}

export default EnrolNow