import ICreateThreatDTO from '../dtos/ICreateThreatDTO';
import Threat from '../infra/typeorm/schemas/Threat';

export default interface IThreatsRepository {
  all(): Promise<Threat[]>;
  create(data: ICreateThreatDTO): Promise<Threat>;
}
