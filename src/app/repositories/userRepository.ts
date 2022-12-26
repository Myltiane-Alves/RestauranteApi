import { AppDataSource} from "../../config/database";
import { Person } from "../entities/Person";
import { User } from "../entities/User";

export  const userRepository = AppDataSource.getRepository(User)
// .find({relations: ['person']});
