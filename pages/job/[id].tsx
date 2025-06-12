import { GetServerSideProps } from 'next'
import {Job} from '../index'
import path from 'path'
import fs from 'fs/promises'

type Props = {
    job: Job | null
}

export default function JobDetail( {job}: Props){
    if(!job){
        return <p className='p-4'>Job not found.</p>
    }

    return (
        <div className='min-h-screen p-4 bg-white w-full mx-auto'>
            <h1 className='text-2xl font-bold mb-2'>{job.title}</h1>
            <p className='text-gray-600'>{job.company} - {job.location}</p>
            <p className='text-gray-500 text-sm mb-4'>{job.type}</p>
            <p>{job.description || "No description provided."}</p>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.params!
    const filePath = path.join(process.cwd(), 'public', 'jobs.json')
    const jsonData = await fs.readFile(filePath, 'utf-8') 
    const jobs: Job[] = JSON.parse(jsonData)

    const job = jobs.find(j=> j.id === id) || null

    return {
        props: {job},
    }
}
