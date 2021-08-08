import styles from '../../styles/Lists.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { listDetails: data }
  }
}

const listDetails = ({ listDetails }) => {
  // console.log(listDetails)

  return (
    <div>
      <h1>All listDetails</h1>
      {listDetails.map(list => (
        <Link href={'/lists/' + list.id} key={list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default listDetails
