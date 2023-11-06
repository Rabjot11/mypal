import homepet from './images/pethome.jpg';
import p2 from './images/p2.jpg';
export function Home()
{
    return(
        <div
            class = "image"
            style = {{
               height: "900px",
               width: "1500px",
               backgroundImage:
               'url("https://thumbs.dreamstime.com/z/dog-cat-above-white-banner-5900263.jpg?w=992")',
               backgroundSize: "contain",
               backgroundRepeat: "no-repeat",
              
            }}>


                
        {/* <img height={800} width={1500} src={homepet} alt='image'  />         */}
        {/* <img height={800} width={1500} src="https://thumbs.dreamstime.com/z/dog-cat-above-white-banner-5900263.jpg?w=992" alt='image'  />         */}
        </div>
        
    )
}export function Shop()
{
    return <h1>Shop components</h1>
}export function Order()
{
    return <h1>Order components</h1>
}export function Adopt()
{
    return <h1>Adopt components</h1>
}export function Contact()
{
    return <h1>Contact components</h1>
}