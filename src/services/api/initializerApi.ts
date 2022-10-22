import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ComponentDeps {
	id: number,
	description: string,
	name: string
}
export const initializerApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "/component" }),
	tagTypes: ["initializer"],
	reducerPath: 'initializerApi',
	endpoints: (builder) => ({
		getAll: builder.query({
			query: () => ({
				url: `/get-all`,
			}),
		}),
	}),
})

// @ts-ignore
export const { useGetAllQuery } = initializerApi
