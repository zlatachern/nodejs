import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const fighterData = req.body;
    res.isValid = true;
    const requiredKeys = Object.keys(fighter).filter(key => key !== "id" && key !== "health");

    try {
        requiredKeys.forEach(key => {
            if (!fighterData.hasOwnProperty(key)) {
                throw Error("Fighter entity to create isn't valid. All required fields must be implemented");
            }
        });
        validateFighterData(fighterData);
    }
    catch (error) {
        res.isValid = false;
        res.status(401);
        res.err = error;
    }
    finally {
        next();
    }
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const fighterData = req.body;
    res.isValid = true;
    try {
        if (Object.keys(fighterData).length === 0) {
            throw Error("Fighter entity to update isn't valid. Request must implement at least one field from model");
        }
        validateFighterData(fighterData);
    }
    catch (error) {
        res.isValid = false;
        res.status(401);
        res.err = error;
    }
    finally {
        next();
    }
};

export { createFighterValid, updateFighterValid };
