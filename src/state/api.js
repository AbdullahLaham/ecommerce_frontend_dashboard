import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_BASE_URL || 'http://localhost:5000'}),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers", "Transactions", "Geography", "Overview"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => 'client/products',
            providesTags: ['Products'],
        }),
        getCustomers: build.query({
            query: () => 'client/customers',
            providesTags: ["Customers"],
        }),
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

    })
});

export const {useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery, useGetGeographyQuery, useGetOverviewQuery} = api;




