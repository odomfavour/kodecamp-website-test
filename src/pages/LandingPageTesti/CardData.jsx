    import testimg1 from '../../Images/landing-card-images/babatunde.jpg';
    import testimg2 from '../../Images/landing-card-images/ashley.jpg';
    import testimg3 from '../../Images/landing-card-images/olatunbosun.jpg';
    import testimg4 from '../../Images/landing-card-images/akin.jpg';
    const testimonies = [
        {
            id:1,
            name: "BABATUNDE ADENIYI",
            description: "“I am now a better developer through Kodecamp training. I’m really glad i signed up for this. Thank you Kodecamp!”",
            track: "Frontend Development Intern",
            image: testimg1,  
        },
        {
            id:2,
            name: "ASHIMI ASHLEY",
            description: "“The journey was quite intense and interesting. I gained so much knowledge during the learning and internship phase”",
            track:"Product Management Intern",
            image: testimg2,  
        },
        {
            id:3,
            name: "OLATUNBOSUN KAFISANWO",
            description: "“I joined Kodecamp with little expectations and I am amazed with how far I have developed my skills. Leveled up”",
            track:"Frontend Development Intern",
            image: testimg3,
            
        },
        {
            id:4,
            name: "AKINROYEBI AYOMIDE",
            description: "“It was really an exciting journey and Kodecamp made the learning experience worthwhile. I look forward to the future ”",
            track:"Product Design Intern",
            image: testimg4,  
        },
        
        
        // {
        //     id:1,
        //     name: "CLINTON OBUZOR",
        //     description: "“They say the people who support your growth are angels on earth and I believe that being a part of Kodecamp is great”",
        //     track: "Product Design Intern",
        //     image: testimg1,  
        // },
        // {
        //     id:2,
        //     name: "ASHIMI ASHLEY",
        //     description: "“The journey was quite intense and interesting. I gained so much knowledge during the learning and internship phase”",
        //     track:"Product Management Intern",
        //     image: testimg2,  
        // },
        // {
        //     id:3,
        //     name: "NAGHMA BIBI NUNDLOLL",
        //     description: "“Kodecamp has proven to help learners succeed; it is an all inclusive, flexible and technical program”",
        //     track:"FrontEnd Development Intern",
        //     image: testimg3,  
            
        // },
        

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