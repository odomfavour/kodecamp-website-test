    import testimg1 from '../../Images/landing-card-images/test-salisu-img.jpg';
    import testimg2 from '../../Images/landing-card-images/test-kombalo-img.jpg';
    import testimg3 from '../../Images/landing-card-images/test-kalisa-img3.jpg';
    const testimonies = [
        {
            id:1,
            name: "SALISU AKANDE",
            description: "“At KodeCamp, you gain access relevant and valuable training and mentorship that will propel your tech journey”",
            track: "Product Design Intern",
            image: testimg1,  
        },
        {
            id:2,
            name: "IDRIOUSSO KOMBALO",
            description: "“At KodeCamp, you gain access relevant and valuable training and mentorship that will propel your tech journey”",
            track:"Frontend Development Intern",
            image: testimg2,  
        },
        {
            id:3,
            name: "KALISA MURANO",
            description: "“At KodeCamp, you gain access relevant and valuable training and mentorship that will propel your tech journey”",
            track:"Backend Development Intern",
            image: testimg3,  
            
        }
    ]

    const accordiondata =[
        {
            id:0,
            category: "Android Development",
            desc: "This track will teach you how to use framework to build mobile applications for Android. You will be creating amazing applications using various tools that would be enlisted on google.",
            background: "#000000"
        },
        {
            id:1,
            category: "Product Design",
            desc: " This track is designed to help you materialize your game-changing idea and transform it into a product using design tools.",
            background: "#000000"
        },
        {
            id:2,
            category: "Frontend/Backend Development",
            desc: " Enrol to learn how to create websites and applications using web languages such as PHP, Kotlin, HTML, CSS, and JavaScript ",
            background: "#000000"
        },
        {
            id:3,
            category: "Product Management",
            desc: " Product management is the business process of planning, developing, launching, and managing a product or service. Learn how to manage projects, time, budgets, people and get the best result.  ",
            background: "#000000"
        },

    ]
    
export function getCardData() {
    return testimonies;
}
export function getAccordData() {
    return accordiondata;
}