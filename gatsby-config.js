module.exports = {
  siteMetadata: {
    title:
      'Blueprinted Consulting - Software development from Tampere, Finland',
    description:
      'Blueprinted Consulting is a one-man software consultancy based in Tampere, Finland. Blueprinted offers web & mobile development, API development, cloud infrastructure & DevOps work.'
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
        name: 'Blueprinted Consulting',
        short_name: 'Blueprinted Consulting',
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
    }
  ]
};
