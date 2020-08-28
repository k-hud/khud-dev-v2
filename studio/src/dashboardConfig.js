export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f48ffc29e9d7769c09ca5f2',
                  title: 'Sanity Studio',
                  name: 'khud-dev-v-2-studio',
                  apiId: '7662f317-4874-4bb1-98cd-51e89ac9e2be'
                },
                {
                  buildHookId: '5f48ffc20911a15a7938a78a',
                  title: 'Blog Website',
                  name: 'khud-dev-v-2',
                  apiId: 'f95fdb67-26fb-4c51-a7c4-0a71a45eb9a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kylemhudson/khud-dev-v2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://khud-dev-v-2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
