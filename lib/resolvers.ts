import { QueryResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'


const driveApi = require('./googleApi')

const Query: Required<QueryResolvers<ResolverContext>> = {

  folders(_parent, _args, _context, _info) {
    let qry =  '14evpVE-WZzGB9rEPYyVs1s7C9pmYJYNs';
    if(_args.id)
      qry = _args.id;
    return driveApi.ListFiles({
        fields: 'nextPageToken, files(name, webViewLink, id)',
        q: "'" + qry + "' in parents and mimeType = 'application/vnd.google-apps.folder'"
    }).then((output: { files: any }) => {
        return output.files;    
    });
  },

  photos(_parent, _args, _context, _info){
    if(_args.folder){
      const qry = _args.folder;
      return driveApi.ListFiles({
          fields: 'nextPageToken, files(name, webViewLink, id)',
          q: "'" + qry + "' in parents and mimeType = 'application/vnd.google-apps.folder'"
      }).then((output: { files: any }) => {
          return output.files;    
      });
    }
  }

}

export default { Query }
