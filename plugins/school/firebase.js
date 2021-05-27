export default function ({ $fire }) {

  const { auth, database, firestore, storage, functions } = $fire
  const cache = { source: 'cache' }
  const server = { source: 'default' }

  return {
    cache,
    server,
    auth,
    database,
    firestore,
    storage,
    functions
  }
}