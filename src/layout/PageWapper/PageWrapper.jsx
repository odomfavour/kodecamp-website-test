import React from 'react'
import NavigationBar from '../../pages/Navbar/Navbar'

const PageWrapper = ({children}) => {
  return (
    <section>
        {/* header component */}
        <NavigationBar />
        <main>
            {children}
        </main>
        {/* footer component */}
    </section>
  )
}

export default PageWrapper