import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/userActions';
import { resetSelectedSubject } from '../../redux/actions/subjectActions';
import { SidebarNavProps } from '../../pages/Subjects';

import { NavbarWrapper } from './Navbar.styles';
import { ThreeBars } from '../../styles/Icons.Styles';

const Navbar: React.FC<SidebarNavProps> = ({
  setIsSidebarOpen,
  isSidebarOpen,
}) => {
  const dispatch = useDispatch();

  return (
    <NavbarWrapper>
      <div className='navbar-center'>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <ThreeBars />
        </button>
        <div className='links'>
          <Link to='/subjects' onClick={() => dispatch(resetSelectedSubject)}>
            Home
          </Link>
          <Link to='/' onClick={() => dispatch(logoutUser)}>
            Logout
          </Link>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
