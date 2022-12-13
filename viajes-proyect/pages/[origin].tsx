import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { api } from '../api/fligth'
import { Trip } from '../models/trip'


interface Params extends ParsedUrlQuery {
    origin: string;
}

interface propsStatic {
    trips: Trip[]
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {

    const origins = await api.origins()


    const paths = origins.map((originApi) => {

        let origin = originApi.origin

        return {
            params: {
                origin
            }
        }
    })

    return {
        paths,
        fallback: false

    }
}

export const getStaticProps: GetStaticProps<propsStatic, Params> = async ({ params }) => {


    const trips = (await api.list(params?.origin!)).slice(0, 100)

    return {
        props: {
            trips
        }
    }
}

const OriginPage = ({ trips }: propsStatic) => {

    return (
        <table className='w-full h-0.80'>
            <thead>
                <tr>
                    <th className='id-select'>
                        ID
                    </th>
                    <th>
                        Origin
                    </th>
                    <th>
                        Destination
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Days
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    trips.map((trip) => {
                        return (
                            <tr key={trip.id}>
                                <td className='id-select'>{trip.id}</td>
                                <td>{trip.origin.origin}
                                    {trip.origin.destination}</td>
                                <td>{trip.destination.origin}
                                    {trip.destination.destination}</td>
                                <td>{trip.price.toLocaleString("es-AR",{
                                    style:"currency",
                                    currency:"ARS"
                                })}</td>
                                <td>{trip.days}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default OriginPage