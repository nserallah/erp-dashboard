import authenticate from "@/auth/authenticate";
import checkCompanyAccount from '@/operations/checkCompanyAccount'
import checkPlan from '@/operations/checkPlanId'

export default [
    {
        path: "/super",
        component: () => import("@/views/app/sessions"),
        redirect: "/super/login",
        children: [
            {
                path: "login",
                name: 'login',
                component: () => import("@/views/app/sessions/signIn")
            },
            {
                path: "signUp",
                component: () => import("@/views/app/sessions/signUp")
            },
            {
                path: "forgot",
                component: () => import("@/views/app/sessions/forgot")
            }
        ]
    },
    {
        path: "/user",
        component: () => import("@/views/app/sessions"),
        redirect: "/super/login",
        children: [

            {
                path: "plans",
                component: () => import("@/views/app/sessions/test")
            }
        ]
    },
  
    {
        path: "/account",
        component: () => import('@/views/app/account'),
        // redirect: "/account/create",
        children: [
            {
                path: '/account/create',
                name: 'account.create',
                // beforeEnter: checkCompanyAccount,
                // props: true,
                component: () => import('@/views/app/account/create')
            }
        ]
    },
    {
        path: "/",
        component: () => import("@/views/app"), //webpackChunkName app
        beforeEnter: authenticate,
        children: [
            {
                path: "/",
                component: () => import("@/views/app"), //webpackChunkName app
                beforeEnter: authenticate,
                redirect: "/dashboard",
            },
            {
                path: "/dashboard",
                beforeEnter: authenticate,
                name: 'dashboard',
                component: () => import("@/views/app/dashboards/dashboard"),
            },
          
            {
                path: "/app/forms",
                component: () => import("@/views/app/form"),
                redirect: "/app/forms/basicForms",
                children: [
                    {
                        path: "basicForms",
                        component: () => import("@/views/app/form/basicForms")
                    },
                ]
            },
            {
                path: "/subscription",
                beforeEnter: authenticate,
                component: () => import("@/views/app/subscription"),
                redirect: '/subscription/plan/list',
                children: [
                    {
                        path: '/subscription/plan/list', component: () => import("@/views/app/subscription/plan"),
                        children: [
                            {
                                path: '/subscription/plan/list',
                                component: () => import("@/views/app/subscription/plan/list"),
                            },
                            {
                                path: '/subscription/plan/create',
                                component: () => import("@/views/app/subscription/plan/create"),
                            },
                            {
                                path: '/subscription/plan/:id/edit',
                                name: 'plan.edit',
                                component: () => import("@/views/app/subscription/plan/create"),
                            },
                        ]
                    },
                    {
                        path: '/subscription/offer/list',
                        component: () => import("@/views/app/subscription/offer"),
                        children: [
                            {
                                path: '/subscription/offer/list',
                                component: () => import("@/views/app/subscription/offer/list"),
                            },
                            {
                                path: '/subscription/offer/create',
                                component: () => import("@/views/app/subscription/offer/create"),
                            },
                            {
                                name: 'offer.edit',
                                path: '/subscription/offer/:id/edit',
                                component: () => import("@/views/app/subscription/offer/create"),
                            },

                        ]
                    },

                    // chart_componnent//////////----------------------////////////////////////

                    {
                        path: "/app/charts",
                        component: () => import("@/views/app/chart"),
                        redirect: "/app/charts/eChart",
                        children: [
                            {
                                path: "eChart",
                                component: () => import("@/views/app/chart/echart")
                            },
                            {
                                // problem
                                path: "apexAreaChart",
                                component: () => import("@/views/app/chart/apexChart")
                            },
                            {
                                path: "apexBarChart",
                                component: () => import("@/views/app/chart/apexBarChart")
                            },
                            // {
                            //   path: "apexBasicChart",
                            //   component: () => import("@/views/app/chart/apexBasicChart")
                            // },
                            {
                                path: "apexLineChart",
                                component: () => import("@/views/app/chart/apexLineChart")
                            },
                            {
                                path: "apexMixChart",
                                component: () => import("@/views/app/chart/apexMixChart")
                            },
                            {
                                path: "apexColumnChart",
                                component: () => import("@/views/app/chart/apexColumnChart")
                            },
                            {
                                path: "apexPieDonutsChart",
                                component: () => import("@/views/app/chart/apexPieDonutsChart")
                            },
                            {
                                path: "apexRadarChart",
                                component: () => import("@/views/app/chart/apexRadarChart")
                            },
                            {
                                path: "apexRadialBarChart",
                                component: () => import("@/views/app/chart/apexRadialBarChart")
                            },
                            {
                                path: "apexScatterChart",
                                component: () => import("@/views/app/chart/apexScatterChart")
                            },
                            {
                                path: "apexSparklineChart",
                                component: () => import("@/views/app/chart/apexSparklineChart")
                            }
                        ]
                    },
                    /**
                     * settings routes
                     * @author Amr
                     */


                     /* Start My Code */ 
                     
                     
                     {
                        path: "/mytable",
                        component: () => import("@/views/app/myDataTable/myTable"),
                        // 
                    },


                     /* End My Code */   



                    {
                        path: "/settings",
                        component: () => import("@/views/app/settings"),
                        children: [
                            {
                                path: "constants",
                                component: () => import("@/views/app/settings/constant"),
                                children: [
                                    {
                                        path: "show",
                                        name: 'constants.list',
                                        component: () => import("@/views/app/settings/constant/show")
                                    },
                                    {
                                        path: "create",
                                        name: 'constant.create',
                                        component: () => import("@/views/app/settings/constant/add")
                                    },
                                    {
                                        path: "/settings/constants/edit/:id",
                                        name: 'constant.edit',
                                        component: () => import("@/views/app/settings/constant/add")
                                    },
                                ],
                            },
                            {
                                path: "/settings/countries",
                                component: () => import("@/views/app/settings/country"),
                                children: [
                                    {
                                        path: "/settings/countries/list",
                                        name: 'countries.list',
                                        component: () => import("@/views/app/settings/country/list")
                                    },
                                    {
                                        name: 'countries.create',
                                        path: "/settings/countries/create",
                                        component: () => import("@/views/app/settings/country/create")
                                    },
                                    {
                                        path: "/settings/countries/edit/:id",
                                        name: 'countries.edit',
                                        component: () => import("@/views/app/settings/country/create")
                                    },
                                ],
                            },
                            {
                                path: "/settings/cities",
                                component: () => import("@/views/app/settings/city"),
                                children: [
                                    {
                                        path: "/settings/cities/list/:country_id?",
                                        name: 'cities.list',
                                        component: () => import("@/views/app/settings/city/list")
                                    },
                                    {
                                        path: "/settings/cities/create",
                                        name: 'cities.create',
                                        component: () => import("@/views/app/settings/city/create")
                                    },
                                    {
                                        path: "/settings/cities/edit/:city_id",
                                        name: 'cities.edit',
                                        component: () => import("@/views/app/settings/city/create")
                                    },
                                ],
                            }

                        ]
                    },

                    {
                        path: '/account-requests/',
                        component: () => import('@/views/app/tempAccount'),
                        children: [
                            {
                                path: '/',
                                component: () => import('@/views/app/tempAccount/list'),
                                name: 'accountRequests.index'
                            }
                        ]
                    }


                ]
            },

            // sessions

            {
                path: "/switch-menu",
                component: () => import("@/containers/layouts/switchSidebar")
            },

            {
                path: "*",
                component: () => import("@/views/app/pages/notFound")
            }
        ]
    },


];
