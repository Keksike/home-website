module.exports = {
  siteMetadata: {
    title: 'Conf website'
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
        name: 'conf website',
        short_name: 'conf website',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
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
        fonts: ['Poppins:400,600']
      }
    }
  ]
};
