import School from "../models/school.model.js";
import { z } from "zod/v4";

// zod input validation schema
const schoolSchema = z.object({
  name: z.string().toLowerCase().trim(),
  address: z.string().toLowerCase().trim(),
  latitude: z.float32(),
  longitude: z.float32(),
});

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

  try {
    const payload = schoolSchema.parse(req.body);
    const school = await School.create(payload);
    if (!school) {
      throw error.statusCode(401).message("school entry creation failed!!");
    }
    return res.status(201).json(school);
  } catch (error) {
    console.log("something went wrong while creating school!!");
    res.send(error);
  }
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
