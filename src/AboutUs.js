import Carousel from 'react-bootstrap/Carousel'
import "react-bootstrap/dist/react-bootstrap.min.js";
import Card from 'react-bootstrap/Card' 
import {Row,Col,Container,Stack} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './style.css'
import './styleContact.css'
import ContactUs from './ContactUs';
import CarouselComponent from './CarouselComponent';
//import {AiFillStar} from 'react-icons/ai'

const AboutUs=(props)=>{
    return(
     <div className='body'>
        <div>
          <CarouselComponent/>
        </div>
        <div>
          <h3 class='fav_head'>Our Special Dishes</h3>
        </div>

     <div  className='page-margin'>
     <Stack direction="horizontal" gap={3}>
       <Row xs={1} md={3} className="g-4">        
          <Col>
            <Card className='card-contaier card-container'>
              <div className='card-image'>
                <img variant="top" src="images\drinks.jpg"  width="40" height="50" />
              </div>
              <Card.Body>
                <Card.Title>Drinks</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div class="overlay">
                <img className="bgImage" variant="top" src="images\juice.jpg"/>
              </div>
            </Card>
          </Col>    
          <Col>
            <Card className='container card-container'>
              <div className='card-image'>
                <img variant="top" src="images\pastries.jpg"  width="40" height="50" />
              </div>  
              <Card.Body>
                <Card.Title>Pastries</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <div class="overlay">
                  <img className="bgImage" variant="top" src="images\pastrybg.jpg"/>
                </div>
              </Card.Body>
            </Card>
          </Col>    
          <Col>
          
            <Card className='container card-container'>
              <div className='card-image'>
                <img variant="top" src="images\icecream.jpg"  width="40" height="50" />
              </div>
              <Card.Body>
                <Card.Title>Ice-Cream</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div class="overlay">
                <img className="bgImage" variant="top" src="images\Ice_Cream.jpg"/>
            </div>
            </Card>
          </Col>    
          <Col>
            <Card className='container card-container'>
              <div className='card-image'>
                <img variant="top" src="images\fries.jpg"  width="40" height="50" />
              </div>
              <Card.Body>
                <Card.Title>French Fry</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div class="overlay">
                <img className="bgImage" variant="top" src="images\friesbg.jpg"/>
              </div>
            </Card>           
          </Col>    
          <Col>
            <Card className='container card-container'>
             <div className='card-image'>
                <img variant="top" src="images\pizza.jpg"  width="40" height="50" />
              </div>
              <Card.Body>
                <Card.Title>Pizza and Burger</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div class="overlay">
                <img className="bgImage" variant="top" src="images\pizzaburger.jpg"/>
            </div>
            </Card>
          </Col>    
          <Col>            
         
          <Card className='container card-container'>
            <div className='card-image'>
                <img variant="top" src="images\coffee.jpg"  width="40" height="50" />
              </div>
              <Card.Body>
                <Card.Title>Coffee</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <div class="overlay">
                <img className="bgImage" variant="top" src="images\coffeebg.jpg"/>
            </div>
            </Card>
          </Col>        
      </Row>
      </Stack>
     </div>
     <div>
       <h3 class='fav_head'>How It Works</h3>
     </div>

     <div  className='page-margin'>
     <Stack direction="horizontal" gap={3}>
       <Row xs={1} md={5} className="g-5">        
          <Col className="steps">
            <img className="food_steps" src="images\food_order.png"/>
            <h6>Choose Your Favourite Food</h6>
          </Col>    
          <Col className="steps">
            <img className="food_steps" src="images\delivery.jpg"/>
            <h6>Free And Fast Delivery</h6>
          </Col>    
          <Col className="steps">
            <img className="food_steps" src="images\booktable.jpg"/>  
            <h6>Or Reserve a Table</h6>        
          </Col>   
          <Col className="steps">
            <img className="food_steps" src="images\payment.jpg"/> 
            <h6>Easy and Secured Payment </h6>            
          </Col>  
          <Col className="steps">
            <img className="food_steps" src="images\enjoy.jpg"/>   
            <h6>And Finally, Enjoy Yor Food </h6>        
          </Col>   
               
      </Row>
      </Stack>
      <div>
        <h3 className="heading"> Our Customers Reviews </h3>
      </div>
      <div>
      <Stack direction="horizontal" gap={3}>
       <Row xs={1} md={2} className="g-2">  
        <section className="review" id="review">
         
          
          <div className="box-container">
            <Col>
              <div className="box">
                  <img src="images/pic1.png" alt=""/>
                  <h6>Marina Gomes</h6>
                  <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fa fa-star"></i>
                  </div>
                  <p>Great Service ,Delicious food</p>
              </div>
              </Col>
              <Col>
              <div className="box">
                  <img src="images/pic2.png" alt=""/>
                  <h6>john deo</h6>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half"></i>
                  </div>
                  <p>Enjoyed the food!!Delicious!</p>
              </div>
              </Col>
              <Col>
              <div className="box">
                  <img src="images/pic1.png" alt=""/>
                  <h6>Goerge D Silva</h6>
                  <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fa fa-star"></i>
                  </div>
                  <p>Efficient and fast delivery,keep it up.. </p>
              </div>
             </Col>
             <Col>
              <div className="box">
                  <img src="images/pic3.png" alt=""/>
                  <h6>Silvia Seli</h6>
                  <div className="stars">
                      
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                  </div>
                  
                  <p> Great ambience.</p>
              </div>
              </Col>
          </div>

          </section>
          </Row>
         </Stack>
      </div>
    </div>
    <div>
      <ContactUs/>
    </div>

      
     
     




   </div> 





    );
}

export default AboutUs;