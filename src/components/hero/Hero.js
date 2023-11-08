import React from 'react'

function Hero() {
  return (
    <div
            // class = "image"
            // style = {{
            //    height: "900px",
            //    width: "1500px",
            //    backgroundImage:
            //    'url("https://img.freepik.com/free-photo/smiling-young-caucasian-woman-holding-her-pet39s-cheeks-hoodie-white-background-love-dog-owner-concept_197531-31316.jpg?w=996&t=st=1699360896~exp=1699361496~hmac=010d0b01f7406ced0cd849847613e9de01d99f19245d45d39df9f109b050e46f")',
            //    backgroundSize: "contain",
            //    backgroundRepeat: "no-repeat",
              
            // }}
            ><div class="hero-background">
                     <center><img className="hero-bg"src="https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=360&t=st=1699361419~exp=1699362019~hmac=15d9f315a1e607687e6ad83954fdb7ef7a357067318e7fecd3072c05e485b3d7" width={320}  />
                        <img className="hero-bg"src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=996&t=st=1699361261~exp=1699361861~hmac=490d4a2d1db81b3fadadb7c71d2df9e954c2f93f1290d3d3c5b5290026bc2eb4" height={500} />
                     
                        </center>
            </div>
               
                </div>
  )
}

export default Hero