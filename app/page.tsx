const products = [
  { name: 'Blue Roll', category: 'Cleaning', unit: '6-roll case', from: '€18.50' },
  { name: 'Black Bin Liners', category: 'Waste', unit: '200-bag case', from: '€21.90' },
  { name: 'Dishwasher Detergent', category: 'Chemicals', unit: '20L', from: '€31.50' },
  { name: 'Toilet Roll', category: 'Washroom', unit: 'Case', from: '€24.00' },
]

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="brand">Stór<span>.</span></div>
        <nav><a href="#compare">Compare</a><a href="#deals">Group Deals</a><a href="#savings">Savings</a></nav>
        <button className="outline">Sign in</button>
      </header>

      <section className="hero">
        <div className="eyebrow">BUILT FOR HOSPITALITY</div>
        <h1>Same supplies.<br/><em>Better prices.</em></h1>
        <p>Compare everyday hospitality supplies, combine buying power with local businesses and see exactly what you could save.</p>
        <div className="actions"><a className="primary" href="#compare">Compare prices</a><a className="secondary" href="#deals">View group deals</a></div>
        <div className="trust"><b>Simple.</b> Transparent pricing &nbsp;•&nbsp; Local buying power &nbsp;•&nbsp; No food or drink</div>
      </section>

      <section className="stats" id="savings">
        <div><small>POTENTIAL MONTHLY SAVING</small><strong>€428</strong><span>Example dashboard</span></div>
        <div><small>AVERAGE SAVING</small><strong>17%</strong><span>Across compared supplies</span></div>
        <div><small>GROUP BUYING</small><strong>Better together</strong><span>Unlock sharper supplier pricing</span></div>
      </section>

      <section className="content" id="compare">
        <div className="sectionHead"><div><small>PRICE COMPARISON</small><h2>Start with what you buy every week.</h2></div><button className="primary">Search all products</button></div>
        <div className="search">⌕ &nbsp; Search blue roll, bin liners, chemicals, gloves...</div>
        <div className="grid">{products.map((p, i) => <article className="card" key={p.name}><div className="icon">{['🧻','♻','🧴','▦'][i]}</div><small>{p.category}</small><h3>{p.name}</h3><p>{p.unit}</p><div className="price"><span>Best price from</span><b>{p.from}</b></div><button>Compare suppliers →</button></article>)}</div>
      </section>

      <section className="deal" id="deals">
        <div><small>LIVE GROUP DEAL</small><h2>Blue Roll Group Buy</h2><p>Hospitality businesses combine their orders. More volume gives suppliers room to offer a better price.</p></div>
        <div className="dealbox"><div><span>Standard price</span><s>€24.00</s></div><div><span>Stór group price</span><strong>€18.50</strong></div><div className="progress"><i></i></div><p><b>72</b> of 100 cases committed</p><button className="primary">Join this deal</button></div>
      </section>

      <footer><div className="brand">Stór<span>.</span></div><p>Smarter purchasing for hospitality.</p><small>Prototype • Galway, Ireland</small></footer>
    </main>
  )
}
