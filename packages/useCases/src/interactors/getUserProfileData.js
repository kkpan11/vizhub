import { ciUser } from 'vizhub-entities';

export class GetUserProfileData {
  constructor({ userGateway, visualizationGateway, datasetGateway }) {
    this.userGateway = userGateway;
    this.visualizationGateway = visualizationGateway;
    this.datasetGateway = datasetGateway;
  }

  async execute(requestModel) {
    const { userName } = requestModel;

    const user =
      userName === ciUser.userName
        ? ciUser
        : await this.userGateway.getUserByUserName(userName);

    const [visualizationInfos, datasetInfos] = await Promise.all([
      this.visualizationGateway.getVisualizationInfosByUserId(user.id),
      this.datasetGateway.getDatasetInfosByUserId(user.id)
    ]);

    return { user, visualizationInfos, datasetInfos };
  }
}