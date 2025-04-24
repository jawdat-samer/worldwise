import { lazy } from 'react';
import Sidebar from '../components/Sidebar';
// import Map from '../components/Map';
import styles from './AppLayout.module.css';
import User from '../components/User';

const Map = lazy(() => import('../components/Map'));

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}
