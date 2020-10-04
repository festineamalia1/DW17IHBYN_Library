import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Propic from 'assets/images/propic.png'
import Buku1 from 'assets/images/buku1.png'
import Button from 'elements/Button'
export default function MyProfContent() {
    return (
        <div className="wrapper">
        <div className="item1"></div>
        <div className="item2"><br/></div>
       
        <div className="item3">
        <section className="container">
        <h4 className="mb-5">My Profile</h4>
       <div className="Row">
       
       <Jumbotron className="jumprof">
    
       <div class="wrapper-prof">
  <div>
      <table>
          <tr>
              <th>
                  egigans@gmail.com
              </th>
          </tr>
          <tr>
              <td>
                Email
              </td>
          </tr>
          <tr><br/></tr>
          <tr>
              <th>Male</th>
          </tr>
          <tr>
              <td>Gender</td>
          </tr>
          <tr><br/></tr>
          <tr>
              <th>0812-8623-8911</th>
          </tr>
          <tr>
              <td>Mobile phone</td>
          </tr>
          <tr><br/></tr>
          <tr>
              <th>Perumahan Permata Bintaro Residence C-3</th>
          </tr>
          <tr>
              <td>Address</td>
              </tr>
      </table>
  </div>
  <div >
  

 
  <table>
      <tr><th><img className="propic"src={Propic} alt="foto" /></th></tr>
      <tr><td><Button className="btnprof">Change Photo Profile</Button></td></tr>
  </table>
  </div>

  
</div>
  
    </Jumbotron>
    
      <span className="list-prof">My Book</span>
     
     
      <div class="list-grid-prof">
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
