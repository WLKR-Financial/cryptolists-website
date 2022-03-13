import React, { useEffect } from 'react'
import Header from '../components/header'

import '../index.css'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="home-content">
        <div>
          <section className="hero">
            <small style={{ marginTop: '4rem', marginBottom: '1rem' }}>A Walker project</small>
            <p className="title">Why cryptos lists?</p>

            <p className="description" id="why-lists">
              Crypto Lists aim to solve the problem of the Ethereum community creating, discovering and maintaining lists
              of reputable cryptos in a way that is inclusive, transparent, decentralized and open source.
            </p>
            <p>
              As the Ethereum ecosystem continues to evolve and mature, we are continuing to see sustained exponential
              growth in the number of ERC-20 cryptos being created and used by participants of the network.
            </p>
            <p>
              This is an exciting success of permissionless innovation enabled by the open nature of blockchain
              networks. Ethereum continues to prove out to be the most attractive platform for innovative projects in
              decentralized finance. This is not surprising because it has the best tooling and ecosystem, making it the
              best place for developers and entrepreneurs to build, as well as the most attractive place for users
              because of the diversity of products and rapidly improving tools.
            </p>
            <h2>The tradeoffs of permissionless innovation</h2>
            <p>
              The permissionless nature of Ethereum and the ease of creating cryptos also comes with tradeoffs. Since
              there are no central gatekeepers, it becomes up to the users and projects in the space to establish trust
              and reputation, as well as perform actions of moderation. How can users tell credible projects from scams?
            </p>
            <p>
              Walker is a crypto asset managment DAO that faces the issues of crypto reputation directly. Until now, the Walker
              team took on the responsibility of curating the cryptos that show up in the Walker Interface. While this
              was important to get the project off the ground and protect the users of Walker, having the Walker team
              curate cryptos that show up in the interface was never considered a viable long-term strategy.
            </p>
            <p>
              The ability to moderate crypto inclusion carries too much power and responsibility in a single gatekeeper.
              That power residing solely in the Walker team was against the ethos of the protocol and the broader DeFi
              ecosystem.
            </p>
            <h2>Enter crypto lists</h2>
            <p>
              The goal of crypto Lists is to enable trust to emerge around reputable cryptos in a way that is aligned with
              the values of decentralization.
            </p>
            <p>
              The Ethereum community is known for solving problems as an ecosystem. Today exist numerous reputable
              projects who are responsible for maintaining trustworthy lists of crypto projects. Until now, there hasn’t
              been a standard, interoperable way for those projects to codify those lists and share them with the
              broader community.
            </p>
            <p>
              Crypto Lists is a new json schema standard that enables exactly this. Projects can encode lists of
              reputable cryptos in a machine readable way. Anyone can make a list. These lists can then be imported into
              the Walker interface.
            </p>
            <p>
              We imagine crypto Lists being an important building block for the Ethereum ecosystem to self-govern
              reputation around cryptos and hope to see crypto lists used in other projects, as well as an ecosystem of
              tools, dashboards, and discussion forums to emerge around them.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
