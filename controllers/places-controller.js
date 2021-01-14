const uuid = require("uuid");
const HttpError = require("../modal/error");

let DUMMY_PLACES = [
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous skyscryper in the world",
    location: {
      lat: 40.75783671857,
      lng: -73.9871516,
    },
    address: "20 W 24th St, New York NY 10001",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!place) {
    throw new HttpError(
      "Could not find a place for the provided request!",
      404
    );
  }

  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId, "UserID");

  const places = DUMMY_PLACES.filter((user) => {
    return user.creator === userId;
  });
  if (!places || places.length === 0) {
    return next(
      new HttpError("Could not find a user for the provided request!", 404)
    );
  }

  res.json({ places });
};

const createPlace = (req, res, next) => {
  const { id, title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id,
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace);
  res.status(201).json({ place: createdPlace });
};

const editPlace = (req, res, next) => {
  const { title, description } = req.body;

  const placeId = req.params.pid;

  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };

  const updatedIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);

  (updatedPlace.title = title), (updatedPlace.description = description);

  DUMMY_PLACES[updatedIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(201).json({ message: "Message Deleted!" });
};

(exports.getPlaceById = getPlaceById),
  (exports.getPlacesByUserId = getPlacesByUserId),
  (exports.createPlace = createPlace),
  (exports.editPlace = editPlace),
  (exports.deletePlace = deletePlace);
