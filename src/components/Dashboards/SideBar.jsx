import classes from "./SideBar.module.css";
import dashboard_icon from "../../assets/dashboard_icon.png";
import transaction_icon from "../../assets/transaction_icon.png";
import schedule_icon from "../../assets/schedule_icon.png";
import user_icon from "../../assets/user_icon.png";
import setting_icon from "../../assets/setting_icon.png";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarHeader}>
      <h1>Board.</h1>
      </div>
      <div className={classes.main}>
      <div className={classes.mainSidebar}>
        <ul>
          <li>
            <img src={dashboard_icon} alt="dashboard_icon" />
            <p className={classes.dashboard}>Dashboard</p>
          </li>
          <li>
            <img src={transaction_icon} alt="transaction_icon" />
            <p>Transactions</p>
          </li>
          <li>
            <img src={schedule_icon} alt="schedule_icon" />
            <p>Schedules</p>
          </li>
          <li>
            <img src={user_icon} alt="user_icon" />
            <p>Users</p>
          </li>
          <li>
            <img src={setting_icon} alt="setting_icon" />
            <p>Settings</p>
          </li>
        </ul>
      </div>
      <div className={classes.sidebarBottom}>
        <ul>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default SideBar;
