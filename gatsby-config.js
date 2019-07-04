module.exports = {
  siteMetadata: {
    title: 'blueprinted consulting'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'blueprinted consulting',
        short_name: 'blueprinted consulting',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128598892-1',
        // Puts tracking script in the head instead of the body
        head: true
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-emotion`,
      options: {}
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Rubik:200,400,600', 'Raleway:400,600']
      }
    }
  ]
};
