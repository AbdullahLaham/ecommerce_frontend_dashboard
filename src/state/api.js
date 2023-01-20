import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_BASE_URL || 'https://node-express-api-vercel-neon.vercel.app'}),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers", "Transactions", "Geography", "Overview", "Admins", "Performance", "Dashboard", 'CraeteProducts', 'Login'],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => 'client/products',
            providesTags: ['Products'],
        }),
        getCustomers: build.query( {
            query: () => 'client/customers',
            providesTags: ["Customers"],
        } ),
        getTransactions: build.query({
            query: ({page, pageSize, sort, search}) => ({
                url: "client/transactions",
                method: 'GET',
                params: {page, pageSize, sort, search},
            }),
            providesTags: ["Transactions"],
        }),
        getGeography: build.query({
            query: () => 'client/geography',
            providesTags: ['Geography'],
        }),
        getOverview: build.query({
            query: () => 'client/overview',
            providesTags: ['Overview'],
        }),
        getAdmins: build.query({
            query: () => 'management/admins',
            providesTags: ['Admins'],
        }),
        getUserPerformance: build.query({
            query: (id) => `management/performance/${id}`,
            providesTags: ['Performance']
        }),
        getDashboardData: build.query({
            query: () => 'general/dashboard',
            providesTags: ['Dashboard']
        }),
        setNewProduct: build.query({
            query: () => 'management/createProduct',
            providesTags: ['CraeteProducts']
        }),
        loginToTheSystem: build.query({
            query: () => 'management/loginDashboard',
            providesTags: ['Login'],
        })

    })
});

export const {useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery, useGetGeographyQuery, useGetOverviewQuery, useGetAdminsQuery, useGetUserPerformanceQuery, useGetDashboardDataQuery, useSetNewProductQuery, useLoginToTheSystemQuery} = api;




