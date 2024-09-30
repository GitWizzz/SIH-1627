import React from 'react'

export default function Medi() {
    const grugItems = [
        {
            name: "Metformin",
            price: "₹500",
            description: "Used for treating type 2 diabetes.",
            stock: 20,
            image: "https://images.ctfassets.net/4w8qvp17lo47/6vXaH4Y5Gw6AMEmASwGkc6/e6ff962a82811e4d160cc2d5c0d8b3cb/metformin-antidiabetic-tablets-science-photo-library.jpg "  
            
        },
        {
            name: "Amlodipine",
            price: "₹750",
            description: "Treating for high blood pressure.",
            stock: 15,
            image: "https://res.cloudinary.com/zava-www-uk/image/upload/fl_progressive/a_exif,f_auto,e_sharpen:100,c_fit,w_1080,h_810,q_70,fl_lossy/v1707298988/sd/uk/services-setup/high-blood-pressure-unit/amlodipine/aglli6kztlzk3s8fwajd.png"  
        },
        {
            name: "Paracetamol",
            price: "₹300",
            description: "Common pain reliever.",
            stock: 50,
            image: "https://tiimg.tistatic.com/fp/1/007/784/paracetamol-500mg-tablets--229.jpg"  
        },
        {
            name: "Atorvastatin",
            price: "₹200",
            description: "Used to lower cholesterol levels.",
            stock: 35,
            image: "https://5.imimg.com/data5/SELLER/Default/2024/3/400047823/GB/HP/EP/160457072/atorvastatin-5mg-500x500.png"  
        },
        {
            name: "Omeprazole",
            price: "₹400",
            description: "Used to treat acid reflux and stomach ulcers.",
            stock: 10,
            image: "https://accessdoctor.co.uk/wp-content/uploads/2021/08/omeprazole-product-image.jpg"  
        },
        {
            name: "Ibuprofen",
            price: "₹350",
            description: "Nonsteroidal anti-inflammatory drug used for pain relief.",
            stock: 25,
            image: "https://images.jdmagicbox.com/quickquotes/images_main/ibuprofen-tablets-600mg-2217084324-qhp8ayoy.jpg"  // Placeholder image URL
        },
        {
            name: "Amoxicillin",
            price: "₹600",
            description: "Antibiotic used to treat various bacterial infections.",
            stock: 18,
            image: "https://5.imimg.com/data5/SELLER/Default/2023/8/332350358/SI/JT/VF/98283251/amoxicillin-drugs3-500x500.jpg"  // Placeholder image URL
        },
        {
            name: "Lisinopril",
            price: "₹450",
            description: "Used to treat high blood pressure and heart failure.",
            stock: 30,
            image: "https://globelapharma.com/wp-content/uploads/2023/01/LISINOPRIL_.png"  // Placeholder image URL
        }
    ];

  return (
    <div className=''>
       <section className="inventory-section d-flex align-items-center">
            <div className="inventory-container ">
                <h2>Frequently Ordered Medicines</h2>
                <div className="inventory-items">
                    {grugItems.map((item, index) => (
                        <div key={index} className="inventory-item">
                            <img src={item.image} alt={item.name} className="medicine-image" />
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p>Price: <strong>{item.price}</strong></p>
                            <button className="buy-button" disabled={item.stock === 0}>Buy</button>
                            <button className="details-button">Check Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}
