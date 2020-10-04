import React from 'react'
import Buku1 from 'assets/images/buku1.png'
export default function MyLibContent() {
    return (
        <div className="wrapper">
        <div className="item1"></div>
        <div className="item2"><br/></div>
       
        <div className="item3">
        <section className="container">
       <h4 className="mb-5">My Library</h4>
       <div className="Row">
      
       <div class="list-grid2">
    <div>
        <img src={Buku1} alt="Buku1" />
        <p>What if? Absurd Questions</p>
        <span>Randall Munroe</span>
    </div>
    <div><img src={Buku1} alt="Buku1" />
    <p>What if? Absurd Questions</p>
        <span>Randall Munroe</span></div>
    <div><img src={Buku1} alt="Buku1" />
    <p>What if? Absurd Questions</p>
        <span>Randall Munroe</span>
    </div>
    <div><img src={Buku1} alt="Buku1" />
    <p>What if? Absurd Questions</p>
        <span>Randall Munroe</span>
    </div>
    
    </div>
      </div>
      
    
      </section>
        </div>
        <div className="item4"><br/><br/></div>
        
      
        
      </div>
      
    )
}
