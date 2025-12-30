import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
	useLocation,
	useNavigate,
} from 'react-router';
import { SIgnInPage } from './pages/loginPage';
import { SIgnUpPage } from './pages/signupPage';
import { Dashboard } from './pages/dashboard';
import { Navigation } from '../navigation';
import { ProtectedRoute } from './protectedRoute';
import { PublicRoute } from './publicRoute';
import { Schedule } from './pages/schedule';
import { Payment } from './pages/payment';
import { Courses } from './pages/courses';
import { Checkout } from './pages/checkout';
import { CourseDetails } from './pages/courseDetails';
import { Discover } from './pages/discover';
import { PreviewDetails } from './pages/coursePreview';
import { Settings } from './pages/settings/settings';
import { General } from './pages/settings/general';
import { Profile } from './pages/settings/profile';
import { Notfound } from './pages/404';
import { Theme } from './pages/settings/theme';
import { ChangePassword } from './pages/settings/password';
import { Notification } from './pages/settings/notification';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navigation />} />
					<Route element={<PublicRoute />}>
						<Route path='/signin' element={<SIgnInPage />} />
						<Route path='/signup' element={<SIgnUpPage />} />
					</Route>

					<Route element={<ProtectedRoute />}>
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/schedule' element={<Schedule />} />
						<Route path='/payment' element={<Payment />} />
						<Route path='/checkout' element={<Checkout />} />
						<Route path='/my courses' element={<Courses />} />
						<Route path='/courses' element={<CourseDetails />} />
						<Route path='/discover' element={<Discover />} />
						<Route
							path='/course-detail'
							element={<PreviewDetails />}
						/>
						<Route path='/*' element={<Notfound />} />

						<Route element={<Settings />}>
							<Route
								path='/settings/profile'
								element={<Profile />}
							/>
							<Route
								path='/settings/password'
								element={<ChangePassword />}
							/>
							<Route
								path='/settings/notification'
								element={<Notification />}
							/>
							<Route path='/settings/theme' element={<Theme />} />
							<Route path='/settings' element={<General />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
