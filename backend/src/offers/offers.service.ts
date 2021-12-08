import { Injectable } from "@nestjs/common";
import { OffersInterface } from "./offers.interface";

@Injectable()
export class OffersService {
  private readonly offers: OffersInterface[] = [
    {
      id: "java-lead-ec220a85-c239-4d94-8490-9543c9e6499e",
      title: "Java Lead",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 50.0618971,
      longitude: 19.9367559,
    },
    {
      id:
        "full-stack-developer-c%23-angular--c8019c07-908d-41b3-88f8-9e0554ba6acf",
      title: "Full-stack Developer (C#/Angular)",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 52.2452495,
      longitude: 20.9908202,
    },
    {
      id: "frontend-developer-942be618-ffb6-4076-89ac-d4669833ee51",
      title: "Backend Developer (Node.js)",
      publishedAt: "2019-01-09T14:42:00.000Z",
      latitude: 52.181681,
      longitude: 21.0217163,
    },
    {
      id: "product-designer-f0798b85-124f-45c0-aec9-66bb4650b64b",
      title: "Flutter Developer",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 52.2322584,
      longitude: 20.9842694,
    },
    {
      id: "senior-php-engineer-453f83e6-c5e0-4d8b-af77-29a6c43d7293",
      title: "Senior React Engineer",
      publishedAt: "2019-01-09T12:18:01.856Z",
      latitude: 52.224253,
      longitude: 20.971712,
    },
    {
      id: "internship-901c2a6f-8cf7-464a-9b78-eadf3f85e894",
      title: "Internship",
      publishedAt: "2019-01-09T12:46:08.856Z",
      latitude: 50.0818971,
      longitude: 19.5367559,
    },
    {
      id: "java-lead-ec220a85-c239-4d94-8490-9543c9e6499w",
      title: "Java Lead",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 50.0618971,
      longitude: 19.9367559,
    },
    {
      id:
        "full-stack-developer-c%23-angular--c8019c07-908d-41b3-88f8-9e0554ba6acv",
      title: "Full-stack Developer (C#/Angular)",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 52.2452495,
      longitude: 20.9908202,
    },
    {
      id: "frontend-developer-942be618-ffb6-4076-89ac-d4669833ee514",
      title: "FrontEnd Developer (Angular)",
      publishedAt: "2019-01-09T14:42:00.000Z",
      latitude: 52.181681,
      longitude: 21.0217163,
    },
    {
      id: "product-designer-f0798b85-124f-45c0-aec9-66bb4650b64b2",
      title: "Product Designer",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 52.2322584,
      longitude: 20.9842694,
    },
    {
      id: "senior-php-engineer-453f83e6-c5e0-4d8b-af77-29a6c43d7293f",
      title: "Senior PHP Engineer",
      publishedAt: "2019-01-09T12:18:01.856Z",
      latitude: 52.224253,
      longitude: 20.971712,
    },
    {
      id: "internship-901c2a6f-8cf7-464a-9b78-eadf3f85e89fa",
      title: "Internship Vue.js",
      publishedAt: "2019-01-09T12:46:08.856Z",
      latitude: 50.0818971,
      longitude: 19.5367559,
    },
    {
      id: "java-lead-ec220a85-c239-4d94-8490-9543c9e6499esp",
      title: "JavaScript Developer",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 50.0618971,
      longitude: 19.9367559,
    },
    {
      id:
        "full-stack-developer-c%23-angular--c8019c07-908d-41b3-88f8-9e0554ba6acfq1",
      title: "Full-stack Developer (C#/React)",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 52.2452495,
      longitude: 20.9908202,
    },
    {
      id: "frontend-developer-942be618-ffb6-4076-89ac-d4669833ee51s",
      title: "FrontEnd Developer (React)",
      publishedAt: "2019-01-09T14:42:00.000Z",
      latitude: 52.181681,
      longitude: 21.0217163,
    },
    {
      id: "product-designer-f0798b85-124f-45c0-aec9-66bb4650b64basd",
      title: "Product Designer (UI/UX)",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 52.2322584,
      longitude: 20.9842694,
    },
    {
      id: "senior-php-engineer-453f83e6-c5e0-4d8b-af77-29a6c43d7293ss",
      title: "Senior Laravel Engineer",
      publishedAt: "2019-01-09T12:18:01.856Z",
      latitude: 52.224253,
      longitude: 20.971712,
    },
    {
      id: "product-designer-f0798b85-124f-45c0-aec9-66bb4650b64basddsa",
      title: "Sony Vegas Producer",
      publishedAt: "2019-01-09T15:28:01.856Z",
      latitude: 52.2322584,
      longitude: 20.9842694,
    },
    {
      id: "senior-php-engineer-453f83e6-c5e0-4d8b-af77-29a6c43d7293sssa",
      title: "Wordpress Developer",
      publishedAt: "2019-01-09T12:18:01.856Z",
      latitude: 52.224253,
      longitude: 20.971712,
    },
  ];
  getOffers(metadata): OffersInterface[] {
    console.log(metadata);
    if (metadata.title !== "") {
      return this.offers.filter((offer) =>
        offer.title.toLowerCase().includes(metadata.title.toLowerCase())
      );
    } else {
      return this.offers;
    }
  }
}
