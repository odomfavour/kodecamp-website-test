import React from 'react'

const PageWrapper = ({children}) => {
  return (
    <section>
        {/* header component */}
        <main>
            {children}
        </main>
        {/* footer component */}
    </section>
  )
}

export default PageWrapper