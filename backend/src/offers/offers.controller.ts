import { Controller, Get, Query } from "@nestjs/common";
import { OffersService } from "src/offers/offers.service";
import { OffersInterface } from "./offers.interface";

@Controller("offers")
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  findAll(@Query("title") title: string): OffersInterface[] {
    const metadata = { title };
    return this.offersService.getOffers(metadata);
  }
}
