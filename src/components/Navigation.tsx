import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import { useLocation, useNavigate } from 'react-router-dom'

interface Route {
  path: string
  label: string
  active?: boolean
}

function Navigation({ routes }: { routes: Route[] }) {
  const location = useLocation()
  const navigate = useNavigate() // useNavigate 훅 사용
  const currentPath = location.pathname

  const handleSignInClick = () => {
    navigate('/auth/signIn') // 페이지 이동
  }

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/public/assets/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        {routes
          .filter((route) => route.path.includes('/dashboard'))
          .map((route, index) => (
            <Navbar.Link href={route.path} active={route.path === currentPath} key={index}>
              {route.label}
            </Navbar.Link>
          ))}
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Button onClick={handleSignInClick}>sign in</Button> {/* 버튼 클릭 시 handleAddUsersClick 호출 */}
        <Navbar.Toggle />
      </div>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

export default Navigation
