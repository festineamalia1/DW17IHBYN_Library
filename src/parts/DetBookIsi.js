import React from 'react'
import DetBook from 'assets/images/detbook.png'
export default function DetBookIsi() {
    return (
        <div>
            <div className="wrapper">
  <div className="item1"></div>
  <div className="item2"><br/></div>
 
  <div className="item3">
  <div class="wrapper-det">
  <div><img className="debookpic"src={DetBook} alt="detbookpic1" /></div>
  <div>
      <table>
          <tr>
              <th className="title-det">Tess on the Road</th>
          </tr>
          <tr>
              <td>Rachel Hartman</td>
          </tr>
          <tr><br/></tr>
          <tr>
              <th>Publication date</th>
          </tr>
          <tr>
              <td>April 2020</td>
          </tr>
          <tr><br/></tr>
          <tr>
              <th>Category</th>
          </tr>
          <tr>
              <td>Sci-Fi</td>
          </tr>
          <tr><br/></tr>
          <tr>
              <th>Pages</th>
          </tr>
          <tr>
              <td>436</td>
          </tr>
          <tr><br/></tr>
          <tr>
              <th className="isbn">ISBN</th>
          </tr>
          <tr>
              <td>9781789807554</td>
          </tr>
      </table>
      
  </div>
 
  
</div>
  </div>
  <div className="item4"><br/><br/></div>
  

  
</div>
        </div>
    )
}
