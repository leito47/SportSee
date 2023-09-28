import "../services/MockedData";
export const fetchUserData = async () => {
  const response = await fetchUserData("../services/MockedData.js");
  return response;
};
