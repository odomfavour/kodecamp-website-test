import Accordion from 'react-bootstrap/Accordion';

function LandingPageAccordion({id, category, desc}) {

  return (
    <>
        <div className='landingpageacc'>
            <Accordion  >
                <Accordion.Item eventKey="0" className='mb-4 blue100acc' flush key={id} >
                    <Accordion.Header className='fw-semibold'> Android Development</Accordion.Header>
                    <Accordion.Body>
                        This track will teach you how to use framework to build mobile applications for Android. 
                        You will be creating amazing applications using various tools that would be enlisted on google.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-4 deepblue100acc'>
                    <Accordion.Header className='fw-semibold'>Product Design</Accordion.Header>
                    <Accordion.Body>
                        This track is designed to help you materialize your game-changing idea 
                        and transform it into a product using design tools.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='mb-4 green100acc'>
                    <Accordion.Header className=' fw-semibold'>FrontEnd/BackEnd Development</Accordion.Header>
                    <Accordion.Body>
                        In this track, you will be using backend tools to make a website
                        or web application user obtain data and information without glitches.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='black100acc'>
                    <Accordion.Header className=' fw-semibold '>Product Management</Accordion.Header>
                    <Accordion.Body>
                        Product management is the business process of planning, developing, 
                        launching, and managing a product or service. Learn how to 
                        manage projects, time, budgets, people and get the best result. 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </>
  )
}

export default LandingPageAccordion