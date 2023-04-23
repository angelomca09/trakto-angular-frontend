interface ImageObj {
  extension: string;
  filename: string;
  size: string;
  provider: string;
  bytes: number;
  secure_url: string;
  directory: string;
  uuid: string;
  url: string;
  dimensions: {
    width: number;
    height: number;
  }
}

export interface User {
  id: string;
  firstname: string;
  can_authenticate: boolean;
  email: string;
  email_verified: boolean;
  logo: {
    folder: any;
    is_deleted: boolean;
    provider: string;
    format: string;
    created_at: any;
    isThumbnail: boolean;
    id: string;
    uuid: string;
    url: {
      high: ImageObj;
      low: ImageObj;
      raw: ImageObj;
      medium: ImageObj;
    }
  };
  firebase_token: string;
  access_token: string;
  refresh_token: string;
}