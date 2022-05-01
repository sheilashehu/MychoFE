/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: Promise.resolve("document.addEventListener(\"DOMContentLoaded\",function(){function t(e){const t=document.querySelector(\"#slider-progress\");var s=100/document.getElementsByClassName(\"product-slide w-slide\").length+\"%\",i=(t.style.width||(t.style.width=s),100<=parseInt(t.style.width)+e?100%(100<=parseInt(t.style.width)+e):parseInt(t.style.width));100<=parseInt(t.style.width)+e?t.style.width=s:parseInt(t.style.width)+e<=0?t.style.width=\"100%\":t.style.width=i+e+\"%\"}document.getElementById(\"arrow-right-new\").addEventListener(\"click\",function(){var e=document.getElementsByClassName(\"product-slide w-slide\").length,e=100/e;document.getElementsByClassName(\"right-arrow w-slider-arrow-right\")[0].click(),t(e)}),document.getElementById(\"arrow-left-new\").addEventListener(\"click\",function(){var e=document.getElementsByClassName(\"product-slide w-slide\").length,e=-100/e;document.getElementsByClassName(\"left-arrow w-slider-arrow-left\")[0].click(),t(e)});let s;function i(){const e=[...document.getElementsByClassName(\"panel\")];e[0].classList.add(\"active\"),e[3].classList.remove(\"active\"),setTimeout(function(){e[0].classList.remove(\"active\"),e[1].classList.add(\"active\"),setTimeout(function(){e[1].classList.remove(\"active\"),e[2].classList.add(\"active\"),setTimeout(function(){e[2].classList.remove(\"active\"),e[3].classList.add(\"active\"),setTimeout(function(){e[3].classList.remove(\"active\")},200)},200)},200)},200)}document.getElementById(\"hero-cta\").addEventListener(\"mouseover\",function(){const e=[...document.getElementsByClassName(\"panel\")];e[0].classList.add(\"active\"),e[3].classList.remove(\"active\"),setTimeout(function(){e[0].classList.remove(\"active\"),e[1].classList.add(\"active\"),setTimeout(function(){e[1].classList.remove(\"active\"),e[2].classList.add(\"active\"),setTimeout(function(){e[2].classList.remove(\"active\"),e[3].classList.add(\"active\"),setTimeout(function(){e[3].classList.remove(\"active\")},200)},200)},200)},200),s=setInterval(i,800)}),document.getElementById(\"hero-cta\").addEventListener(\"mouseout\",function(){clearInterval(s);const e=[...document.getElementsByClassName(\"panel\")];e[0].classList.remove(\"active\"),e[1].classList.remove(\"active\"),e[2].classList.remove(\"active\"),e[3].classList.remove(\"active\")}),window.innerWidth<=768&&(s=setInterval(i,800),window.addEventListener(\"scroll\",function(){0===window.scrollY?s=setInterval(i,800):clearInterval(s)}))});"), isAsync: false },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=62584a259f09c542d5bfa239").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '62584a269f09c5cd62bfa23d'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/mycelium-ff1d0d.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-custom-code w-embed w-script">
              <style dangerouslySetInnerHTML={{__html: "\n.af-view {\n    font-family: sans-serif;\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -webkit-tap-highlight-color: transparent;\n}\n.af-view {\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n.af-view .af-class-pointer-events-none {\n\tpointer-events: none !important; //pass through cursor hover despite higher z-index\n}\n.af-view .af-class-pointer-events-auto {\n\tpointer-events: auto; //pass through cursor hover despite higher z-index\n}\n.af-view .af-class-outline-text {\n    -webkit-text-fill-color: transparent;\n    -webkit-text-stroke: 2px white;\n}\n.af-view .af-class-left-arrow.w-slider-arrow-left{\ndisplay:none! important;\n}\n.af-view .af-class-right-arrow.w-slider-arrow-right{\ndisplay:none! important;\n}\n.af-view .af-class-panel.af-class-red.af-class-active {\n    background-color: rgb(252, 10, 84);\n    box-shadow: rgb(252 10 84) 8px 16px 120px;\n}\n.af-view .af-class-panel.af-class-orange.af-class-active {\n    background-color: rgb(255, 144, 0);\n    box-shadow: rgb(255 144 0) 8px 16px 120px;\n}\n.af-view .af-class-panel.af-class-turquoise.af-class-active {\n    background-color: rgb(255, 144, 0);\n    box-shadow: rgb(255 144 0) 8px 16px 120px;\n}\n.af-view .af-class-panel.af-class-blue.af-class-active {\n    background-color: rgb(114, 157, 237);\n    box-shadow: rgb(114 157 237) 8px 16px 120px;\n}\n}\n" }} />
            </div>
            <nav className="af-class-nav">
              <div data-w-id="c07b173d-6269-e390-213f-0de199852b8d" className="af-class-nav-wrapper af-class-menu">
                <a href="#" className="af-class-link-block w-inline-block"><img src="images/asset-5.svg" loading="lazy" alt="Ribbon Finance Logo" /></a>
                <div className="af-class-nav-links">
                  <div data-hover="false" data-delay={200} className="af-class-dropdown w-dropdown">
                    <div className="af-class-dropdown-toggle w-dropdown-toggle">
                      <div className="af-class-icon w-icon-dropdown-toggle" />
                      <div className="af-class-dropdown-text">About</div>
                    </div>
                    <nav className="af-class-dropdown-list w-dropdown-list">
                      <a href="blog.html" id="BLOG" className="af-class-dropdown-link w-dropdown-link">blog</a>
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
            </nav>
            <div className="af-class-page-wrapper">
              <header className="af-class-hero-section">
                <div className="af-class-panel-background">
                  <div className="af-class-panel af-class-red" />
                  <div className="af-class-panel af-class-orange" />
                  <div className="af-class-panel af-class-turquoise" />
                  <div className="af-class-panel af-class-blue" />
                </div>
                <div className="af-class-hero-content af-class-pointer-events-none">
                  <div className="af-class-hero-row">
                    <h1 data-w-id="00bd46ad-fff0-71ea-b84d-b03edf2d1d25" style={{opacity: 0}} className="af-class-hero-heading">N0fung1s</h1>
                    <p data-w-id="1106a76f-b998-f5da-f0a4-b76c9bb73c64" style={{opacity: 0}} className="af-class-hero-subtitle">A project about the Fantastic Fungis</p>
                    <a id="hero-cta" data-w-id="42744cb6-9aca-e3c2-34dd-cf59a917092c" style={{opacity: 0}} href="#" className="af-class-button af-class-white af-class-hero-margin af-class-pointer-events-auto w-button">Launch app</a>
                  </div>
                </div>
              </header>
              <section className="af-class-prouducts-section">
                <h2 className="af-class-product-section">OUR NFTs</h2>
                <div data-w-id="7ee0a216-d4cc-94b8-e7e8-49705554d753" style={{opacity: 0}} className="af-class-products-wrapper">
                  <div data-delay={4000} data-animation="over" className="af-class-product-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={0} data-infinite="true">
                    <div className="af-class-mask w-slider-mask">
                      <div className="af-class-product-slide w-slide">
                        <div className="af-class-product-inner-wrapper af-class-contained">
                          <div className="af-class-left-product-section">
                            <div className="af-class-product-content-wrapper">
                              <div className="af-class-product-content">
                                <h2 className="af-class-product-title">T-AAVE-C</h2>
                                <p className="af-class-product-subtitle">Generates yield by running an automated AAVE covered call strategy. </p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-right-product-section">
                            <div className="af-class-product-card-wrapper af-class-blue-gradient">
                              <div className="af-class-bordered-container af-class-blue">
                                <div className="af-class-product-tag">Covered Call</div>
                                <div className="af-class-product-logo"><img src="images/asset-6.svg" loading="lazy" alt="Aave Logo" /></div>
                                <div className="af-class-product-info-wrapper">
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Projected Yield (APY)</div>
                                    <div className="af-class-product-info-text af-class-figure af-class-blue">10.17%</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Current Deposits</div>
                                    <div className="af-class-product-info-text af-class-figure">10.01K fng</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-progress-wrapper">
                                      <div className="af-class-progress-bar" />
                                    </div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Max Capacity</div>
                                    <div className="af-class-product-info-text af-class-figure">15.5K FNG</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-products-marquee-wrapper">
                          <div className="af-class-product-marquee-container">
                            <div className="af-class-product-maquee af-class-scroll-left">
                              <h3 className="af-class-marquee-text">t-aave-c</h3>
                              <h3 className="af-class-marquee-text">t-aave-c</h3>
                            </div>
                          </div>
                          <div className="w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-scroll-left {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: scroll-left 30s linear infinite;\n}\n@keyframes scroll-left {\n  .af-view from { transform: translateX(0); }\n  .af-view to { transform: translateX(-50%); }\n" }} />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-product-slide w-slide">
                        <div className="af-class-products-marquee-wrapper">
                          <div className="af-class-product-marquee-container">
                            <div className="af-class-product-maquee af-class-scroll-left">
                              <h3 className="af-class-marquee-text">T-Avax-C</h3>
                              <h3 className="af-class-marquee-text">T-Avax-C</h3>
                            </div>
                          </div>
                          <div className="w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-scroll-left {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: scroll-left 30s linear infinite;\n}\n@keyframes scroll-left {\n  .af-view from { transform: translateX(0); }\n  .af-view to { transform: translateX(-50%); }\n" }} />
                          </div>
                        </div>
                        <div className="af-class-product-inner-wrapper af-class-contained">
                          <div className="af-class-left-product-section">
                            <div className="af-class-product-content-wrapper">
                              <div className="af-class-product-content">
                                <h2 className="af-class-product-title">T-Avax-C</h2>
                                <p className="af-class-product-subtitle">Generates yield by running an automated AVAX covered call strategy. </p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-right-product-section">
                            <div className="af-class-product-card-wrapper af-class-red-gradient">
                              <div className="af-class-bordered-container af-class-red">
                                <div className="af-class-product-tag af-class-red">Covered Call</div>
                                <div className="af-class-product-logo"><img src="images/avax-logo.svg" loading="lazy" alt="Aave Logo" /></div>
                                <div className="af-class-product-info-wrapper">
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Projected Yield (APY)</div>
                                    <div className="af-class-product-info-text af-class-figure af-class-red">42.51%</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Current Deposits</div>
                                    <div className="af-class-product-info-text af-class-figure">172.81K AVAX</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-progress-wrapper">
                                      <div className="af-class-progress-bar af-class-_50" />
                                    </div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Max Capacity</div>
                                    <div className="af-class-product-info-text af-class-figure">500K AVAX</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-product-slide w-slide">
                        <div className="af-class-product-inner-wrapper af-class-contained">
                          <div className="af-class-left-product-section">
                            <div className="af-class-product-content-wrapper">
                              <div className="af-class-product-content">
                                <h2 className="af-class-product-title">T-WBTC-C<br /></h2>
                                <p className="af-class-product-subtitle">Generates yield by running an automated WBTC covered call strategy.</p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-right-product-section">
                            <div className="af-class-product-card-wrapper af-class-orange-logo">
                              <div className="af-class-bordered-container af-class-orange">
                                <div className="af-class-product-tag af-class-orange">Covered Call</div>
                                <div className="af-class-product-logo"><img src="images/bitcoin-btc-logo.svg" loading="lazy" alt="Aave Logo" className="af-class-sized-product-logo" /></div>
                                <div className="af-class-product-info-wrapper">
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Projected Yield (APY)</div>
                                    <div className="af-class-product-info-text af-class-figure af-class-orange">10.68%</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Current Deposits</div>
                                    <div className="af-class-product-info-text af-class-figure">779.58 wbtc</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-progress-wrapper">
                                      <div className="af-class-progress-bar af-class-_90" />
                                    </div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Max Capacity</div>
                                    <div className="af-class-product-info-text af-class-figure">1,000-00 wbtc</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-products-marquee-wrapper">
                          <div className="af-class-product-marquee-container">
                            <div className="af-class-product-maquee af-class-scroll-left">
                              <h3 className="af-class-marquee-text">T-STETH-C</h3>
                              <h3 className="af-class-marquee-text">T-STETH-Ct-aave-c</h3>
                            </div>
                          </div>
                          <div className="w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-scroll-left {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: scroll-left 30s linear infinite;\n}\n@keyframes scroll-left {\n  .af-view from { transform: translateX(0); }\n  .af-view to { transform: translateX(-50%); }\n" }} />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-product-slide w-slide">
                        <div className="af-class-product-inner-wrapper af-class-contained">
                          <div className="af-class-left-product-section">
                            <div className="af-class-product-content-wrapper">
                              <div className="af-class-product-content">
                                <h2 className="af-class-product-title">T-STETH-C<br /></h2>
                                <p className="af-class-product-subtitle">Generates yield by running an automated stETH-collateralized ETH covered call strategy.</p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-right-product-section">
                            <div className="af-class-product-card-wrapper af-class-dark-blue-gradient">
                              <div className="af-class-bordered-container af-class-dark-blue">
                                <div className="af-class-product-tag">Covered Call</div>
                                <div className="af-class-product-logo"><img src="images/steth.svg" loading="lazy" alt="Aave Logo" /></div>
                                <div className="af-class-product-info-wrapper">
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Projected Yield (APY)</div>
                                    <div className="af-class-product-info-text af-class-figure af-class-dark-blue">10.65%</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Current Deposits</div>
                                    <div className="af-class-product-info-text af-class-figure">9,993.14 ETH</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-progress-wrapper">
                                      <div className="af-class-progress-bar" />
                                    </div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Max Capacity</div>
                                    <div className="af-class-product-info-text af-class-figure">50k eth</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-products-marquee-wrapper">
                          <div className="af-class-product-marquee-container">
                            <div className="af-class-product-maquee af-class-scroll-left">
                              <h3 className="af-class-marquee-text">T-STETH-C</h3>
                              <h3 className="af-class-marquee-text">T-STETH-Ct-aave-c</h3>
                            </div>
                          </div>
                          <div className="w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-scroll-left {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: scroll-left 30s linear infinite;\n}\n@keyframes scroll-left {\n  .af-view from { transform: translateX(0); }\n  .af-view to { transform: translateX(-50%); }\n" }} />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-product-slide w-slide">
                        <div className="af-class-product-inner-wrapper af-class-contained">
                          <div className="af-class-left-product-section">
                            <div className="af-class-product-content-wrapper">
                              <div className="af-class-product-content">
                                <h2 className="af-class-product-title">T-YVUSDC-P-ETH<br /></h2>
                                <p className="af-class-product-subtitle">Generates yield by running an automated yvUSDC-collateralized ETH put selling strategy.</p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-right-product-section">
                            <div className="af-class-product-card-wrapper af-class-dark-blue-gradient">
                              <div className="af-class-bordered-container af-class-purplish-blue">
                                <div className="af-class-product-tag af-class-purplish-blue">put-selling</div>
                                <div className="af-class-product-logo"><img src="images/yvusdc.svg" loading="lazy" alt="Aave Logo" className="af-class-sized-product-logo" /></div>
                                <div className="af-class-product-info-wrapper">
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Projected Yield (APY)</div>
                                    <div className="af-class-product-info-text af-class-figure af-class-purplish-blue">33.95%</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Current Deposits</div>
                                    <div className="af-class-product-info-text af-class-figure">48.25m usdc</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-progress-wrapper">
                                      <div className="af-class-progress-bar af-class-_25" />
                                    </div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Max Capacity</div>
                                    <div className="af-class-product-info-text af-class-figure">150m usfc</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-products-marquee-wrapper">
                          <div className="af-class-product-marquee-container">
                            <div className="af-class-product-maquee af-class-scroll-left">
                              <h3 className="af-class-marquee-text">T-YVUSDC-P-ETH</h3>
                              <h3 className="af-class-marquee-text">T-YVUSDC-P-ETH</h3>
                            </div>
                          </div>
                          <div className="w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-scroll-left {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: scroll-left 30s linear infinite;\n}\n@keyframes scroll-left {\n  .af-view from { transform: translateX(0); }\n  .af-view to { transform: translateX(-50%); }\n" }} />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-product-slide w-slide">
                        <div className="af-class-product-inner-wrapper af-class-contained">
                          <div className="af-class-left-product-section">
                            <div className="af-class-product-content-wrapper">
                              <div className="af-class-product-content">
                                <h2 className="af-class-product-title">T-ETH-C<br /></h2>
                                <p className="af-class-product-subtitle">Generates yield by running an automated ETH covered call strategy.</p>
                              </div>
                            </div>
                          </div>
                          <div className="af-class-right-product-section">
                            <div className="af-class-product-card-wrapper af-class-purple-logo">
                              <div className="af-class-bordered-container af-class-purple">
                                <div className="af-class-product-tag">Covered Call</div>
                                <div className="af-class-product-logo"><img src="images/ETH-1.svg" loading="lazy" alt="Aave Logo" className="af-class-sized-product-logo" /></div>
                                <div className="af-class-product-info-wrapper">
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Projected Yield (APY)</div>
                                    <div className="af-class-product-info-text af-class-figure af-class-purple">12.29%</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Current Deposits</div>
                                    <div className="af-class-product-info-text af-class-figure">23.6K ETH</div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-progress-wrapper">
                                      <div className="af-class-progress-bar af-class-_90" />
                                    </div>
                                  </div>
                                  <div className="af-class-product-info-row">
                                    <div className="af-class-product-info-text">Max Capacity</div>
                                    <div className="af-class-product-info-text af-class-figure">25k eth</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-products-marquee-wrapper">
                          <div className="af-class-product-marquee-container">
                            <div className="af-class-product-maquee af-class-scroll-left">
                              <h3 className="af-class-marquee-text">T-WBTC-C</h3>
                              <h3 className="af-class-marquee-text">T-WBTC-C</h3>
                            </div>
                          </div>
                          <div className="w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-scroll-left {\n  position: absolute;\n  white-space: nowrap;\n  will-change: transform;\n  animation: scroll-left 30s linear infinite;\n}\n@keyframes scroll-left {\n  .af-view from { transform: translateX(0); }\n  .af-view to { transform: translateX(-50%); }\n" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="left-arrow-original" className="af-class-left-arrow w-slider-arrow-left">
                      <div className="w-icon-slider-left" />
                    </div>
                    <div className="af-class-right-arrow w-slider-arrow-right">
                      <div className="w-icon-slider-right" />
                    </div>
                    <div className="af-class-slide-nav w-slider-nav w-round" />
                  </div>
                  <div className="af-class-product-changer-wrapper af-class-contained">
                    <a id="arrow-left-new" href="#" className="af-class-button af-class-arrow w-inline-block">←</a>
                    <a id="arrow-right-new" href="#" className="af-class-button af-class-arrow af-class-right w-inline-block">→</a>
                    <div className="af-class-slider-progress-wrapper">
                      <div className="af-class-slider-number">01</div>
                      <div className="af-class-progress-wrapper af-class-slider">
                        <div id="slider-progress" className="af-class-progress-bar af-class-slider" />
                      </div>
                      <div className="af-class-slider-number">06</div>
                    </div>
                  </div>
                </div>
                <div className="af-class-products-mobile">
                  <div className="af-class-product-card-wrapper af-class-blue-gradient">
                    <div className="af-class-bordered-container af-class-blue">
                      <div className="af-class-product-tag">Covered Call</div>
                      <div className="af-class-product-logo"><img src="images/asset-6.svg" loading="lazy" alt="Aave Logo" /></div>
                      <div className="af-class-product-info-wrapper">
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Projected Yield (APY)</div>
                          <div className="af-class-product-info-text af-class-figure af-class-blue">10.17%</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Current Deposits</div>
                          <div className="af-class-product-info-text af-class-figure">10.01K AAVE</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-progress-wrapper">
                            <div className="af-class-progress-bar" />
                          </div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Max Capacity</div>
                          <div className="af-class-product-info-text af-class-figure">15.5K AAVE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-product-card-wrapper af-class-dark-blue-gradient">
                    <div className="af-class-bordered-container af-class-dark-blue">
                      <div className="af-class-product-tag">Covered Call</div>
                      <div className="af-class-product-logo"><img src="images/steth.svg" loading="lazy" alt="Aave Logo" /></div>
                      <div className="af-class-product-info-wrapper">
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Projected Yield (APY)</div>
                          <div className="af-class-product-info-text af-class-figure af-class-dark-blue">10.65%</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Current Deposits</div>
                          <div className="af-class-product-info-text af-class-figure">9,993.14 ETH</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-progress-wrapper">
                            <div className="af-class-progress-bar" />
                          </div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Max Capacity</div>
                          <div className="af-class-product-info-text af-class-figure">50k eth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-product-card-wrapper af-class-red-gradient">
                    <div className="af-class-bordered-container af-class-red">
                      <div className="af-class-product-tag af-class-red">Covered Call</div>
                      <div className="af-class-product-logo"><img src="images/avax-logo.svg" loading="lazy" alt="Aave Logo" /></div>
                      <div className="af-class-product-info-wrapper">
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Projected Yield (APY)</div>
                          <div className="af-class-product-info-text af-class-figure af-class-red">42.51%</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Current Deposits</div>
                          <div className="af-class-product-info-text af-class-figure">172.81K AVAX</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-progress-wrapper">
                            <div className="af-class-progress-bar af-class-_50" />
                          </div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Max Capacity</div>
                          <div className="af-class-product-info-text af-class-figure">500K AVAX</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-product-card-wrapper af-class-dark-blue-gradient">
                    <div className="af-class-bordered-container af-class-purplish-blue">
                      <div className="af-class-product-tag af-class-purplish-blue">put-selling</div>
                      <div className="af-class-product-logo"><img src="images/yvusdc.svg" loading="lazy" alt="Aave Logo" className="af-class-sized-product-logo" /></div>
                      <div className="af-class-product-info-wrapper">
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Projected Yield (APY)</div>
                          <div className="af-class-product-info-text af-class-figure af-class-purplish-blue">33.95%</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Current Deposits</div>
                          <div className="af-class-product-info-text af-class-figure">48.25m usdc</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-progress-wrapper">
                            <div className="af-class-progress-bar af-class-_25" />
                          </div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Max Capacity</div>
                          <div className="af-class-product-info-text af-class-figure">150m usfc</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-product-card-wrapper af-class-purple-logo">
                    <div className="af-class-bordered-container af-class-purple">
                      <div className="af-class-product-tag">Covered Call</div>
                      <div className="af-class-product-logo"><img src="images/ETH-1.svg" loading="lazy" alt="Aave Logo" className="af-class-sized-product-logo" /></div>
                      <div className="af-class-product-info-wrapper">
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Projected Yield (APY)</div>
                          <div className="af-class-product-info-text af-class-figure af-class-purple">12.29%</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Current Deposits</div>
                          <div className="af-class-product-info-text af-class-figure">23.6K ETH</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-progress-wrapper">
                            <div className="af-class-progress-bar af-class-_90" />
                          </div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Max Capacity</div>
                          <div className="af-class-product-info-text af-class-figure">25k eth</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-product-card-wrapper af-class-orange-logo">
                    <div className="af-class-bordered-container af-class-orange">
                      <div className="af-class-product-tag af-class-orange">Covered Call</div>
                      <div className="af-class-product-logo"><img src="images/bitcoin-btc-logo.svg" loading="lazy" alt="Aave Logo" className="af-class-sized-product-logo" /></div>
                      <div className="af-class-product-info-wrapper">
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Projected Yield (APY)</div>
                          <div className="af-class-product-info-text af-class-figure af-class-orange">10.68%</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Current Deposits</div>
                          <div className="af-class-product-info-text af-class-figure">779.58 wbtc</div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-progress-wrapper">
                            <div className="af-class-progress-bar af-class-_90" />
                          </div>
                        </div>
                        <div className="af-class-product-info-row">
                          <div className="af-class-product-info-text">Max Capacity</div>
                          <div className="af-class-product-info-text af-class-figure">1,000-00 wbtc</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="af-class-mission-section af-class-contained">
                <div className="af-class-mission-tag">our mission</div>
                <div className="af-class-mission-section-row">
                  <h3 data-w-id="94efd85a-53a7-5ac0-ef9d-c30f85ec7518" style={{opacity: 0}} className="af-class-section-heading">tHE MISSION OF N0FUNG1</h3>
                </div>
                <div className="af-class-mission-section-row">
                  <p data-w-id="9165d71b-29b2-4222-e9ae-7e0e71bad76c" style={{opacity: 0}} className="af-class-section-paragraph">Description about N0FUNG1</p>
                </div>
                <div className="af-class-mission-section-row af-class-full-width"><img src="images/ribbon-graph-1-cropped.svg" loading="lazy" style={{opacity: 0}} data-w-id="2a85009e-0f0a-07c6-7f07-ad831472d730" alt className="af-class-full-width-image" /></div>
              </section>
              <section className="af-class-investors-section">
                <h2 className="af-class-investor-section">OUR Investors</h2>
                <div className="af-class-investor-grid af-class-contained">
                  <div data-w-id="486a52c1-2d18-1405-e403-8092b437ccb0" style={{opacity: 0}} className="af-class-investor-card"><img src="images/asset-0.svg" loading="lazy" alt="Dragonfly Capital Logo" className="af-class-investor-logo" /></div>
                </div>
              </section>
              <footer className="af-class-footer">
                <div className="af-class-footer-links-wrapper">
                  <a href="#" className="af-class-nav-link af-class-footer">faqs</a>
                  <a href="#" className="af-class-nav-link af-class-footer">blog</a>
                  <a href="#" className="af-class-nav-link af-class-footer">policy</a>
                  <a href="#" className="af-class-nav-link af-class-footer">Docs</a>
                </div>
                <div className="af-class-footer-links-wrapper">
                  <a href="#" className="af-class-nav-link af-class-footer">discord</a>
                  <a href="#" className="af-class-nav-link af-class-footer">twitter</a>
                  <a href="#" className="af-class-nav-link af-class-footer">github</a>
                </div>
              </footer>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */