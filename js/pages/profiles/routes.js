define((require, factory) => {
  const { AuthorizedRoute } = require('pages/Route')
  function routes(router) {
    return {
      '/profiles/?((w|.)*)': new AuthorizedRoute(path => {
        require([
          './profile-manager',
          'components/cohort-definition-browser',
        ], function() {
          path = path.split('/')
          const params = {}
          params.sourceKey = path[0] || null
          params.personId = path[1] || null
          params.cohortDefinitionId = path[2] || null
          params.sampleId = path[3] || null
          params.secondPersonId = path[4] || null

          router.setCurrentView('profile-manager', params)
        })
      }),
    }
  }

  return routes
})
