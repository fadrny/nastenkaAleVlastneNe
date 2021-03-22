import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'
import console from 'console'

const userProfile = {
  id: String(1),
  name: 'John Smith',
  status: 'cached',
}

const fldrs = [
  {
    id: "4564sss",
    name: "tvojeMatka",
    webViewLink: "https://tvojmeatyka.c"
  },
  {
    id: "5564sss",
    name: "tvojeMatka",
    webViewLink: "https://tvojmeatyka.c"
  }
]

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent, _args, _context, _info) {
    return userProfile
  },

  folders(_parent, _args, _context, _info) {
    return fldrs;
  }
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent, _args, _context, _info) {
    console.log(`setting a new name to ${_args.name}`)
    userProfile.name = _args.name
    return userProfile
  },
}

export default { Query, Mutation }
