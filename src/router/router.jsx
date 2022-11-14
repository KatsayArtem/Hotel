import { HOSTEL_ROUTE, ABOUT_ROUTE, NUMBERS_ROUTE, CONTACTS_ROUTE } from './path'
import { HOSTLE, ABOUT, NUMBERS, CONTACTS } from './components'

export const publicRoutes = [
    {
        path: HOSTEL_ROUTE,
        component: HOSTLE
    }, 
    {
        path: ABOUT_ROUTE,
        component: ABOUT
    }, 
    {
        path: NUMBERS_ROUTE,
        component: NUMBERS
    }, 
    {
        path: CONTACTS_ROUTE,
        component: CONTACTS
    } 
]