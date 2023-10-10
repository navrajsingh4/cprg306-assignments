import Image from 'next/image'
import Homepage from './studentinfo'
import Link from 'next/link'
import Studentinfo from './studentinfo'

export default function Home() {
  return (
    <main>
      <b><h1 className="text-5xl font-bold m-6 text-center text-green-600">CPRG 306: Web Development 2 - Assignments</h1></b>
      <div className="text-2xl  border border-green-300 bg-green-200 text-center w-full max-w-xl m-4 p-2"><Studentinfo />
      <p>
      <Link href="/week2/">Week 2</Link></p>
      <p>
      <Link href="/week3/">Week 3</Link></p>
      <p>
      <Link href="/week4/">Week 4</Link>
      </p>
      </div>
    </main>
  )
}
