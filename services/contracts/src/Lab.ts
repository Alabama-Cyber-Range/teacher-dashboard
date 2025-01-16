export interface LabResponse {
    lab: Lab;
  }

export interface Lab {
    id: string;
    cloudshare_training_id: string;
    name: string;
    description: string;
    created_at: string;
  }
