const navLinks = [
  {
    level: "root",
    path: "/dashboard",
    icon: "ri-apps-2-line",
    display: "Dashboard",
  },
  {
    path: "/bookings",
    icon: "ri-taxi-line",
    display: "Booking",
  },
  // {
  //   path: "/sell-car",
  //   icon: "ri-shopping-bag-line",
  //   display: "Sell Cars",
  // },
  {
    level: "root",
    path: "/settings",
    icon: "ri-settings-2-line",
    display: "Settings",
  },
];

// Get the level from localStorage
const userLevel = localStorage.getItem("level");

// Filter navLinks based on user level
const filteredNavLinks =
  userLevel === "root"
    ? navLinks
    : navLinks.filter((link) => link.level !== "root");

export default filteredNavLinks;
