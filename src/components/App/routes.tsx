import { RouteChildrenProps } from "react-router";
import {  Checkout, HomePage, NotFound, ProductsPage, SignInAndSignUp } from "../Pages";


export enum ROUTES_URLS {
    HOME = '/',
    PRODUCT = '/product',
    SING_IN = '/login',
    CHECKOUT = '/checkout',
    NOT_FOUND = '/404',
}
 
export interface AppRoute {
    path: ROUTES_URLS,
    render: (props: any) => any,
    title?: string,
    exact?: boolean
    isHidden?: boolean
}

export const routes: Array<AppRoute> = [
    {
        path: ROUTES_URLS.HOME,
        render: () => <HomePage/>,
        title: 'Home',
        exact: true

    },
    {
        path: ROUTES_URLS.SING_IN,
        render: () => <SignInAndSignUp/>,
        title: 'Login',
    },
    {
        path: ROUTES_URLS.CHECKOUT,
        render: () => <Checkout/>,
        title: 'checkout',
    }, 
    {
        path: `${ROUTES_URLS.PRODUCT}/:id` as any,
        render: (props: RouteChildrenProps<{id: string}>) => <ProductsPage {...props}/>,
        title: 'Product',
        isHidden: true,

    },
   
    {
        path: ROUTES_URLS.NOT_FOUND,
        render: (props: RouteChildrenProps) => <NotFound {...props}/>,
        title: 'Not-Found',
        isHidden: true,
    },
    
]