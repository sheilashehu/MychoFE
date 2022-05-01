/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62584a259f09c542d5bfa239").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class BlogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '62584f38e356a3154936c996'
    htmlEl.dataset['wfSite'] = '62584a259f09c542d5bfa239'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = BlogView.Controller !== BlogView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/mycelium-ff1d0d.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-3">
            <div className="af-class-wf-section">
              <div data-w-id="c07b173d-6269-e390-213f-0de199852b8d" className="af-class-nav-wrapper af-class-menu">
                <a href="#" className="af-class-link-block w-inline-block"><img src="images/asset-5.svg" loading="lazy" alt="Ribbon Finance Logo" /></a>
                <div className="af-class-nav-links">
                  <div data-hover="false" data-delay={200} className="af-class-dropdown w-dropdown">
                    <div className="af-class-dropdown-toggle w-dropdown-toggle">
                      <div className="af-class-icon w-icon-dropdown-toggle" />
                      <div className="af-class-dropdown-text">About</div>
                    </div>
                    <nav className="af-class-dropdown-list w-dropdown-list">
                      <a href="blog.html" id="BLOG" aria-current="page" className="af-class-dropdown-link w-dropdown-link w--current">blog</a>
                      <a href="faq.html" id="FAQ" className="af-class-dropdown-link w-dropdown-link">faq</a>
                      <a href="terms-policy.html" className="af-class-dropdown-link w-dropdown-link">policy</a>
                    </nav>
                  </div>
                  <div data-hover="false" data-delay={200} className="af-class-dropdown w-dropdown">
                    <div className="af-class-dropdown-toggle w-dropdown-toggle">
                      <div className="af-class-icon w-icon-dropdown-toggle" />
                      <div className="af-class-dropdown-text">Community</div>
                    </div>
                    <nav className="af-class-dropdown-list w-dropdown-list">
                      <a href="#" className="af-class-dropdown-link w-dropdown-link">discord</a>
                      <a href="#" className="af-class-dropdown-link w-dropdown-link">twitter</a>
                      <a href="#" className="af-class-dropdown-link w-dropdown-link">github</a>
                    </nav>
                  </div>
                  <a href="#" className="af-class-nav-link">Docs</a>
                </div>
              </div>
            </div>
            <div />
            <div className="af-class-wf-section">
              <h1 className="af-class-heading-4">N0FUNG1S BLOG</h1>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default BlogView

/* eslint-enable */