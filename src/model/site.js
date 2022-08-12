export const Site = {
  title: "LWview",
  menu: [{
    to: "/",
    text: "Home"
  }, {
    to: "/service",
    text: "Services"
  }, {
    to: "/blog",
    text: "Blog"
  }, {
    to: "/contactUs",
    text: "Contact Us"
  }, {
    to: "/about",
    text: "About"
  }
  ],
  adminMenu: [
    {
      to: "/user/dashboard",
      text: "Dashboard"
    },
    {
      to: "/user/projects",
      text: "projects"
    }
  ],
  serviceCategoryMenu: [
    {
      to: "/service",
      text: "All"
    },
    {
      to: "/service/category-testing",
      text: "Testing and Automation"
    }, {
      to: "/service/category-webdev",
      text: "Development"
    }
  ]
}

export default {
  Site
};