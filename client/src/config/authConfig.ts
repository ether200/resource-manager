// Look for token and add it as header for the the request
const authConfig = () => {
  const token = sessionStorage.getItem("token");

  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
};

export default authConfig;
