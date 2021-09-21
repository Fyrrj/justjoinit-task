import {Controller, Get} from '@nestjs/common';
import {OffersService} from "src/offers/offers.service";

@Controller('offers')
export class OffersController {
    constructor(private readonly offersService: OffersService) {}

    @Get()
    getHealthCheck(): string {
        return this.offersService.getOffers();
    }


}
