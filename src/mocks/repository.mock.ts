import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[] = [
  {
    name: "ionic 3 Camera",
    description:
      "This repository shows the usage of the camera functionality withon Ionic 3",
    owner: USER_LIST[0]
  },
  {
    name: "ionic 3 SMS",
    description:
      "This repository shows the usage of the SMS functionality withon Ionic 3",
    owner: USER_LIST[0]
  },
  {
    name: "ionic 3 Geolocation",
    description:
      "This repository shows the usage of the Geolocation functionality withon Ionic 3",
    owner: USER_LIST[1]
  },
  {
    name: "ionic 3 Vibration",
    description:
      "This repository shows the usage of the Vibration functionality withon Ionic 3",
    owner: USER_LIST[1]
  }
];

export const REPOSITORY_LIST = repositoryList;
