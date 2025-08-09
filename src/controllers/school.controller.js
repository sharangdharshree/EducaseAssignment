import School from "../models/school.model.js";
import { getDistance } from "geolib";
import { z } from "zod/v4";

// zod input validation schema
const schoolSchema = z.object({
  name: z.string().toLowerCase().trim(),
  address: z.string().toLowerCase().trim(),
  latitude: z.float32(),
  longitude: z.float32(),
});
const coordinateSchema = z.object({
  latitude: z.float32(),
  longitude: z.float32(),
});

// controllers
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

  try {
    const payload = coordinateSchema.parse(req.body);

    const schools = await School.findAll();
    if (!schools) {
      throw error.statusCode(401).message("school entry fetch failed!!");
    }

    // sort on the basis of their geo-distance from given co-ordinates
    // use geolib to calculate distance between each schools and given co-ordinate
    // and finally sort then on the basis of the distance
    const sorted = schools
      .map((school) => ({
        ...school.get({ plain: true }),
        distance: getDistance(
          { latitude: payload.latitude, longitude: payload.longitude },
          { latitude: school.latitude, longitude: school.longitude }
        ), // in meters
      }))
      .sort((a, b) => a.distance - b.distance);

    res.status(201).json(sorted);
  } catch (error) {
    console.log("something went wrong while fetching schools!!");
    res.send(error);
  }
};

export { homePage, addSchool, listSchools };
