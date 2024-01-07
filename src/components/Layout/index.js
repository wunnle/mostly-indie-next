import './layout.css'

import PropTypes from 'prop-types'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
