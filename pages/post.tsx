import { useState } from 'react'

export default function PostJob() {

    const [form, setForm] = useState({
        title: '',
        company: '',
        location: '',
        type: '',
        description: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(JSON.stringify(form, null, 2))
    }

    return (
        <div className='p-4 w-full mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Post a Job</h1>
            <form onSubmit={handleSubmit} className='grid gap-4'>
                <input className='border p-2 rounded' name='title' placeholder='Job Title' onChange={handleChange}/>
                <input className='border p-2 rounded' name='company' placeholder='Company' onChange={handleChange}/>
                <input className='border p-2 rounded' name='location' placeholder='Location' onChange={handleChange}/>
                <input className='border p-2 rounded' name='type' placeholder='Job Type' onChange={handleChange}/>
                <textarea className="border p-2 rounded" name="description" placeholder="Description" onChange={handleChange} />
                <button className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700'></button>
            </form>
        </div>
    )
}