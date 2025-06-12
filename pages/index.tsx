import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";

export type Job = {
  id: string
  title: string
  company: string
  location: string
  type: string
  description: string
}

type Props = {
  jobs: Job[]
}

export default function Home({jobs}: Props) {
  return (<>
    <div className="min-h-screen bg-gray-100 p-4">
        <Head>
          <title>Remote Ready Job Board</title>
        </Head>
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold">Remote Ready Job Board</h1>
          <p className="text-gray-600">Find your next remote opportunity</p>
        </header>
        <main className="grid gap-4">
          {jobs.map((job) => (
            <Link key={job.id} href={`/job/${job.id}`} passHref>
              <div className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-500">{job.company}</p>
                <p className="text-sm text-gray-400">
                  {job.location} • {job.type}
                </p>
              </div>
            </Link>
          ))}
        </main>
      </div>
  </>);
}

export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'public', 'jobs.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  const jobs = JSON.parse(jsonData)

  return {
    props: {jobs},
  }
}