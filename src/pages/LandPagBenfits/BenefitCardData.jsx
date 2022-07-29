import benefit1 from '../../Images/landing-card-images/benefits-1.svg';
import benefit2 from '../../Images/landing-card-images/benefits-2.svg';
import benefit3 from '../../Images/landing-card-images/benefits-3.svg';
const benefitsdata = [
    {
        id:1,
        title: "LEARN FROM EXPERT",
        description: "“At KodeCamp, you gain access relevant and valuable training and mentorship that will propel your tech journey”",
        image: benefit1,  
    },
    {
        id:2,
        title: "WHAT WE OFFER",
        description: "“Partnering with various tech industries,we offer our interns spots to work with the skills gotten in a corporate setting.”",
        image: benefit2,  
    },
    {
        id:3,
        title: "GET A CERTIFICATE",
        description: "“As much as we believe in knowledge acquisition, we also award certifications that are globally recognized and accepted”",
        image: benefit3,  
    }
]

export function getBenefitCardData() {
return benefitsdata;
}
