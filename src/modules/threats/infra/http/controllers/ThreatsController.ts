import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateThreatService from '@modules/threats/services/CreateThreatService';
import ListThreatsService from '@modules/threats/services/ListThreatsService';

export default class ThreatsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listThreats = container.resolve(ListThreatsService);

    const threats = await listThreats.execute();

    return response.json(threats);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { attack, contention } = request.body;

    const createThreat = container.resolve(CreateThreatService);

    const threat = await createThreat.execute({ attack, contention });

    return response.json(threat);
  }
}
