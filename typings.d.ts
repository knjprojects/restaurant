//same as firestore user data
import {  DateTimeInputProps } from "sanity"
export type MyUser = {
    id: string
    name: string
    address: string
    age: number
    type:string
}
//same as sanity item/dish data schema
export type Dish = {
    _createdAt: DateTimeInputProps
    price:number
    name: string
    slug:string
    image: string
    categories: []
    description:string

}