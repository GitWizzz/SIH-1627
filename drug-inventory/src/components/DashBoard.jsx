import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <aside className="search-wrap">
          <div className="search">
            <label htmlFor="search">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" /></svg>
              <input type="text" id="search" />
            </label>
          </div>
          <div className="user-actions">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M13.094 2.085l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5H20a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915zM12 19.5c-.841 0-1.5-.659-1.5-1.5h3c0 .841-.659 1.5-1.5 1.5zM5.388 16l.561-1.684A1.03 1.03 0 0 0 6 14v-4c0-2.959 2.211-5.509 5.08-5.923l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684H5.388z" /></svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" /><path d="M11 2h2v10h-2z" /></svg>
            </button>
          </div>
        </aside>
        <header className="menu-wrap">
          <figure className="user">
            <div>
              <a href="/"><button className='login-home' type='button'>HOME</button></a>
            </div>

          </figure>
          <nav>
            <h3 className='text-dark fs-3'>Dashboard</h3>
            <section className="dicover">
              <h3>Inventory</h3>
              <ul>
                <li>
                  <a href="#">
                    View Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    Track Shipment
                  </a>
                </li>
                <li>
                  <a href="/map">
                    Warehouse Details
                  </a>
                </li>
                <li>
                  <a href="#">
                    Add slots
                  </a>
                </li>
              </ul>
            </section>
            <section className="tools">
              <h3>Tools</h3>
              <ul>
                <li>
                  <a href="#" className="active">
                    Search
                  </a>
                </li>
                <li>
                  <a href="#">
                    Create portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                    Messages
                  </a>
                </li>
              </ul>
            </section>
            <section className="dicover">
              <h3>Finance</h3>
              <ul>
                <li>
                  <a href="#">
                    Buy
                  </a>
                </li>
                <li>
                  <a href="#">
                    Sell
                  </a>
                </li>
                <li>
                  <a href="#">
                    Invoice
                  </a>
                </li>
                <li>
                  <a href="#">
                    Wallet
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </header>
        <main className="content-wrap">
          <header className="content-head">
            <h1>Inventory Details</h1>

          </header>
          <div className="content">
            <section className="info-boxes">
              <div className="info-box">
                <div className="box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M21 20V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2-1H5V5h14v14z" /><path d="M10.381 12.309l3.172 1.586a1 1 0 0 0 1.305-.38l3-5-1.715-1.029-2.523 4.206-3.172-1.586a1.002 1.002 0 0 0-1.305.38l-3 5 1.715 1.029 2.523-4.206z" /></svg>
                </div>
                <div className="box-content">
                  <span className="big">44.51</span>
                  Current Storage (52)
                </div>
              </div>
              <div className="info-box">
                <div className="box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M20 10H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 10H5v-8h14v8zM5 6h14v2H5zM7 2h10v2H7z" /></svg>
                </div>
                <div className="box-content">
                  <span className="big">132</span>
                  No of Shelf Available
                </div>
              </div>

              <div className="info-box">
                <div className="box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 3C6.486 3 2 6.364 2 10.5c0 2.742 1.982 5.354 5 6.678V21a.999.999 0 0 0 1.707.707l3.714-3.714C17.74 17.827 22 14.529 22 10.5 22 6.364 17.514 3 12 3zm0 13a.996.996 0 0 0-.707.293L9 18.586V16.5a1 1 0 0 0-.663-.941C5.743 14.629 4 12.596 4 10.5 4 7.468 7.589 5 12 5s8 2.468 8 5.5-3.589 5.5-8 5.5z" /></svg>
                </div>
                <div className="box-content">
                  <span className="big">24</span>
                  Alerts
                </div>
              </div>
            </section>
            <section className="person-boxes">
              <table class="table table-bordered" id="table">
              <thead>
        <tr>
            <th>Drug Name</th>
            <th>Quantity</th>
            <th>Price (INR)</th>
            <th>Manufacturer</th>
            <th>Expiry Date</th>
            <th>Shelf Number</th>
            <th>Manufacture Date</th>
            <th>Delivery Date</th>
            <th>Stock Status</th>
            <th>View Details</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Paracetamol</td>
            <td>100</td>
            <td>₹415</td> 
            <td>Pharma Inc.</td>
            <td>2025-12-31</td>
            <td>A1</td>
            <td>2023-06-15</td>
            <td>2023-07-01</td>
            <td>Low on Stock</td>
            <td><button class="view-details">View</button></td>
        </tr>
        <tr>
            <td>Ibuprofen</td>
            <td>200</td>
            <td>₹665</td> 
            <td>HealthCorp</td>
            <td>2024-11-30</td>
            <td>B2</td>
            <td>2023-04-10</td>
            <td>2023-05-05</td>
            <td>Empty</td>
            <td><button class="view-details">View</button></td>
        </tr>
        <tr>
            <td>Amoxicillin</td>
            <td>150</td>
            <td>₹995</td> 
            <td>MedLife</td>
            <td>2023-10-15</td>
            <td>C3</td>
            <td>2023-01-20</td>
            <td>2023-02-15</td>
            <td>Low on Stock</td>
            <td><button class="view-details">View</button></td>
        </tr>
        <tr>
            <td>Cetirizine</td>
            <td>300</td>
            <td>₹330</td> 
            <td>AllergyFree</td>
            <td>2026-01-20</td>
            <td>D4</td>
            <td>2024-08-01</td>
            <td>2024-08-10</td>
            <td>Low on Stock</td>
            <td><button class="view-details">View</button></td>
        </tr>
        <tr>
            <td>Metformin</td>
            <td>250</td>
            <td>₹830</td> 
            <td>DiabetesCare</td>
            <td>2025-05-10</td>
            <td>E5</td>
            <td>2024-05-25</td>
            <td>2024-06-15</td>
            <td>Pending</td>
            <td><button class="view-details">View</button></td>
        </tr>
        <tr>
            <td>Atorvastatin</td>
            <td>180</td>
            <td>₹1,245</td> 
            <td>HeartHealth</td>
            <td>2024-08-25</td>
            <td>F6</td>
            <td>2024-03-10</td>
            <td>2024-04-05</td>
            <td>Low on Stock</td>
            <td><button class="view-details">View</button></td>
        </tr>
    </tbody>
              </table>
            </section>
          </div>
        </main>
      </div>

    </div>
  )
}
