import ProductList  from "./products/ProductList";
import LastShow from "./products/LastShow";
import { useState } from "react";
import NavigationBar from "./NavigationBar";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'luv fragrance',
        image:
          'https://www.kapruka.com/shops/specialGifts/productImages/16372183200004_14_m.jpg',
       price: '$19.99',
        description:
          'Rose Exotique – Mini Perfumed Body Mist 30ml',
      },
      {
        id: 'm2',
        title: 'luv fragrance',
        image:
          'https://www.kapruka.com/shops/specialGifts/productImages/16372183200002_10_m.jpg',
        price: '$19.99',
        description:
          'Rose Exotique – Mini Perfumed Body Mist 30ml',
      },
      {
        id: 'm3',
        title: 'spa ceylon',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TUW-ki6BJAnjNPlXPbqnF2hD3ZLbSbK60ryhxHYBUsB2vM3dkTCbURzuszr9iYf2BZ0&usqp=CAU',
        price: 'Rs.3800.00',
        description:
          'White Mint – Facial Cleansing Foam',
      },
      {
        id: 'm4',
        title: 'spa ceylon',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIiYlmKVGJR1ubULJED-mqpVBGPjPO0H8IAaepVzGZkQrJw93Vbe7sGvMOdptsXuTVQYc&usqp=CAU',
        price: 'Rs.4500.00',
        description:
          'Virgin Coconut – Cream Facial Wash 150ml',
      },
      {
        id: 'm5',
        title: 'viana',
        image:
          'https://viana.lk/wp-content/uploads/2019/10/V95-600x600.jpg',
        price: 'Rs.1750.00',
        description:
          'Viana beautéEnhance My Fairness Lotion SPF15',
      },
      {
        id: 'm6',
        title: 'viana',
        image:
          'https://viana.lk/wp-content/uploads/2019/12/LS-02-600x600.jpg',
        price: 'Rs.1500.00',
        description:
          'Ever Black & Young 20+ Leave On Serum',
      },
]

function Content (){

    return (
        <section>
            {/* <ProductList products={DUMMY_DATA}/>  */}
           <LastShow products={DUMMY_DATA}/>
           <NavigationBar products={DUMMY_DATA}/>

        </section >
        
    )
}

export default Content;