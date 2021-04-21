import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { CookieStand, fetchWithToken, postWithToken, deleteWithToken, apiUrl } from '../services/data-fetcher'
import Head from 'next/head'
import CookieStandHeader from './header'
import CreateForm from './createForm'
import ReportTable from './reportTable'
import CookieStandFooter from './footer'

export default function CookieStandAdmin({ token, onLogout, username }) {
    const { data, error, mutate } = useSWR([apiUrl, token], fetchWithToken);
    const [cookieStands, setCookieStands] = useState([]);

    useEffect(() => {
        if (!data) return;
        setCookieStands(data);
    }, [data])

    if (error) return <h2>Error</h2>
    if (!data) return <h2>Loading Table... </h2>

    async function createHandler(values) {
        const newStand = CookieStand.fromValues(values);
        newStand.location += '...';

        const updatedStands = [newStand, ...cookieStands]

        mutate(updatedStands, false);

        await postWithToken(token, values);

        mutate();
    }
    
    async function deleteHandler(stand) {
        const updatedStands = cookieStands.filter(storedStand => storedStand.id !== stand.id);

        mutate(updatedStands, false);

        await deleteWithToken(stand.id, token);

        mutate(async stands => {
            return stands.filter(candidate => candidate.id !== stand.id);
        });
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CookieStandHeader username={username} onLogout={onLogout}/>

            <main>
                <CreateForm onCreate={createHandler}/>
                <ReportTable stands={cookieStands} onDelete={deleteHandle}/>
            </main>

            <CookieStandFooter report_table={cookieStands}/>
        </div>
    )
}