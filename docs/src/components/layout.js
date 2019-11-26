import React from "react"
import PropTypes from "prop-types"
import { Box, Heading } from "@chakra-ui/core"
import { Fade } from "react-awesome-reveal"

import Header from "./header"
import SEO from "./seo"

const Layout = ({ children, location, title, showNavbar = true }) => (
  <>
    <SEO title={title} />
    {showNavbar && <Header location={location} />}
    <Box
      as="main"
      px={4}
      pt={showNavbar ? 20 : 4}
      mx="auto"
      minH="200vh"
      width={["100%", "100%", "100%", "66.667%"]}
    >
      <Fade direction="bottom" triggerOnce>
        <Heading mt={[2, 4, 8, 16]}>{title}</Heading>
      </Fade>
      {children}
    </Box>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
