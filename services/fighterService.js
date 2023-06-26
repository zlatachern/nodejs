import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  healthDefaultValue = 80
    getFighters() {
        return FighterRepository.getAll();
    }

    getFighterById(id) {
        return FighterRepository.getOne(fighter => fighter.id === id);
    }

    createFighter(fighterData) {
        if (!fighterData.health) {
            fighterData.health = this.healthDefaultValue;
        }
        return FighterRepository.create(fighterData);
    }

    updateFighter(id, fighterData) {
        return FighterRepository.update(id, fighterData);
    }

    deleteFighter(id) {
        return FighterRepository.delete(id);
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }
}

const fighterService = new FighterService();

export { fighterService };
