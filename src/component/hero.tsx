import React from 'react'
import { useState } from 'react';

// function ExpandableParagraph({ text }: { text: string }) {
//     const [isExpanded, setIsExpanded] = useState<Boolean>(false);
  
//     const toggleExpand = () => {
//       setIsExpanded(!isExpanded);
//     };
  
//     return (
//       <p onClick={toggleExpand}>
//         {isExpanded ? text : text.slice(0, 309).concat('....')}
//         {text.length > 2 && !isExpanded && '...' && <button className='px-1 text-lg text-blue-600 font-bold cursor-pointer hover:underline hover:text-blue-900'>Read Me</button>}
//       </p>
//     );
//   }


const Hero:React.FC = () => {
 const [IsClicked, SetIsClicked] = useState<boolean>(false); 
 
 const ToggleClick = ()=> {
    SetIsClicked(!IsClicked);
 }
 
 return (
    <div className='Absolute px-2 py-2'>
        <h1 className='px-2 py-8 font-bold text-5xl'> Animal Identification </h1>
        {IsClicked ? <>
          <p className='px-2 -mt-4 mb-10 cursor-pointer hover:text-gray-600' onClick={ToggleClick}> Animal Identification Details <br/>
          We understand the struggles and the importance of making timely livestock management decisions. We offer a comprehensive range of products, including premium calf ear tags, feedlot tags, and pre-numbered options, designed to make sorting and identifying livestock quick and easy.  
          <br/><p className='inline-block'><p className='text-black inline-block font-bold text-lg'> Size and Color Options: </p> When it comes to the youngest members of your herd, it can be beneficial to tag them right away, but tag size matters! Ear tags intended for grown cows can be bulky and oversized for calves, creating a snagging hazard and increasing the chances of split ears. Our calf tags are appropriately sized for calves and are meticulously crafted to be durable, reliable, and comfortable for your young livestock. Manufactured from high-quality materials with a one-piece design, these tags are designed to withstand the rigors of farm life, ensuring your calves enjoy a quality life and retain their tags for accurate record keeping. With our calf tags, you can have complete peace of mind, knowing all your calves are accounted for. Kencove tags also come in a variety of colors to help keep you organized.</p>
          <br/><br/><p className='inline-block'><p className='text-black font-bold inline-block text-lg'> Feedlot Tags are Fast and Clean: </p> Dealing with a large influx of livestock from various sources can be complicated and comes with heightened health risks, but our feedlot tags are tailored to overcome these obstacles. The No-Snag, one-piece design makes tagging by the trailer load quick and efficient. The sharp tip allows for clean and precise insertion, which minimizes exposure and chances for infection and disease. Feedlot tags are designed to stay securely in place and remain legible, even in harsh weather conditions. With these dependable tags, identifying and tracking your animals becomes a breeze.</p>
          <br/><p className='inline-block'><p className='text-black font-bold inline-block text-lg'> Pre-Numbered Tags for Unmatched Convenience: </p> We understand that time is of the essence on a busy farm. We offer pre-numbered tags ready to use straight out of the box to save you precious hours. Say goodbye to the tedious task of manually numbering each tag; our pre-numbered options are designed to get your livestock tagged quickly and efficiently. Make visual herd inspection even easier with multiple color options to suit any color code system. Embrace the convenience of our pre-numbered animal identification tags and optimize your farm's productivity. </p>
          <br/><p className='inline-block'><p className='text-black font-bold inline-block text-lg'> Uncompromising Quality You Can Rely On: </p> At Kencove Farm Fence Supplies, we take immense pride in providing only the highest quality products. Our animal identification tags are no exception. Rigorously tested and farmer-approved, our tags have demonstrated their ability to withstand the test of time and retention. You can trust our unwavering commitment to delivering reliable, long-lasting tags that cater to your farm's unique needs.  </p>
          <br/><p className='inline-block mb-5'><p className='text-black font-bold inline-block text-lg'> Shop with Confidence: </p> When you choose Kencove Farm Fence Supplies, you're not just investing in exceptional tags; you're also choosing exceptional service and support. Our knowledgeable team can assist you with any questions or concerns, ensuring you find the perfect tags for your livestock operation. We take great pride in delivering an exceptional customer experience, from browsing our wide selection to fast shipping to your door. 
With over 40 years of experience serving farmers and agricultural professionals, Kencove Farm Fence Supplies has established a reputation for reliability, durability, and exceptional customer service. Shop our wide range of animal identification tags and experience the Kencove Farm Fence Supplies advantage. Your livestock deserves the best; we're here to help you provide just that.   </p>  
          </p>
        </>: <>
        <p className='px-2 -mt-4 mb-10 cursor-pointer hover:text-gray-600' onClick={ToggleClick}> Animal Identification Details <br/>
          We understand the struggles and the importance of making timely livestock management decisions. We offer a comprehensive range of products, including premium calf ear tags, feedlot tags, and pre-numbered options, designed to make sorting and identifying livestock quick and easy.
          <button className='px-1 text-lg underline text-blue-600 font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={ToggleClick}>Read More</button>
          </p>
        </>}
        <div>

            <p className='px-2 -mt-8 cursor-pointer hover:text-gray-600'>
            {/* <ExpandableParagraph text={sampleText} /> */}

            </p>
        </div>
        
    </div>
  )
}

export default Hero;
