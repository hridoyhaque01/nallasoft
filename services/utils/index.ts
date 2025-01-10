const getActivePath = (pathname: string) => {
  if (pathname === "/") {
    return "home";
  } else if (pathname?.includes("services")) {
    return "services";
  } else if (pathname?.includes("works")) {
    return "works";
  } else if (pathname?.includes("about")) {
    return "about";
  } else if (pathname?.includes("blogs")) {
    return "blogs";
  } else if (pathname?.includes("contact")) {
    return "contact";
  }
  return "home";
};

export { getActivePath };
