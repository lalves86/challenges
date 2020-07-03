import { getMongoRepository, MongoRepository } from 'typeorm';
import Threat from '@modules/threats/infra/typeorm/schemas/Threat';
import IThreatsRepository from '@modules/threats/repositories/IThreatsRepository';
import ICreateTrheatDTO from '@modules/threats/dtos/ICreateThreatDTO';

class ThreatsRepository implements IThreatsRepository {
  private ormRepository: MongoRepository<Threat>;

  constructor() {
    this.ormRepository = getMongoRepository(Threat, 'mongo');
  }

  public async all(): Promise<Threat[]> {
    return this.ormRepository.find();
  }

  public async create({
    attack,
    contention,
  }: ICreateTrheatDTO): Promise<Threat> {
    const threat = this.ormRepository.create({ attack, contention });

    await this.ormRepository.save(threat);

    return threat;
  }
}

export default ThreatsRepository;
