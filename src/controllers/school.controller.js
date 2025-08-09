import School from "../models/school.model.js";

const homePage = async (req, res) => {
  res.send("Hello There!! This is Home Page.");
};

const addSchool = async (req, res) => {
  /*Add School API:
Endpoint: /addSchool
Method: POST
Payload: Includes name, address, latitude, and longitude.
Functionality: Validates the input data and adds a new school to the schools table.
Validation: Ensure all fields are properly validated before insertion (e.g., non-empty, correct data types).*/
  res.send("Creating School....");
  try {
  } catch (error) {}
};

const listSchools = async (req, res) => {
  /*List Schools API:
Endpoint: /listSchools
Method: GET
Parameters: User's latitude and longitude.
Functionality: Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
Sorting Mechanism: Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.*/
  res.send("fetching list of all schools....");
  try {
  } catch (error) {}
};

export { homePage, addSchool, listSchools };
