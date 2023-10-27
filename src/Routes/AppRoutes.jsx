import { Route, Routes } from 'react-router-dom'
import Error404 from '../components/Error404/Error404'
import { routes } from './routes'

function AppRoutes() {
	return (
		<Routes>
			{routes.map(({ id, Element, path }) => {
				return <Route key={id} path={path} element={<Element />} />
			})}
			<Route path="*" element={<Error404 />} />
		</Routes>
	)
}

export default AppRoutes
