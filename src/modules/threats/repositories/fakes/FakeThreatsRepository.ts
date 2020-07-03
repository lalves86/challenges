import Threat from '@modules/threats/infra/typeorm/schemas/Threat';
import IThreatsRepository from '@modules/threats/repositories/IThreatsRepository';
import ICreateTrheatDTO from '@modules/threats/dtos/ICreateThreatDTO';

class FakeTrheatsRepository implements IThreatsRepository {
  private threats: Threat[] = [];

  public async all(): Promise<Threat[]> {
    return this.threats;
  }

  public async create({
    attack,
    contention,
  }: ICreateTrheatDTO): Promise<Threat> {
    const threat = new Threat();

    Object.assign(threat, { id: 'mongodb-assigned-id', attack, contention });

    this.threats.push(threat);

    return threat;
  }
}

export default FakeTrheatsRepository;
