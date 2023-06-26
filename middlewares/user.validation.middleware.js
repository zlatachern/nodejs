import { USER } from "../models/user.js";

const EMAIL_REGEXP = /^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
const PHONE_REGEXP = /^\+380\d{9}$/
const PASSWORD_REGEXP = /^\S{3,32}$/
const FIRSTNAME_REGEXP = /^\S+$/
const LASTNAME_REGEXP = /^\S+$/

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const userData = req.body;
    res.isValid = true;
    try {
        const requiredKeys = Object.keys(user).filter(key => key !== "id");

        if (requiredKeys.length !== userDataKeys.length) {
            throw Error("User entity to create isn't valid");
        }
        requiredKeys.forEach(requiredKey => {
            if (!userDataKeys.hasOwnProperty(requiredKey)) {
                throw Error("User entity to create isn't valid");
            }
        });

        for (const key in userData) {
            checkFieldValid(userData[key], fieldsValidationHash[key].regexp, fieldsValidationHash[key].errMessage);
        }

        const { phoneNumber, email } = userData;
        const userExist = userService.search(user => user.email === email || user.phoneNumber === phoneNumber);
        if (userExist) {
            throw Error("User with such email or phone number already exists");
        }
    }
    catch (error) {
        res.isValid = false;
        res.err = error;
    }
    finally {
        next();
    }
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { id } = req.params;
    const userData = req.body;
    res.isValid = true;
    try {
        const availableKeys = Object.keys(user).filter(key => key !== "id");
        const userDataKeys = Object.keys(userData);

        if (userDataKeys.length === 0) {
            throw Error("User entity to update isn't valid. Request must implement at least one field from model");
        }

        for (const key of userDataKeys) {
            if (!availableKeys.includes(key)) {
                throw Error("User entity to update isn't valid. Request must not implement third-party fields");
            }
            checkFieldValid(userData[key], fieldsValidationHash[key].regexp, fieldsValidationHash[key].errMessage);
        }

        const { phoneNumber, email } = userData;
        const userExist = userService.search(user => (user.email === email || user.phoneNumber === phoneNumber) && user.id !== id);
        if (userExist) {
            throw Error("User with such email or phone number already exists");
        }
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

export { createUserValid, updateUserValid };
