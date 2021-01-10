export class AgileStoryDtoResponse {
  id: number;
  storyPoints: number;
  name: string;
}

export class AgileStoryDtoRequest {
  name: string;
  description: string;
  status: string;
  storyPoints: number;
  username: string;
  weight: number;
  projectId: number;
}
