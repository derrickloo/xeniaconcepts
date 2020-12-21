module.exports = {
  siteMetadata: {
    title: 'Xenia Concepts',
  },
    plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        'spaceId': '3cnwnu6jet7e',
        'accessToken': '_3EnQvt0ign65fZponcBmEgURfPOj4-Qvak3501InCU'
      }
    }
  ],
}
