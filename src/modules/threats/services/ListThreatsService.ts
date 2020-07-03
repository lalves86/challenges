import { injectable, inject } from 'tsyringe';
import IThreatsRepository from '../repositories/IThreatsRepository';
import Threat from '../infra/typeorm/schemas/Threat';

@injectable()
class ListThreatsService {
  constructor(
    @inject('ThreatsRepository')
    private threatsRepository: IThreatsRepository,
  ) {}

  public async execute(): Promise<Threat[]> {
    const threats = await this.threatsRepository.all();

    return threats;
  }
}

export default ListThreatsService;
