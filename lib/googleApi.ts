import { google } from 'googleapis';
import credentials from './credentials/googleService.json';

const scopes = [
  'https://www.googleapis.com/auth/drive'
];

const auth = new google.auth.JWT(
  credentials.client_email, undefined,
  credentials.private_key, scopes
);

const drive = google.drive({ version: "v3", auth });
/*
const params = {
    pageSize: 3,
    pageToken: "",
    fields: 'nextPageToken, files(name, webViewLink, id)',
    q: "'14evpVE-WZzGB9rEPYyVs1s7C9pmYJYNs' in parents"
  };
*/
function ListFiles(params : any) {
  return drive.files.list(params)
    .then((res: { data: { files: string | any[]; }; }) => {
      if (res.data.files.length) {
        return res.data;
      }
    })
    .catch((error) => {
      console.error(error);
      return {};
    });
}

module.exports = {ListFiles};