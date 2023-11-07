import useRouteElements from './useRouteElements'

function App() {
  const route = useRouteElements()
  return <div>{route}</div>
}

export default App
