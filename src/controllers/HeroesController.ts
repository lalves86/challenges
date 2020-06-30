import { Request, Response } from 'express';
import HeroesRepository from '../repositories/HeroesRepository';

class HeroesController {
  heroesRepository = new HeroesRepository();

  public index(request: Request, response: Response): Response {
    const heroes = this.heroesRepository.index();

    return response.json(heroes);
  }
}

export default HeroesController;
