import classes from "./Dashboard.module.css";
import bell from "../../assets/bell.png";
import man from "../../assets/man.png";
import searchIcon from "../../assets/Search icon.png";
import revenue from "../../assets/revenue.png";
import transaction from '../../assets/total_transactions_icon.png';
import users from '../../assets/users.png';
import like from '../../assets/like.png';
import Card from "./Cards";
import Activity from "./Activity";
import ProductChart from "./ProductChart";
import SideBar from "./SideBar";

const Dashboard = () => {



  return (
    <div className={classes.dashboardContainer}>
      <SideBar/>
      <div className={classes.mainContainer}>
        <div className={classes.navbar}>
          <div className={classes.navbarLeft}>
            <h3>Dashboard</h3>
          </div>
          <div className={classes.navbarRight}>
            <div className={classes.serachContainer}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
              />
              <img src={searchIcon} alt="searchIcon" />
            </div>
            <img src={bell} alt="bell" />
            <img src={man} alt="man" />
          </div>
        </div>

        <div className={classes.dashboardCards}>
          <Card
            title={"Total Revenues"}
            price={"$2,129,430"}
            image={revenue}
            bgColor={"#DDEFE0"}
          />
          <Card
            title={"Total Transactions"}
            price={"1,520"}
            image={transaction}
            bgColor={"#F4ECDD"}
          />
          <Card
            title={"Total Likes"}
            price={"9,721"}
            image={like}
            bgColor={"#EFDADA"}
          />
          <Card
            title={"Total Users"}
            price={"892"}
            image={users}
            bgColor={"#DEE0EF"}
          />
        </div>
       <Activity/>
        <div className={classes.topProducts}>
          <ProductChart/>
          <div className={classes.schedule}>
            <div className={classes.scheduleHeading}>
              <h4>Today’s schedule</h4>
               <p>See All ▷ </p>
            </div>

            <div className={classes.bali}>
              <h4 className={classes.heading4}>Meeting with suppliers from Kuta Bali</h4>
              <p className={classes.time}>14.00-15.00</p>
              <p className={classes.place}>at Sunset Road, Kuta, Bali </p>
            </div>

            <div className={classes.jakarta}>
              <h4 className={classes.heading4}>Check operation at Giga Factory 1</h4>
              <p className={classes.time}>18.00-20.00</p>
              <p className={classes.place}>at Central Jakarta </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
