export enum SelecetedPage  {
  Home = 'home',
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

export type BenefitType = {
  icon: JSX.Element,
  title:string,
  description: string,
}

export type ClassType = {
  name: string,
  image: string,
  description?: string | undefined
}