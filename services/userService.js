import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  getUsers() {
    return UserRepository.getAll();
  }

  getUserById(id) {
    return UserRepository.getOne(user => user.id === id);
  }

  createUser(userData) {
    return UserRepository.create(userData);
  }

  updateUser(id, userData) {
    return UserRepository.update(id, userData);
  }

  deleteUser(id) {
    return UserRepository.delete(id);
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
