import Link from 'next/link'
import { Job } from '../pages/index'

export default function JobCard( {job}: {job: Job}){
    return (
        <Link href={`/job/${job.id}`} passHref>
            <div className='block p-4 bg-white rounded-xl shadow hover:shadow-lg transition'>
                <h2 className='text-xl font-semibold'>{job.title}</h2>
                <p className='text-gray-500'>{job.company}</p>
                <p className='text-sm text-gray-400'>{job.location} • {job.type}</p>
            </div>
        </Link>
    )
}