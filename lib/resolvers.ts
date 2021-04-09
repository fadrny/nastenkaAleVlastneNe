import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import console from 'console'

const driveApi = require('./googleApi')

const Query: Required<QueryResolvers<ResolverContext>> = {
  folders(_parent, _args, _context, _info) {
    const qry =  '14evpVE-WZzGB9rEPYyVs1s7C9pmYJYNs';
    return driveApi.ListFiles({
        fields: 'nextPageToken, files(name, webViewLink, id)',
        q: "'" + qry + "' in parents and mimeType = 'application/vnd.google-apps.folder'"
    }).then((output: { files: any }) => {
        return output.files
    });
  }
}

export default { Query }
