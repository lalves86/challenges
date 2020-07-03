import { injectable, inject } from 'tsyringe';
import Threat from '@modules/threats/infra/typeorm/schemas/Threat';
import Hero from '@modules/heroes/infra/typeorm/entities/Hero';
import IThreatsRepository from '../repositories/IThreatsRepository';
import IAttack from '../dtos/IAttackDTO';

interface IRequest {
  attack: IAttack;
  contention: Hero[];
}

@injectable()
class CreateThreatService {
  constructor(
    @inject('ThreatsRepository')
    private threatsRepository: IThreatsRepository,
  ) {}

  public async execute({ attack, contention }: IRequest): Promise<Threat> {
    const threat = await this.threatsRepository.create({ attack, contention });

    return threat;
  }
}

export default CreateThreatService;
