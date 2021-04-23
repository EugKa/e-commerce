import { Link } from 'react-router-dom'
import { ROUTES_URLS } from '../App/routes';
import styles from "./Header.module.scss";
import { connect } from 'react-redux';
import { CartIcon } from '../cart-icon'
import { CartDropdown } from '../cart-dropdown';
import { AppState } from '../../store';
import { selectCartHidden } from '../../store/cart/selectors';
import { selectCurrentUser } from '../../store/auth/selectors';
import { ICurrentUser } from '../../types/CurrentUser';
import { Dispatch } from 'redux';
import { signOutStart } from '../../store/auth';

interface HeaderProps {
  currentUser: ICurrentUser;
  hidden:boolean;
  signOutStart: () => void
}
const Header = ({currentUser, hidden, signOutStart}:HeaderProps):JSX.Element => {
    return (
      <header className={styles.Header}>
        <div className={styles.wrapper}>
        <Link className={styles.link} to={ROUTES_URLS.HOME}>
                  <h2>HOME</h2>
              </Link>
          {
            currentUser
            ? <div className={styles.btn} onClick={signOutStart}>
              <h2>
                OUT
              </h2>
            </div>
            : <Link className={styles.link} to={ROUTES_URLS.SING_IN}>
                <h2>LOGIN</h2>
              </Link>
          }
          <CartIcon/>
        </div>
          {
            hidden 
            ? null
            : <CartDropdown/>
          }
          
      </header>
    );
  };

const mapStateToProps = (state:AppState) => ({
  hidden: selectCartHidden(state),
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

const ConnectHeader = connect(mapStateToProps, mapDispatchToProps)(Header)

export { ConnectHeader as Header}

