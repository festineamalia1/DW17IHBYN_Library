import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import BukuIklan from 'assets/images/Fix_You.png'
import Buku1 from 'assets/images/buku1.png'
import Button from 'elements/Button'
export default function ContentIndex() {
    return (
        <div className="wrapper">
        <div className="item1"></div>
        <div className="item2"><br/></div>
       
        <div className="item3">
        <section className="container">
       
       <div className="Row">
    
       <Jumbotron>
    
    <p>
    Share, read<br/>
    and love
    </p>
    <span>Reading is fascinating</span>
    <img className="iklan_buku" src={BukuIklan} alt="Bukuiklan" />
    </Jumbotron>
    
      <span className="list">List Book</span>
      <div><Button className="btnlist" isLight>Category</Button>
      </div>
     
      <div class="list-grid">
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
        
        <div className="item4"></div>
        
      
        
      </div>
    )
}
