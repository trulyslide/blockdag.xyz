import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import Footer from "../components/footer"

const IndexPage = () => (
  <main>
    <Header />
    <div className="flex-container">
      <div className="main-content">
        <section>
          <h2>Build on BlockDAG</h2>
          <p>BlockDAG is next evolution of blockchain technology, enabling native Layer 1 scaling on an unprecedented level, while maintaining high levels of security and decentralization.</p>
          <div className="build-container">
            <a href="build.html"><img src="img/build_on_blockdag.png" alt="Build on BlockDAG" width="500" /></a>
            <Link to="/build" className="large-build-button">Build</Link>
          </div>  
        </section>

        <section>
          <h2>Who is using BlockDAG?</h2>
          <h3>Taraxa</h3>
          <p>Taraxa (<a href="http://taraxa.io">taraxa.io</a>) - Taraxa is the first modern blockchain project to take advantage of BlockDAG. Founded in 2018, with years of research and a meticulous refactoring of the Ethereum Virtual Machine (EVM) to takes advantage of BlockDAG while maintaining compatibility with popular Dapp structures and tooling. Taraxa is a Layer 1 solution that aims to enable Web3 to solve real world decentralization problems.</p>
          <p><a href="http://taraxa.io"><img src="img/taraxa_logo_transparent_dark_bg.png" alt="Taraxa Logo" width="250" /></a></p>
        
          <h3>Kaspa</h3>
          <p>Kaspa (<a href="http://kaspa.org">kaspa.org</a>) - Kaspa is a true currency token in the vain of the original Bitcoin. Founded in 2021 by some of the mathematicians who developed the Ghost consensus protocol, which was revolutionary in taking advantage of the BlockDAG structure to scale chains. Like Bitcoin, Kaspa is Proof of Work (PoW) and aims to be a digital silver, a true fast, decentralized payment platform in the spirit of Satoshi's original vision.</p>
        </section>

        <section>
          <h2>DAG - Directed Acyclic Graph</h2>
          <p>A DAG is just a simple mathematical structure, no more important to the BlockDAG than the concept of a chain is to the blockchain. Its nodes are connected, each having a known predecessor, without looping or cycling backwards. Unlike a chain where one node exists at a time, in a DAG, multiple nodes can form simultaneously from the same parent.</p>
          <p>The magic in BlockDAG exists in how these nodes (or blocks in this case) are ordered and executed.</p>
          <img src="img/dag.png" alt="DAG Diagram" />
        </section>

        <section>
          <h2>Blockchains, DAGs and BlockDAGs</h2>
          <p>BlockDAG allows multiple blocks to be added to the network simultaneously, significantly increasing transaction throughput compared to the single-chain approach in traditional blockchains. The parallel nature of BlockDAG provides better scalability, handling more transactions per second (TPS) as the network grows, compared to the linear growth limitations of traditional blockchains. BlockDAG's structure can potentially offer improved security. The interconnectedness of blocks makes it more challenging for malicious actors to alter the transaction history.</p>
          <p>DAGs have been used for a long time in crypto projects (for example IOTA). Typically though, the transactions themselves are linked in a DAG structure, with each transaction needing to validate the previous ones. BlockDAG's use of traditional blocks provides advantages in scalability, security, and confirmation times.</p>
          <img src="img/Taraxa_meme-3.png" alt="Taraxa Meme" width="500" />
        </section>
      </div>
      <Sidebar />
    </div>
    <Footer />
  </main>
)

export default IndexPage
