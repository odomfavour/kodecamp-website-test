import * as yup from "yup";

export const Formval = yup.object().shape({
  firstName: yup.string().min(3, "Please enter your firstname").required("Required"),
  lastName: yup.string().min(3, "Please enter your lastname").required("Required"),
  phonenumber: yup.string().min(3, "Please enter your phonenumber").required("Required"),
  aboutyou: yup.string().min(3, "Please fill a box").required("Required"),
  aim: yup.string().min(3, "Please fill a box").required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  gender: yup.string().oneOf(["Male", "Female", "Others", "Prefer not to disclose"], "Required").required("Required"),
  level: yup.string().oneOf(["Beginner", "Intermediate", "Advanced"], "Invalid").required("Required"),
  referal: yup.string().oneOf(["Linkedln","Facebook","Twitter", "Instagram", "From a Friend", "Newspaper Advert","Youtube","Others"], " Required").required("Required"),
  learningtrack: yup.string().oneOf(["Frontend development", "Android Development", "Backend Development", "Digital Marketing","AutoCAD","Internet of Things (IOT)"], "Required").required("Required"),
});
